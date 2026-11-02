# www

🌐 Personal Website!

## Overview

- The index page is a static file served by [Cloudflare Pages](https://developers.cloudflare.com/pages/).
- `_redirects` handles old URL redirections such as `./eng-practices/*` -> //google-engineering-practices.translation.shuuji3.xyz/*`.
- `functions/.well-known/webfinger.js` serves the webfinger endpoint with `Content-Type: application/jrd+json` HTTP response header for the fediverse discovery.
- Other services are running on the self-hosted home servers, GitHub Pages, Cloudflare services, or Cloud Run.

## Local development

```sh
wrangler pages dev
```

## Deploy

Pushing to `main` deploys via GitHub Actions (`.github/workflows/deploy.yaml`).
