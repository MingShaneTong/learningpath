Copy-Item -Path "./contracts/gateway.api.yaml" -Destination "./services/gateway/src/LearningPath.Gateway/Contracts/gateway.api.yaml"
Copy-Item -Path "./contracts/dag.api.yaml" -Destination "./services/gateway/src/LearningPath.Gateway/Contracts/dag.api.yaml"


# openapi-generator-cli generate -i ./contracts/gateway.api.yaml -g aspnetcore -o ./services/gateway/ -t ./contracts/template/aspnetcore --global-property apis,models,attributes,apiDocs=false,apiTests=false,modelDocs=false,modelTests=false --additional-properties=packageName=LearningPath.Gateway,generateSourceCodeOnly=true


# openapi-generator-cli generate -i ./contracts/apiserver.api.yaml -g typescript-node -o ./services/webserver/clients/apiserver --additional-properties=generateSourceCodeOnly=true

# openapi-generator-cli generate -i ./contracts/dag.api.yaml -g csharp -o ./services/apiserver/dagclient --additional-properties=packageName=Learning.Api.Dag.Clients,generateSourceCodeOnly=true

pause