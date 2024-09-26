@description('Location for all resources.')
param location string = resourceGroup().location

@description('Provisioning parameters.')
param provisionParameters object


var resourceName = 'rg-${provisionParameters.appShortName}-${provisionParameters.appShortName}-${provisionParameters.environmentShortName}-${provisionParameters.locationShortName}-${provisionParameters.instance}'
var appServicePlanName = 'asp-${provisionParameters.appShortName}-${provisionParameters.environmentShortName}-${provisionParameters.locationShortName}-${provisionParameters.instance}'
var backendWebAppName = 'app-${provisionParameters.backHopeLearnBridge.appShortName}-${provisionParameters.environmentShortName}-${provisionParameters.locationShortName}-${provisionParameters.instance}'
var frontendWebAppName = 'app-${provisionParameters.frontHopeLearnBridge.appShortName}-${provisionParameters.environmentShortName}-${provisionParameters.locationShortName}-${provisionParameters.instance}'
var cosmosDbAccountName = 'cosno-${provisionParameters.appShortName}-${provisionParameters.environmentShortName}-${provisionParameters.locationShortName}-${provisionParameters.instance}'
var cosmosDbDatabaseName = 'cosmos-${provisionParameters.appShortName}-${provisionParameters.environmentShortName}-${provisionParameters.locationShortName}-${provisionParameters.instance}'



module sourceModule 'ResourceGroup.bicep' = {
 name: 'recourceGroupDeployment'
 scope: subscription()
 params:{
  resourceGroupName: resourceName
  resourceGroupLocation: location

 }

}
module appServicePlanModule 'AppServicePlan.bicep' = {
  name: 'appServicePlanDeployment'
  params: {
    location: location
    sku: 'F1'
    kind: 'linux'
    appServicePlanName: appServicePlanName
  }
}


module backendAppServiceModule 'AppService.bicep' = {
  name: 'backendAppServiceDeployment'
  params: {
    appServicePlanResourceId : appServicePlanModule.outputs.appServicePlanResourceId 
    webAppName: backendWebAppName
    linuxFxVersion: 'DOTNET|8.0.303' 
    location: location
    
  }
}


module frontendAppServiceModule 'AppService.bicep' = {
  name: 'frontendAppServiceDeployment'
  params: {
    appServicePlanResourceId : appServicePlanModule.outputs.appServicePlanResourceId 
    webAppName: frontendWebAppName
    linuxFxVersion: 'NODE|20.16.0'  
    location: location
    
  }
}


module cosmosDbModule 'Cosmosdb.bicep' = {
  name: 'cosmosDbDeployment'
  params:{
  accountName: cosmosDbAccountName
    location: location
    databaseName: cosmosDbDatabaseName
  }
}
