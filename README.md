# LearningPath

## Purpose

LearningPath is a web application designed to help users visualize and track their learning journey for any topic using DAG (Directed Acyclic Graph) graphs. Users can see which skills they have, what they need to learn next, and how different skills connect. The long-term vision is to integrate AI features that can automatically generate personalized learning DAGs based on the ultralearning process.

## Project Structure

This project is built as a modern microservices-based web application. The main components are:

- **API Gateway**: The single entry point for all client requests. Handles user authentication, request routing, and acts as a reverse proxy to backend services.
- **Web Frontend**: The user interface, allowing users to interact with their learning journey, view and edit DAGs, and manage their profile.
- **DAG Service**: Handles all logic related to DAG creation, editing, and storage.

### Directory Layout

- `services/gateway/` - API Gateway (.NET, C#)
- `services/webserver/` - Web frontend (Node.js, React/Vite)
- `services/dag/` - DAG logic service (Python, Connexion/Flask)
- `contracts/` - Centralized OpenAPI YAML contracts shared across services
- `build.ps1` - PowerShell script to build/generate all services
- `docker-compose.yml` - Orchestrates all services in Docker containers


## Project Status

**Completed:**
- Created three core microservices (gateway, webserver, dag)
- Centralized API contracts using OpenAPI Generator to generate controllers and models for each service
- Containerized all services using Docker for easy deployment and development

**In Progress / To Do:**
- Ensure Docker containers communicate correctly in all environments
- Create and edit the first DAG from the frontend
- Add an OIDC authentication service (e.g., Keycloak)
- Implement user permissioned DAGs (private/public sharing)
- Integrate AI to generate DAGs using the ultralearning questions and planning framework

## Build & Run Instructions

1. **Build all services and generate code:**
	```
	./build.ps1
	```
2. **Build and start all Docker containers:**
	```
	docker-compose build
	docker-compose up
	```
3. Access the web frontend at the port specified in `docker-compose.yml` (e.g., http://localhost:8080 or http://localhost:8081)

## Technologies Used

- .NET (C#) for API Gateway
- Node.js, React, Vite for frontend
- Python (Connexion/Flask) for DAG service
- OpenAPI/Swagger for API contracts
- Docker & Docker Compose for containerization

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License

MIT License