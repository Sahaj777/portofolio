# Sahaj Godhani — Portfolio

AI engineer portfolio site (static). Live: [sahajgodhani.in](https://sahajgodhani.in/)

## Structure

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Main site (production) |
| `demo.html` | Working copy — sync to `index.html` before deploy if you edit demo |
| `assets/` | Images, CSS, JS |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | SEO |
| `CNAME` | Custom domain for GitHub Pages |

## Deploy to GitHub (`Sahaj777/portofolio`)

1. Replace old template files (`portfolio-details.html`, `starter-page.html`, old `forms/` folder).
2. Push this folder to the `main` branch.
3. GitHub → **Settings → Pages** → Source: **Deploy from branch** → `main` / `/ (root)`.
4. Keep **CNAME** as `sahajgodhani.in` if using custom domain.

```bash
cd /path/to/portfolio
git init
git remote add origin https://github.com/Sahaj777/portofolio.git
git add index.html assets/ robots.txt sitemap.xml site.webmanifest CNAME .nojekyll README.md
git commit -m "Launch new portfolio — AI site, contact form, responsive"
git branch -M main
git push -u origin main --force
```

> Use `--force` only if you intend to fully replace the old Bootstrap site.

## Contact form

Uses [FormSubmit](https://formsubmit.co) → `sahajgodhani777@gmail.com`.  
After first live submit, confirm the activation email from FormSubmit.

## Before go-live

- [ ] Add `favicon.ico` and `apple-touch-icon.png` at repo root (optional)
- [ ] Add `assets/og-cover.jpg` for social previews (optional)
- [ ] Test contact form on `https://` (not `file://`)
- [ ] Activate FormSubmit via inbox link
