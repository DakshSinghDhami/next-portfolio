FROM node:22-alpine
WORKDIR /app
COPY .next ./.next
COPY public ./public
COPY package.json ./
COPY node_modules ./node_modules
COPY next.config.ts ./
EXPOSE 3000
CMD ["node_modules/.bin/next", "start", "-p", "3000"]
