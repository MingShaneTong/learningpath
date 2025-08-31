# Base stage for dependencies
FROM node:20 AS base
WORKDIR /app

COPY package*.json ./
COPY src/ui/package*.json ./src/ui/
COPY src/clients/gateway/package*.json ./src/clients/gateway/

RUN npm install

COPY . .

# Build stage
FROM base as build
WORKDIR /app

# Build gateway client first
RUN cd src/clients/gateway && npm run build

# Debug stage
FROM build AS debug
WORKDIR /app
ENV NODE_ENV=development
ENV PORT=3000
EXPOSE 3000
WORKDIR /app/src/ui
CMD ["npm", "run", "dev"]

# Release stage
FROM build AS release
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Build the UI project
WORKDIR /app/src/ui
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
