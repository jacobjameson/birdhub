/**
 * Sync Birder Directory
 * 
 * This script fetches data.json from each registered birder's GitHub Pages
 * and compiles an updated directory with fresh species counts.
 * 
 * Run via: node scripts/sync-directory.js
 */

const fs = require('fs');
const path = require('path');

// Registry of birders - add yourself here via PR!
// Your fork must have a data.json file at the root
const BIRDER_REGISTRY = [
  {
    username: "jacobjameson",
    name: "Jacob Jameson",
    github: "jacobjameson",
    location: "Cambridge, MA",
    // Data will be fetched from: https://jacobjameson.github.io/birdhub/data.json
  },
  // Add more birders here!
];

async function fetchBirderData(username) {
  const url = `https://${username}.github.io/birdhub/data.json`;
  
  try {
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      timeout: 10000
    });
    
    if (!response.ok) {
      console.log(`  ⚠️  Could not fetch data for ${username} (${response.status})`);
      return null;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`  ⚠️  Error fetching ${username}: ${error.message}`);
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
    
    const data = await fetchBirderData(birder.username);
    const stats = calculateStats(data?.observations || data);
    
    directory.push({
      username: birder.username,
      name: birder.name,
      github: birder.github,
      location: birder.location || null,
      profileUrl: `https://${birder.username}.github.io/birdhub`,
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
