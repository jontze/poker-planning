FROM node:16 AS installer
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY .npmrc .
RUN npm ci

FROM node:16 AS builder
WORKDIR /app
ENV VITE_GRAPHQL_SECURE_WS_ENDPOINT=true
COPY --from=installer /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.27.0-alpine-slim
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf
CMD [ "nginx", "-g", "daemon off;" ]


