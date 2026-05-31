# syntax=docker/dockerfile:1.7
# Build the crmcluster-website Next.js app as a standalone container.
# Build context: monorepo root.

ARG NODE_VERSION=24-bookworm-slim

FROM node:${NODE_VERSION} AS deps
ENV YARN_ENABLE_GLOBAL_CACHE=false
WORKDIR /app
RUN corepack enable
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY packages/crmcluster-website/package.json packages/crmcluster-website/package.json
RUN yarn workspaces focus crmcluster-website

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY packages/crmcluster-website ./packages/crmcluster-website
WORKDIR /app/packages/crmcluster-website
RUN npx next build

FROM node:${NODE_VERSION} AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
WORKDIR /app
RUN useradd --system --uid 1001 --gid 0 nextjs
COPY --from=builder --chown=nextjs:0 /app/packages/crmcluster-website/.next/standalone ./
COPY --from=builder --chown=nextjs:0 /app/packages/crmcluster-website/.next/static ./packages/crmcluster-website/.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "packages/crmcluster-website/server.js"]
