./distribute-contracts.ps1

Push-Location ./services/dag
Get-Location
./build.ps1
Pop-Location

Push-Location ./services/gateway
Get-Location
./build.ps1
Pop-Location

Push-Location ./services/frontend
Get-Location
./build.ps1
Pop-Location