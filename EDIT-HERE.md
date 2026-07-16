# Edit the website without touching the Chinese pages

The site is now **English-first**. Edit English only. The `繁中` button automatically translates the current English page to Traditional Chinese when the website is online.

## Shared settings

Edit `assets/js/site-config.js` to change your name, links, colours, or automatic translation.

## Main page text

Edit only the English files: `index.html`, `about.html`, `research.html`, `projects.html`, `portfolio.html`, `cv.html`, and `contact.html`.

You do not need to edit anything in `zh-tw/` for routine updates. Those files remain as offline fallback snapshots.

## Research and project subpages

Edit the English fields in `assets/js/detail-data.js`. The online Chinese view translates them automatically, so the `zh` values do not need updating.

## PDF CV

1. Edit the `CV = {...}` section in `scripts/generate_cv.py`.
2. Run `python3 scripts/generate_cv.py` from the site folder.
3. The PDF is written to `assets/files/brandon-chen-cv.pdf`.

Automatic translation requires an internet connection and uses Google's translated-site service. English and the existing Chinese fallback snapshots remain static.
