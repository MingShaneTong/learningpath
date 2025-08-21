# Gateway Service

This is the API Gateway for the LearningPath project. It acts as the single entry point for all client requests, handling authentication, routing, and aggregation of responses from backend microservices.

## Features
- Built with .NET (C#)
- Handles user authentication and authorization (OIDC planned)
- Routes requests to the appropriate backend service (DAG, webserver, etc.)
- Centralizes API documentation and contract enforcement

## Development

### Prerequisites
- .NET 8.0 SDK or later

### Build the project
```sh
dotnet build
```

### Run locally
```sh
dotnet run --project src/LearningPath.Gateway/LearningPath.Gateway.csproj
```
The API Gateway will be available at the port specified in `launchSettings.json` or as configured (commonly http://localhost:8080).

## Running in Docker
This service is containerized and can be run as part of the full stack using Docker Compose:
```sh
docker-compose up gateway-service
```
or to build and run:
```sh
docker-compose build gateway-service
docker-compose up gateway-service
```
The API Gateway will be available at the port mapped in `docker-compose.yml` (e.g., http://localhost:8080 or http://localhost:8081).

## Environment Variables
- See `appsettings.json` and `appsettings.Development.json` for configuration options.

## Project Structure
- `src/LearningPath.Gateway/` - Main API Gateway source code
- `Contracts/` - OpenAPI contracts for client and server generation

## License
MIT
