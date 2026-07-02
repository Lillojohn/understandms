# Multi-stage build for Dokploy (or any Docker host).
# Stage 1: build the fully static site with Nuxt.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run generate

# Stage 2: serve .output/public with nginx. The final image contains no Node,
# no source, just the static files (~few MB).
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.output/public /usr/share/nginx/html
EXPOSE 80
