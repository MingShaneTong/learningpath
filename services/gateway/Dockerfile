FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-base
WORKDIR /App
COPY . ./
RUN dotnet restore

# Debug build
FROM build-base AS build-debug
RUN dotnet build --configuration Debug
RUN dotnet publish --configuration Debug -o out

# Release build
FROM build-base AS build-release
RUN dotnet build --configuration Release
RUN dotnet publish --configuration Release -o out

# Debug image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS debug
WORKDIR /App
COPY --from=build-debug /App/out .
RUN apt-get update \
    && apt-get install -y --no-install-recommends unzip procps \
    && rm -rf /var/lib/apt/lists/*
ENV ASPNETCORE_ENVIRONMENT=Development
ENTRYPOINT ["dotnet", "LearningPath.Gateway.dll"]

# Release image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS release
WORKDIR /App
COPY --from=build-release /App/out .
ENV ASPNETCORE_ENVIRONMENT=Production
ENTRYPOINT ["dotnet", "LearningPath.Gateway.dll"]