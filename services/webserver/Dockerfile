FROM node:20-alpine

WORKDIR /app

COPY ./ ./

WORKDIR /app/clients/gateway
RUN npm install typescript
RUN npx tsc --outDir ./dist

WORKDIR /app/web
RUN npm install
RUN npm run build
RUN npx tsc server.ts --outDir dist

EXPOSE 8081

CMD ["node", "dist/server.js"]