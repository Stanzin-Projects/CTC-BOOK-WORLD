# CTC Book World

Marketing website for CTC Book World Private Limited — notebook manufacturers, publishers and exporters since 1985, with a plant at HSIIDC Industrial Estate, Kundli, Sonipat.

Built as a static site with Vite: hand-written HTML, CSS and JavaScript, no framework and no backend.

## Sections

- Hero with the Seven Days notebook range and company facts
- Five product collections and a filterable catalogue with pricing
- Manufacturing process walkthrough and plant tour
- Customer stories and testimonials
- Bulk and export enquiry form (front-end validation only)

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production output in dist/
npm run preview  # serve the build
```

## Structure

```
index.html        page markup
src/style.css     design system, notebook cover art, responsive rules
src/main.js       navigation, filters, scroller, reveals, form handling
public/           logo and static assets
worker/           Cloudflare Worker that serves the built assets
deploy.json       hosting manifest
```

## Notes

- Product imagery is drawn in CSS, so the site works offline and needs no image hosting.
- Fonts are loaded from Google Fonts (Fraunces and Manrope).
- The enquiry form validates on the client and shows contact details; wiring it to an inbox requires a backend or form service.

© CTC Book World Pvt. Ltd. CIN U21099DL2021PTC380165
