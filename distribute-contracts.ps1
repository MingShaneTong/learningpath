function Copy-ItemEnsuringDirectory {
	[CmdletBinding()]
	param(
		[Parameter(Mandatory = $true)]
		[string] $Source,
		[Parameter(Mandatory = $true)]
		[string] $Destination
	)
	$destinationFolder = Split-Path -Path $Destination -Parent
	if (-not (Test-Path -Path $destinationFolder)) {
		New-Item -ItemType Directory -Path $destinationFolder -Force | Out-Null
	}
	Copy-Item -Path $Source -Destination $Destination -Force
}

"Distributing Contracts to Gateway Service"
Copy-ItemEnsuringDirectory -Source "./contracts/gateway.api.yaml" -Destination "./services/gateway/src/LearningPath.Gateway/Contracts/gateway.api.yaml"
Copy-ItemEnsuringDirectory -Source "./contracts/dag.api.yaml" -Destination "./services/gateway/src/LearningPath.Gateway/Contracts/dag.api.yaml"

"Distributing Contracts to Web Service"
Copy-ItemEnsuringDirectory -Source "./contracts/gateway.api.yaml" -Destination "./services/webserver/web/contracts/gateway.api.yaml"

"Distributing Contracts to DAG Service"
Copy-ItemEnsuringDirectory -Source "./contracts/dag.api.yaml" -Destination "./services/dag/contracts/dag.api.yaml"

pause