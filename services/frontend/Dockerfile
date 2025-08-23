FROM node:20-alpine

WORKDIR /app

COPY ./src ./

WORKDIR /app/clients/gateway
RUN npm install typescript
RUN npm run build


