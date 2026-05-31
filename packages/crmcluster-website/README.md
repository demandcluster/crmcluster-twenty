# crmcluster-website

Landing page for [crmcluster.com](https://crmcluster.com).

CRM Cluster builds custom AI-native CRM solutions on top of Twenty, hosted
in a private European cloud. Part of [Demand Cluster](https://www.demandcluster.com),
based in the Netherlands.

The live app is on `app.crmcluster.com`.

## Stack

- Next.js 16 (App Router) + React 19
- CSS Modules (no runtime CSS-in-JS)
- Inter via `next/font`
- Brand palette taken from demandcluster.com: navy `#274093`, sky `#45c1f1`

## Commands

```bash
npx nx dev crmcluster-website    # http://localhost:3003
npx nx build crmcluster-website
npx nx start crmcluster-website
npx nx typecheck crmcluster-website
```

Or from this directory: `yarn dev` / `yarn build` / `yarn start`.

## Structure

```
src/
  app/
    layout.tsx       # root layout, fonts, metadata
    page.tsx         # landing page composition
    globals.css      # theme tokens, btn/container primitives
  components/
    Nav, Hero, Usps, WhyEu, PoweredByTwenty, Cta, Footer
```

Single-page v1. Replace contact phone/email and any pending copy as needed.
