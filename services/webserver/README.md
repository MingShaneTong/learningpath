
# Webserver Service

This is the frontend web application for the LearningPath project. It provides the user interface for interacting with learning DAGs, tracking skills, and managing user journeys.

## Features
- Modern frontend built with React and Vite
- Connects to the API Gateway and DAG microservice
- Visualizes and edits learning DAGs
- User authentication (planned)

## Development

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Install dependencies
```sh
cd web
npm install
```

### Run in development mode
```sh
npm run dev
```
The app will be available at the port shown in the terminal (usually http://localhost:5173).

### Build for production
```sh
npm run build
```

### Preview production build locally
```sh
npm run preview -- --host 0.0.0.0 --port 8081
```
This will serve the built app on http://localhost:8081 (or as mapped in Docker).

## Running in Docker
This service is containerized and can be run as part of the full stack using Docker Compose:
```sh
docker-compose up webserver-service
```
or to build and run:
```sh
docker-compose build webserver-service
docker-compose up webserver-service
```
The app will be available at the port mapped in `docker-compose.yml` (e.g., http://localhost:8080 or http://localhost:8081).

## Environment Variables
- See `.env` or `vite.config.ts` for configuration options.

## Project Structure
- `src/` - Main application source code
- `public/` - Static assets
- `contracts/` - OpenAPI contracts for client generation

## License
MIT

