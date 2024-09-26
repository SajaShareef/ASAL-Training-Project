@description('Location for resource.')
param location string

@description('Cosmos DB account name.')
param accountName string 

@description('Cosmos DB Database Name.')
param databaseName string 


resource cosmosDBAccount 'Microsoft.DocumentDB/databaseAccounts@2024-05-15' = {
  name: accountName
  location: location
  properties: {
    locations: [
      {
         locationName: location
      }
    ]
    databaseAccountOfferType:  'Standard'
  }
}


resource database 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2024-05-15' = {
  parent: cosmosDBAccount
  name: databaseName
  properties: {
    resource: {
       id: databaseName
    }
  }
}
