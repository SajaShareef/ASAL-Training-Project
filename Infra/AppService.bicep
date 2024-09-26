@description('Location of resource.')
param location string

@description('The name of web app')
param webAppName string  

@description('Programming language stack | Version')
param linuxFxVersion string 

@description('The app service plan resource id.')
param appServicePlanResourceId string 


resource webApp 'Microsoft.Web/sites@2022-09-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlanResourceId 
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: linuxFxVersion
    }
  }
}

output webAppDefaultHostName string = webApp.properties.defaultHostName
