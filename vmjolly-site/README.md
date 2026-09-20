# V.M. Jolly — one-page site

A small static replacement for the WordPress site at `vmjolly.com`.

## What it is

- Single HTML page
- Four accessible tab-style sections: Home, Publications, Genealogy, Contact
- Responsive/mobile friendly
- No framework, CMS, database, npm, or build step
- Suitable for GitHub Pages
- Existing WordPress artwork is currently loaded from the original image URLs

## Preview locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Put it in Git

```bash
git init
git add .
git commit -m "Initial V.M. Jolly site"
git branch -M main
```

Create a GitHub repository, then connect it:

```bash
git remote add origin git@github.com:YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## GitHub Pages

In the GitHub repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose `main` and `/ (root)`.
4. Save.

For a custom domain such as `vmjolly.com`, add it in GitHub Pages settings after the Pages site is working. GitHub can create/manage the repository `CNAME` file for you.

## Important: move the images into the repo before retiring WordPress

The page currently references Vanessa's existing WordPress image URLs so this project works immediately without duplicating the artwork. If the WordPress hosting is removed, those URLs may stop working.

Before taking WordPress offline, download these four files into an `assets/` directory and then replace the four remote `src=` values in `index.html` with local paths:

- `assets/header.png`
- `assets/home.png`
- `assets/publications.png`
- `assets/genealogy.png`

Original image URLs:

```text
https://vmjolly.com/wp-content/uploads/2026/06/cropped-V.M.-Jolly-2.png
https://vmjolly.com/wp-content/uploads/2026/06/Untitled-design-5-1024x683.png
https://vmjolly.com/wp-content/uploads/2026/06/3-2048x1365.png
https://vmjolly.com/wp-content/uploads/2026/06/Untitled-design-7-1024x683.png
```

## Files

- `index.html` — page content and links
- `styles.css` — layout and visual design
- `script.js` — tabs, hashes, and keyboard navigation

