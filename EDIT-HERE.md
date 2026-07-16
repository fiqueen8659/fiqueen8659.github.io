# Edit the website

The website is English-only. There are no duplicate language pages to maintain.

## Shared settings

Edit `assets/js/site-config.js` to change your name, email, profile links, taglines, site address, or colours.

## Main pages

- `index.html` - homepage
- `about.html` - biography
- `research.html` - research listing
- `projects.html` - project listing
- `portfolio.html` - portfolio
- `cv.html` - browser CV
- `contact.html` - contact page

## Add a research card and detail page

Edit `assets/js/research-data.js`.

Copy one complete topic object inside `RESEARCH_TOPICS`, paste it after another object, and change:

- `slug` - unique lowercase URL name, such as `ppp-rtk`
- `title` - card and page title
- `label` - small category label
- `summary` - card summary and page introduction
- `tags` - keyword pills
- `overview` and `challenge` - detail-page text
- `methods` - four animated method boxes
- `related` - links to other research or projects

The card and its full detail page are created automatically. You do not create another HTML file.

3DMA GNSS and Factor Graph Optimization are included as editable examples.

## Edit the Research Interests list

Edit `researchInterests` in `assets/js/site-config.js`. This list appears on the About page.

## Edit project subpages

Project details remain in `assets/js/detail-data.js`.

## PDF CV

1. Edit the `CV = {...}` section in `scripts/generate_cv.py`.
2. Run `python3 scripts/generate_cv.py` from the site folder.
3. The new PDF is written to `assets/files/brandon-chen-cv.pdf`.
