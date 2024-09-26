@description('Resource group name.')
param resourceGroupName string 

@description('Resource group location.')
param resourceGroupLocation string = 'eastus'

targetScope='subscription'



resource HopeLearnRGroup 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: resourceGroupName
  location: resourceGroupLocation
}
