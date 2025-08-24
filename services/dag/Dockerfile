# Base image
FROM python:3.11-alpine AS base
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY requirements.txt /usr/src/app/
RUN pip3 install --no-cache-dir -r requirements.txt

# Debug image
FROM base AS debug
COPY . /usr/src/app
ENV FLASK_ENV=development
ENV FLASK_DEBUG=1
ENV PYTHONPATH=/usr/src/app/src
EXPOSE 8080
CMD ["python3", "-m", "dag.web"]

# Release image
FROM base AS release
COPY . /usr/src/app
ENV FLASK_ENV=production
ENV FLASK_DEBUG=0
ENV PYTHONPATH=/usr/src/app/src
EXPOSE 8080
CMD ["gunicorn", "--workers", "4", "--bind", "0.0.0.0:8080", "dag.web.__main__:app"]