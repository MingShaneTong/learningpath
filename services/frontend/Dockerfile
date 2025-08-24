# Base stage for dependencies
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY src/ui/package*.json ./src/ui/
COPY src/clients/gateway/package*.json ./src/clients/gateway/
RUN npm install

# Debug stage
FROM base AS debug
WORKDIR /app
COPY . .
RUN npm run build
ENV PORT=3000
ENV NODE_ENV=development
EXPOSE 3000
WORKDIR /app/src/ui
CMD ["npm", "run", "dev"]

# Release stage
FROM base AS release
WORKDIR /app
COPY . .
RUN npm run build
ENV PORT=3000
ENV NODE_ENV=production
EXPOSE 3000
WORKDIR /app/src/ui
CMD ["npm", "start"]
