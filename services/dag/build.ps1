# Copy contract to the openapi directory for the app to find
Write-Host "Copying contract to openapi directory..." -ForegroundColor Green

# Generate OpenAPI code
Write-Host "Generating OpenAPI code..." -ForegroundColor Green
openapi-generator-cli generate `
    -i ./contracts/dag.api.yaml `
    -g python-flask `
    -t ./templates `
    -o ./src `
    --global-property attributes,apiDocs=false,apiTests=false,modelDocs=false,modelTests=false `
    --additional-properties=packageName=dag.web,generateSourceCodeOnly=true

Write-Host "Build completed!" -ForegroundColor Green
