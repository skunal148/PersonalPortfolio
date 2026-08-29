# Kunal Shinde — Security Engineering Portfolio

An evidence-led static portfolio for security engineering, identity, vulnerability management, incident response, and workflow automation. It is designed for GitHub Pages and works from repository subpaths.

## Development

```bash
npm install
npm run dev
npm test
npm run test:e2e
```

For a production check, run `npm run build` followed by `npm run verify:dist`.

## GitHub Pages

1. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the deployment source.
2. Push the `main` branch (or run the **Deploy portfolio to GitHub Pages** workflow manually).
3. Use the deployment URL emitted by the workflow. The build deliberately uses relative asset URLs, so it does not require a custom domain or repository name.

When a final public hostname is available, add exactly one line to `public/robots.txt`:

```text
Sitemap: https://YOUR-FINAL-HOSTNAME/sitemap.xml
```

Do not add that sitemap line until the hostname is confirmed.

## Replace before publishing

- In `src/data/portfolio.ts`, replace all six `portfolio.destinations` placeholders: résumé PDF, email, LinkedIn, GitHub, Fiverr, and Upwork.
- In `src/data/portfolio.ts`, replace `portfolio.profileImage` with the supplied professional headshot path and metadata.
- Supply the résumé PDF at the path used by the replacement destination.
- Confirm the final public hostname before adding the sitemap line in `public/robots.txt`.
- Confirm OSCP status before mentioning it publicly; use only `planned` or `in progress` unless completion is explicitly confirmed.
- Review every case-study detail for confidentiality before publishing, keeping organizational implementation details redacted where necessary.

## Content truth

Do not add a claim, metric, client, employer, certification, testimonial, or project detail without evidence Kunal has approved for public use. The page deliberately separates proven work from developing directions and keeps all public links as non-interactive placeholders until real destinations are supplied.
