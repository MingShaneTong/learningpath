openapi-generator-cli generate `
    -i ./src/LearningPath.Gateway/Contracts/gateway.api.yaml `
    -g aspnetcore `
    -t ./src/LearningPath.Gateway/Templates/aspnetcore `
    --global-property apis,models,attributes,apiDocs=false,apiTests=false,modelDocs=false,modelTests=false `
    --additional-properties=packageName=LearningPath.Gateway,generateSourceCodeOnly=true

openapi-generator-cli generate `
  -i ./src/LearningPath.Gateway/Contracts/dag.api.yaml `
  -g csharp `
  -o ./src/LearningPath.Gateway.Client.Dag `
  --additional-properties=packageName=LearningPath.Gateway.Client.Dag,apiNamespace=LearningPath.Gateway.Client.Dag.Api,modelNamespace=LearningPath.Gateway.Client.Dag.Model,generateSourceCodeOnly=true,targetFramework=net8.0
