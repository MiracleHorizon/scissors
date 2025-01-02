FROM node:20-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune backend --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN npm install -g pnpm

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

ENV BUILD_STANDALONE=true

RUN pnpm turbo build --filter=backend...

FROM base AS runner
WORKDIR /app
RUN npm install -g pnpm

COPY --from=installer /app .

CMD ["pnpm", "be:prod"]
