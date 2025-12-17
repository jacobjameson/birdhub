# 🐦 Big Year

A GitHub-style contribution graph for birders. Track your life list like you track your code commits.

**[View Live Demo →](https://jacobjameson.github.io/big_year)**

---

## Two Ways to Use Big Year

### 🚀 Quick Visualization (No Setup)

Just want to see your data visualized? 

1. Go to [jacobjameson.github.io/big_year](https://jacobjameson.github.io/big_year)
2. Download your life list from [eBird](https://ebird.org/lifelist?r=world&time=life&fmt=csv)
3. Upload the CSV
4. Export as PNG to share!

---

### 🔄 Auto-Sync Setup (Recommended)

Want your profile to **update automatically every day**? Set up auto-sync with your eBird credentials!

#### Step 1: Fork the Repository

1. Click **[Fork](https://github.com/jacobjameson/big_year/fork)** to create your own copy
2. Enable GitHub Pages:
   - Go to **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**

#### Step 2: Add Your eBird Credentials

Your credentials are stored securely as GitHub Secrets (encrypted, never visible).

1. Go to your forked repo's **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add two secrets:

| Name | Value |
|------|-------|
| `EBIRD_USERNAME` | Your eBird email/username |
| `EBIRD_PASSWORD` | Your eBird password |

⚠️ **Security Note:** GitHub Secrets are encrypted and never exposed in logs. Only GitHub Actions can access them.

#### Step 3: Customize Your Profile

Edit `index.html` and update the `profileConfig`:

```javascript
const profileConfig = {
  name: "Your Name",
  username: "your-github-username",
  bio: "Your birding bio here",
  avatarEmoji: "🦅",  // 🐦 🦆 🦉 🦜
  github: "your-github-username",
  location: "City, State"
};
```

#### Step 4: Run the Sync

The sync runs automatically every day at 7am UTC. To run it immediately:

1. Go to **Actions** tab in your repo
2. Click **Sync eBird Life List**
3. Click **Run workflow** → **Run workflow**

#### Step 5: View Your Profile!

Your profile is live at: `https://your-username.github.io/big_year`

---

## How Auto-Sync Works

```
┌─────────────────────────────────────────────────────────────┐
│                   YOUR FORKED REPO                          │
│                                                             │
│  GitHub Action runs daily at 7am UTC                       │
│  ↓                                                          │
│  Uses Playwright to:                                        │
│    1. Log into eBird with your credentials                 │
│    2. Download your life list CSV                          │
│    3. Convert to data.json                                 │
│    4. Commit the update                                    │
│  ↓                                                          │
│  Your profile automatically shows latest birds!            │
└─────────────────────────────────────────────────────────────┘
```

---

## Join the Directory

Want to appear in the [Birder Directory](https://jacobjameson.github.io/big_year/#directory)?

1. Complete the auto-sync setup above
2. In the **main repo** (not your fork), edit `scripts/sync-directory.js`
3. Add yourself to `BIRDER_REGISTRY`:

```javascript
{
  username: "your-github-username",
  name: "Your Name",
  github: "your-github-username",
  location: "City, State"
}
```

4. Submit a Pull Request

The main repo fetches everyone's `data.json` daily and updates the directory!

---

## File Structure

```
big_year/
├── index.html                          # Main app
├── data.json                           # Your bird data (auto-generated)
├── data/
│   └── directory.json                  # Aggregated birder directory
├── scripts/
│   ├── fetch-ebird.js                  # eBird scraper (Playwright)
│   └── sync-directory.js               # Directory aggregator
├── .github/workflows/
│   ├── sync-ebird.yml                  # Daily eBird sync
│   └── sync-directory.yml              # Daily directory sync
└── README.md
```

---

## Troubleshooting

### Sync failed?

1. Check **Actions** tab for error logs
2. Verify your eBird credentials are correct
3. Make sure 2FA isn't blocking the login
4. Check if eBird's website changed (open an issue!)

### Profile not updating?

- Make sure GitHub Pages is enabled
- Check that `data.json` was committed
- Wait a few minutes for Pages to deploy

### Want to sync manually?

Go to **Actions** → **Sync eBird Life List** → **Run workflow**

---

## Privacy & Security

- **Credentials are encrypted** - GitHub Secrets are never exposed
- **Data stays in your repo** - We don't collect or store your data
- **Open source** - Review the code yourself!

---

## Roadmap

See [ROADMAP.md](ROADMAP.md) for planned features:
- [ ] eBird API integration (when available)
- [ ] Achievements & badges
- [ ] Following other birders
- [ ] Activity feeds

---

## Tech Stack

- **D3.js** - Contribution graph
- **Playwright** - eBird scraping
- **PapaParse** - CSV parsing
- **html2canvas** - PNG export
- **GitHub Actions** - Automated sync

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). We'd love help with:
- 🐛 Bug fixes
- ✨ New features  
- 📖 Documentation
- 🎨 UI improvements

---

## License

MIT License - Fork it, customize it, make it yours!

---

*"Look deep into nature, and then you will understand everything better."* — Albert Einstein
