using System.Linq.Expressions;

namespace HopeLearnBridge.DataStorage
{
    public interface IDataStorage
    {
        Task<List<T>> GetItemsAsync<T>(string containerName, Expression<Func<T, bool>> predicate);
        Task<T> UpsertItemAsync<T>(T item, string containerName, string partitionKey);
        Task<T> ReadItemAsync<T>(string containerName, string id, string partitionKey);
    }
}