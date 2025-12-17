# 🐦 BirdHub

A beautiful way to visualize and share your birding journey. Like GitHub for birders!

**[🌐 Live Demo →](https://jacobjameson.github.io/birdhub)**

---

## ✨ Features

- 📊 **GitHub-style contribution graph** for your bird sightings
- 🌍 **Flock directory** - see other birders and their stats
- 🔄 **Auto-sync** - your profile updates daily from eBird
- 📸 **Export** - download beautiful PNG images to share
- 📱 **Mobile-friendly** - looks great on any device

---

## 🚀 Quick Start

### Just want to visualize your data?

1. Visit [jacobjameson.github.io/birdhub](https://jacobjameson.github.io/birdhub)
2. Download your life list from [eBird](https://ebird.org/lifelist?r=world&time=life&fmt=csv)
3. Drop the CSV on the page
4. Export as PNG and share! 🎉

---

## 🔄 Auto-Sync Setup

Want your own profile that updates automatically every day? Here's how:

### Step 1: Fork the Repository

Click **[Fork](https://github.com/jacobjameson/birdhub/fork)** to create your own copy.

### Step 2: Add Your eBird Credentials

Your credentials are stored securely as GitHub Secrets (encrypted, never visible).

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add two secrets:

| Name | Value |
|------|-------|
| `EBIRD_USERNAME` | Your eBird email |
| `EBIRD_PASSWORD` | Your eBird password |

### Step 3: Update Your Profile

Edit `data.json` and update the profile section:

```json
{
  "profile": {
    "name": "Your Name",
    "username": "your-github-username",
    "github": "your-github-username",
    "location": "City, State"
  }
}
```

### Step 4: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Click **Save**

### Step 5: You're Done! 🎉

Your profile is live at: `https://your-username.github.io/birdhub`

The GitHub Action syncs your eBird data daily at 7am UTC.

---

## 🌍 Join the Flock

Want to appear in the [Birder Directory](https://jacobjameson.github.io/birdhub)?

1. Complete the auto-sync setup above
2. Edit `scripts/sync-directory.js` in the **main repo**
3. Add yourself to `BIRDER_REGISTRY`:

```javascript
{
  username: "your-github-username",
  name: "Your Name",
  github: "your-github-username",
  location: "City, State"
}
```

4. Submit a Pull Request!

---

## 📁 Project Structure

```
birdhub/
├── index.html              # Main app
├── data.json               # Your bird data
├── data/
│   └── directory.json      # Flock directory
├── scripts/
│   ├── fetch-ebird.js      # eBird scraper
│   └── sync-directory.js   # Directory sync
└── .github/workflows/
    ├── sync-ebird.yml      # Daily eBird sync
    └── sync-directory.yml  # Daily directory sync
```

---

## 🔒 Privacy & Security

- ✅ Credentials are **encrypted** as GitHub Secrets
- ✅ Your data stays in **your repo**
- ✅ **Open source** - review the code yourself!

---

## 🔄 Automatic Updates

Your fork automatically stays updated with new BirdHub features!

**How it works:**
- A weekly GitHub Action syncs new features from the main repo
- Your `data.json` (your birds) is **never touched**
- New features like badges, themes, etc. just appear!

**Files that auto-update:**
- `index.html` (the app)
- `scripts/fetch-ebird.js` (eBird sync)
- `README.md` (documentation)

**Files that are yours:**
- `data.json` (your bird data)
- Your GitHub Secrets (credentials)

---

## 🛠️ Tech Stack

- **D3.js** - Beautiful contribution graph
- **Playwright** - eBird data fetching
- **PapaParse** - CSV parsing
- **html2canvas** - PNG export

---

## 💚 Contributing

We'd love your help! Check out [CONTRIBUTING.md](CONTRIBUTING.md).

Ideas welcome:
- 🐛 Bug fixes
- ✨ New features
- 🎨 Design improvements
- 📖 Documentation

---

## 📄 License

MIT - Fork it, customize it, make it yours!

---

<p align="center">
  <i>Happy birding! 🐦🌿</i>
</p>
