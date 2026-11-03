# Interlock paving website

Arabic RTL Next.js website.

## Run

```sh
npm ci
npm run dev
npm run lint
npm run build
```

The canonical production origin defaults to `https://moqawelinterlock.com`. Set `APP_URL` to override it when intentionally changing the public domain. Blog pages are statically rendered with canonical URLs, social metadata, article and FAQ structured data, and sitemap entries.

Contact: 0546269247. The quotation form prepares a WhatsApp message; it does not store submissions. Service availability, measurements, materials and scheduling are confirmed through contact. The unverified temporary company name, project measurements, free-site-visit promises, hours and demo articles were removed.

The logo is `/public/logo.svg`; photo provenance is documented in ASSET_SOURCES.md.


## Blog

The 15 sourced Arabic guides are in `data/blog-posts.json`. Each record contains its author, primary and supporting keywords, source text with inline service links, image and alt text, related guides, dates and FAQ headings. The article template generates a nested table of contents from section and subsection headings. Photos use the existing project archive documented in `ASSET_SOURCES.md`.
