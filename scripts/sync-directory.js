/**
 * Sync Birder Directory
 * 
 * Fetches data.json from each registered birder's profile repo
 * and compiles the directory with fresh species counts.
 */

const fs = require('fs');
const path = require('path');

// Registry of birders - add yourself here via PR!
const BIRDER_REGISTRY = [
  {
    username: "jacobjameson",
    name: "Jacob Jameson",
    github: "jacobjameson",
    location: "Cambridge, MA",
    repo: "birdhub_profile_jj",  // Can be birdhub, birdhub-profile, or custom
  },
  // Add more birders here!
  // {
  //   username: "your-username",
  //   name: "Your Name",
  //   github: "your-username",
  //   location: "City, State",
  //   repo: "birdhub-profile",
  // },
];

async function fetchBirderData(birder) {
  const repo = birder.repo || 'birdhub-profile';
  const url = `https://${birder.username}.github.io/${repo}/data.json`;
  
  try {
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      timeout: 10000
    });
    
    if (!response.ok) {
      console.log(`  ⚠️  Could not fetch data for ${birder.username} (${response.status})`);
      return null;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`  ⚠️  Error fetching ${birder.username}: ${error.message}`);
    return null;
  }
}

function calculateStats(observations) {
  if (!observations || !Array.isArray(observations)) {
    return { species: 0, observations: 0, lastSighting: null };
  }
  
  const uniqueSpecies = new Set(observations.map(o => o.sciName)).size;
  const dates = observations.map(o => new Date(o.date)).filter(d => !isNaN(d));
  const lastSighting = dates.length > 0 
    ? new Date(Math.max(...dates)).toISOString().split('T')[0]
    : null;
  
  return {
    species: uniqueSpecies,
    observations: observations.length,
    lastSighting
  };
}

async function syncDirectory() {
  console.log('🐦 Syncing Birder Directory...\n');
  
  const directory = [];
  
  for (const birder of BIRDER_REGISTRY) {
    console.log(`📡 Fetching data for @${birder.username}...`);
    
    const data = await fetchBirderData(birder);
    const stats = calculateStats(data?.observations || data);
    const repo = birder.repo || 'birdhub-profile';
    
    directory.push({
      username: birder.username,
      name: birder.name,
      github: birder.github,
      location: birder.location || null,
      profileUrl: `https://${birder.username}.github.io/${repo}`,
      species: stats.species,
      observations: stats.observations,
      lastSighting: stats.lastSighting,
      lastUpdated: new Date().toISOString()
    });
    
    console.log(`  ✅ ${birder.name}: ${stats.species} species\n`);
  }
  
  // Sort by species count (descending)
  directory.sort((a, b) => b.species - a.species);
  
  // Write to file
  const outputPath = path.join(__dirname, '..', 'data', 'directory.json');
  fs.writeFileSync(outputPath, JSON.stringify(directory, null, 2));
  
  console.log(`\n✨ Directory updated with ${directory.length} birders`);
  console.log(`📁 Written to: ${outputPath}`);
}

syncDirectory().catch(console.error);
