openapi-generator-cli generate -i ./contracts/apiserver.api.yaml -g aspnetcore -o ./services/apiserver/ -t ./contracts/template/aspnetcore --global-property apis,models,attributes,apiDocs=false,apiTests=false,modelDocs=false,modelTests=false --additional-properties=packageName=LearningPath.Api,generateSourceCodeOnly=true


# openapi-generator-cli generate -i ./contracts/apiserver.api.yaml -g typescript-node -o ./services/webserver/clients/apiserver --additional-properties=generateSourceCodeOnly=true

# openapi-generator-cli generate -i ./contracts/dag.api.yaml -g csharp -o ./services/apiserver/dagclient --additional-properties=packageName=Learning.Api.Dag.Clients,generateSourceCodeOnly=true

pause