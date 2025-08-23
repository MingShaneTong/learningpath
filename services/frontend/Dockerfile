FROM node:20-alpine

WORKDIR /app

COPY ./ ./

WORKDIR /app/clients/gateway
RUN npm install typescript
RUN npm run build


