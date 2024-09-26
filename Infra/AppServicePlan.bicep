@description('The name of the App Service Plan.')
param appServicePlanName string 

@description('Location of resource.')
param location string 

@description('The SKU of App Service Plan ')
param sku string 

@description('The operating system of plan.')
param kind string 


resource appServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: appServicePlanName
  location: location
  properties:{
    reserved: true
  }
  sku: {
    name: sku
  }
  kind: kind
}
 
output appServicePlanResourceId string = appServicePlan.id
