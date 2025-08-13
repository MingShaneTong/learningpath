# Generate OpenAPI code
Write-Host "Generating OpenAPI code..." -ForegroundColor Green
openapi-generator-cli generate -i ./contracts/dag.api.yaml -g python-flask -t ./templates -o ./src --global-property apis,models,attributes,apiDocs=false,apiTests=false,modelDocs=false,modelTests=false --additional-properties=packageName=dag.web,generateSourceCodeOnly=true

# Copy contract to the openapi directory for the app to find
Write-Host "Copying contract to openapi directory..." -ForegroundColor Green
$openapiDir = "./src/dag/web/openapi"
if (-not (Test-Path -Path $openapiDir)) {
    New-Item -ItemType Directory -Path $openapiDir -Force | Out-Null
}
Copy-Item -Path "./contracts/dag.api.yaml" -Destination "$openapiDir/openapi.yaml" -Force
Write-Host "Contract copied to $openapiDir/openapi.yaml" -ForegroundColor Green

# Install Python dependencies and package
Write-Host "Installing dependencies and package..." -ForegroundColor Green
try {
    python -m pip install -r requirements.txt -e .
    Write-Host "Dependencies and package installed successfully" -ForegroundColor Green
} catch {
    Write-Host "Error installing dependencies/package: $_" -ForegroundColor Red
}

Write-Host "Build completed!" -ForegroundColor Green
pause