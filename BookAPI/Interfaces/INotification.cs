using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace BookAPI.Interfaces
{
    public interface INotification
    {
        NotificationType Type { get; set; }
        string Message { get; set; }
    }
}
