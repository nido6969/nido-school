FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG WORDPRESS_URL=https://www.nidomontessori.in/blog
ARG WORDPRESS_CONTENT_TYPE=posts
ENV WORDPRESS_URL=$WORDPRESS_URL
ENV WORDPRESS_CONTENT_TYPE=$WORDPRESS_CONTENT_TYPE
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
