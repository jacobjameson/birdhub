# 🗺️ BirdHub Roadmap

This document outlines the vision for BirdHub's evolution from a simple visualization tool to a full birding social platform.

---

## Phase 1: Static Site ✅ (Current)

**Status: Complete**

- [x] GitHub-style contribution graph
- [x] eBird CSV upload & parsing
- [x] Hover tooltips with species details
- [x] PNG export for social sharing
- [x] Year selector
- [x] Profile customization
- [x] GitHub profile linking
- [x] Birder Directory (PR-based)
- [x] Share to Twitter/X

---

## Phase 2: Enhanced Directory

**Goal: Make discovery and connection easier without requiring a backend**

- [ ] **Searchable directory** - Filter by location, species count
- [ ] **Profile pages** - Each birder gets `big-year.app/u/username`
- [ ] **Badges/Achievements** - Display earned achievements
- [ ] **"Birder of the Month"** - Featured community members
- [ ] **Regional leaderboards** - Static, updated via GitHub Actions

### Implementation Notes
- Could use GitHub API to fetch profile data
- Static JSON files for leaderboards, updated daily via Actions
- Achievements calculated client-side based on data

---

## Phase 3: User Accounts (Firebase)

**Goal: Enable persistent profiles and social features**

### Authentication
- [ ] Sign in with Google
- [ ] Sign in with GitHub
- [ ] Link eBird account (OAuth if available)

### Profile Features
- [ ] Persistent user profiles stored in Firestore
- [ ] Upload & store observation data
- [ ] Custom profile URLs (`big-year.app/u/username`)
- [ ] Profile photos/avatars
- [ ] Bio and location
- [ ] Social links (GitHub, Twitter, eBird, iNaturalist)

### Data Management
- [ ] Store observations in Firestore
- [ ] Sync with eBird (manual re-upload or API)
- [ ] Data export (CSV, JSON)
- [ ] Privacy controls (public/private profiles)

---

## Phase 4: Social Features

**Goal: Build a birding community**

### Following System
- [ ] Follow other birders
- [ ] Followers/Following counts on profiles
- [ ] "People you may know" suggestions
- [ ] Follow notifications

### Activity Feed
- [ ] See recent sightings from people you follow
- [ ] "X spotted a new species!" notifications
- [ ] Celebrate milestones (100 species, streaks, etc.)
- [ ] Like/react to sightings

### Comments & Interaction
- [ ] Comment on sightings
- [ ] Share tips about locations
- [ ] Tag other birders

---

## Phase 5: Gamification

**Goal: Make birding more engaging and fun**

### Achievements
- [ ] **Milestone badges**: 10, 25, 50, 100, 250, 500 species
- [ ] **Streak badges**: 7-day, 30-day, 365-day streaks
- [ ] **Category badges**: First raptor, first warbler, etc.
- [ ] **Seasonal badges**: Spring migration, Christmas bird count
- [ ] **Location badges**: Birded in 5 states, 10 countries

### Leaderboards
- [ ] Global species count
- [ ] Regional/country leaderboards
- [ ] Monthly "Big Month" competitions
- [ ] Year lists (Jan 1 - Dec 31)
- [ ] Friend leaderboards

### Challenges
- [ ] Weekly challenges ("Spot 3 woodpecker species")
- [ ] Community events
- [ ] Personal goal setting

---

## Phase 6: Advanced Features

**Goal: Become the go-to platform for birders**

### Lists & Organization
- [ ] Multiple lists (Life list, Year list, Location lists)
- [ ] Trip reports
- [ ] Target species lists
- [ ] "Need to see" wishlists

### Location Features
- [ ] Map view of sightings
- [ ] Hotspot integration
- [ ] "Birds seen here" for locations
- [ ] Location-based recommendations

### Insights & Analytics
- [ ] Personal birding statistics
- [ ] Species frequency charts
- [ ] Best birding months/times
- [ ] Year-over-year comparisons
- [ ] Predicted species for locations

### Integrations
- [ ] eBird API sync
- [ ] iNaturalist import
- [ ] Merlin Bird ID integration
- [ ] Calendar integration for birding trips

---

## Technical Architecture (Proposed)

### Frontend
- React or Vue.js
- Tailwind CSS
- D3.js for visualizations

### Backend
- Firebase Authentication
- Firestore for user data
- Cloud Functions for API
- Cloud Storage for images

### Alternative: Full Stack
- Next.js or Remix
- PostgreSQL (Supabase)
- Vercel/Railway hosting

---

## Community Input Wanted!

What features would YOU want to see? Open an issue or discussion to share your ideas!

### Questions to Consider
1. What would make you use this over eBird's built-in features?
2. How important is social/following vs. personal tracking?
3. What achievements would be meaningful to you?
4. Would you pay for premium features? Which ones?

---

## Contributing

Interested in helping build these features? See [CONTRIBUTING.md](CONTRIBUTING.md)!

Priority areas:
- 🎨 UI/UX design
- ⚛️ React/Firebase development  
- 📊 Data visualization
- 🐦 Domain expertise (avid birders!)

---

*This roadmap is aspirational and subject to change based on community feedback and contributor availability.*
