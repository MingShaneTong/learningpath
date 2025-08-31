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
- `services/frontend/` - Next.js frontend application
  - `src/ui/` - Main Next.js application
  - `src/clients/gateway/` - Generated TypeScript client for gateway API
- `services/dag/` - DAG logic service (Python, Connexion/Flask)
- `services/proxy/` - Nginx reverse proxy for routing requests
- `contracts/` - Centralized OpenAPI YAML contracts shared across services
  - `dag.api.yaml` - DAG service API contract
  - `gateway.api.yaml` - Gateway API contract
- `build.ps1` - PowerShell script to build all services
- `distribute-contracts.ps1` - Script to distribute and generate code from API contracts
- `docker-compose.yml` - Base Docker configuration
- `docker-compose.debug.yml` - Debug environment configuration
- `docker-compose.release.yml` - Production environment configuration
- `docker-compose.ps1` - Script to manage Docker environments


## Project Status

**Completed:**

- Created three core microservices (gateway, frontend, dag)
- Set up Nginx reverse proxy for routing requests
- Centralized API contracts using OpenAPI Generator to generate controllers and models for each service
- Containerized all services using Docker for easy deployment and development
- Implemented multi-stage Docker builds for debug and release environments
- Create and edit the first DAG from the frontend

**In Progress / To Do:**

- Add an OIDC authentication service (e.g., Keycloak)
- Implement user permissioned DAGs (private/public sharing)
- Integrate AI to generate DAGs using the ultralearning questions and planning framework

## Build & Run Instructions

1. **Build all services and generate code:**

```powershell
./build.ps1
```

1. **Build and start all Docker containers:**

```bash
# For development
./docker-compose.ps1 debug

# For production
./docker-compose.ps1 release
```

1. Access the web frontend at `http://localhost:3000` (development) or `http://localhost:80` (production)

## Technologies Used

- .NET (C#) for API Gateway
- Next.js for frontend
- Python (Connexion/Flask) for DAG service
- OpenAPI/Swagger for API contracts
- Docker & Docker Compose for containerization
- Nginx for reverse proxy

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License

MIT License
