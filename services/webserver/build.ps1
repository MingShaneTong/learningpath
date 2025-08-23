openapi-generator-cli generate  `
    -i ./contracts/gateway.api.yaml `
    -g typescript-fetch `
    -o ./clients/gateway `
    --additional-properties=projectName=@learningpath/client-gateway
