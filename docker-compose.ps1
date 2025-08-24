param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('debug','release')]
    [string]$Environment,
    
    [Parameter(Mandatory=$false)]
    [string]$Service
)

$composeFiles = "-f docker-compose.yml -f docker-compose.$Environment.yml"
$serviceArg = if ($Service) { $Service } else { "" }

Write-Host "Starting in $Environment mode..."
if ($Service) {
    Write-Host "Rebuilding and starting $Service..."
    Invoke-Expression "docker-compose $composeFiles up -d --build $serviceArg"
} else {
    Write-Host "Starting all services..."
    Invoke-Expression "docker-compose $composeFiles up -d"
}
