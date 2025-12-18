/**
 * Sync Birder Directory
 * 
 * Fetches data.json from each registered birder's profile repo
 * and compiles the directory with fresh species counts.
 */

const fs = require('fs');
const path = require('path');

// Registry of birders - add yourself here via PR!
// See CONTRIBUTING.md for instructions on joining the flock
const BIRDER_REGISTRY = [
  // {
  //   username: "your-github-username",
  //   name: "Your Name",
  //   github: "your-github-username",
  //   location: "City, State",
  //   repo: "birdhub-profile",  // or your custom repo name
  // },
  {
  username: "jacobjameson",
  name: "Jacob Jameson", 
  github: "jacobjameson",
  location: "Cambridge, MA",
  repo: "birdhub_profile_jcj"  // or your custom repo name
}
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
    return { species: 0, speciesThisYear: 0, observations: 0, lastSighting: null };
  }
  
  const currentYear = new Date().getFullYear();
  const uniqueSpecies = new Set(observations.map(o => o.sciName)).size;
  
  // Species seen this year
  const thisYearObs = observations.filter(o => {
    const year = new Date(o.date).getFullYear();
    return year === currentYear;
  });
  const speciesThisYear = new Set(thisYearObs.map(o => o.sciName)).size;
  
  const dates = observations.map(o => new Date(o.date)).filter(d => !isNaN(d));
  const lastSighting = dates.length > 0 
    ? new Date(Math.max(...dates)).toISOString().split('T')[0]
    : null;
  
  return {
    species: uniqueSpecies,
    speciesThisYear,
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
      speciesThisYear: stats.speciesThisYear,
      observations: stats.observations,
      lastSighting: stats.lastSighting,
      lastUpdated: new Date().toISOString()
    });
    
    console.log(`  ✅ ${birder.name}: ${stats.species} species (${stats.speciesThisYear} this year)\n`);
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
