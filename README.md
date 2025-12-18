# 🐦 BirdHub

A beautiful way to visualize and share your birding journey. Like GitHub for birders!

**[🌐 Live Demo →](https://jacobjameson.github.io/birdhub)**

---

## ✨ Features

- 📊 **GitHub-style contribution graph** for your bird sightings
- 🌍 **Flock directory** - see other birders and their stats
- 🔄 **Auto-sync** - profiles update daily from eBird
- 📸 **Export** - download beautiful PNG images to share
- 📱 **Mobile-friendly** - looks great on any device

---

## 🚀 Create Your Profile

### Quick Way: Use the Template

1. Go to **[birdhub-profile](https://github.com/jacobjameson/birdhub-profile)**
2. Click **"Use this template"** → **"Create new repository"**
3. Follow the 5-minute setup in the README
4. Your profile syncs from eBird daily!

**Your profile will be at:** `https://YOUR-USERNAME.github.io/REPO-NAME`

---

## 🌍 Join the Flock

Want to appear in the directory? After setting up your profile:

1. Edit `scripts/sync-directory.js` in **this repo**
2. Add yourself to `BIRDER_REGISTRY`:

```javascript
{
  username: "your-github-username",
  name: "Your Name", 
  github: "your-github-username",
  location: "City, State",
  repo: "birdhub-profile"  // or your custom repo name
}
```

3. Submit a Pull Request!

---

## 🎯 Just Want to Visualize?

Don't want a permanent profile? Just use the homepage:

1. Visit [jacobjameson.github.io/birdhub](https://jacobjameson.github.io/birdhub)
2. Download your life list from [eBird](https://ebird.org/lifelist?r=world&time=life&fmt=csv)
3. Drop the CSV on the page
4. Export as PNG and share! 🎉

---

## 📁 Project Structure

```
birdhub/                    # Main app (this repo)
├── index.html              # Full app with directory + CSV upload
├── data/directory.json     # Auto-updated flock directory
└── scripts/
    └── sync-directory.js   # Fetches stats from all birders

birdhub-profile/            # Template for user profiles
├── index.html              # Standalone profile page
├── data.json               # User's bird data
└── fetch-ebird.js          # eBird sync script
```

---

## 🔒 Privacy & Security

- ✅ Credentials are **encrypted** as GitHub Secrets
- ✅ Your data stays in **your repo**
- ✅ **Open source** - review the code yourself!

---

## 🛠️ Tech Stack

- **D3.js** - Beautiful contribution graph
- **Playwright** - eBird data fetching
- **PapaParse** - CSV parsing
- **html2canvas** - PNG export

---

## 💚 Contributing

Ideas welcome! Open an issue or PR:
- 🐛 Bug fixes
- ✨ New features (badges, themes, etc.)
- 🎨 Design improvements

---

## 📄 License

MIT - Fork it, customize it, make it yours!

---

<p align="center">
  Created by <a href="https://github.com/jacobjameson">Jacob Jameson</a><br>
  <i>Happy birding! 🐦🌿</i>
</p>
