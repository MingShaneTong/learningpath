# DAG Service

This is the backend microservice for managing and serving learning DAGs (Directed Acyclic Graphs) in the LearningPath project. It exposes a REST API for creating, editing, and retrieving DAGs that represent a user's learning journey.

## Features
- Python backend using [Connexion](https://github.com/zalando/connexion) and Flask
- OpenAPI-driven API contract
- Handles all DAG logic and persistence
- Designed for containerized microservice deployment

## Requirements
- Python 3.8+
- pip

## Development Usage

1. Install dependencies:
	```sh
	pip install -r requirements.txt
	```
2. Run the service:
	```sh
	python -m dag.web
	```
3. The API will be available at [http://localhost:8082](http://localhost:8082) (or as configured).

## API Documentation
- Swagger UI: [http://localhost:8082/v1/ui/](http://localhost:8082/v1/ui/)
- OpenAPI JSON: [http://localhost:8082/v1/openapi.json](http://localhost:8082/v1/openapi.json)

## Running with Docker

To build and run the service in Docker:
```sh
docker-compose build dag-service
docker-compose up dag-service
```
The service will be available at the port mapped in `docker-compose.yml` (e.g., http://localhost:8082).

## Testing

To run integration tests:
```sh
pip install tox
tox
```

## Project Structure
- `src/dag/web/` - Main application code
- `contracts/` - OpenAPI contract YAML
- `requirements.txt` - Python dependencies

## License
MIT