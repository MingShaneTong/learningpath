param(
    [Parameter(Mandatory=$true)]
    [ValidateSet('debug','release','build')]
    [string]$Environment,
    
    [Parameter(Mandatory=$false)]
    [string]$Service
)

$composeFiles = "-f docker-compose.yml -f docker-compose.$Environment.yml"
$serviceArg = if ($Service) { $Service } else { "" }

if ($Environment -eq 'build') {
    Write-Host "Building images..."
    if ($Service) {
        Invoke-Expression "docker-compose -f docker-compose.yml -f docker-compose.debug.yml build $Service"
    } else {
        Invoke-Expression "docker-compose -f docker-compose.yml -f docker-compose.debug.yml build"
    }
    exit
}

Write-Host "Starting in $Environment mode..."
if ($Service) {
    Write-Host "Rebuilding and starting $Service..."
    Invoke-Expression "docker-compose $composeFiles up -d --build $serviceArg"
} else {
    Write-Host "Starting all services..."
    Invoke-Expression "docker-compose $composeFiles up -d"
}
