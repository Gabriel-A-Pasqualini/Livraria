using System.Collections.Generic;

namespace BookAPI.Interfaces
{
    public interface IResponseBag<T>
    {
        IResponseBag<T> Fill(T content);
        void PutIn(INotification notification);
        IList<INotification> Messages { get; set; }
        Dictionary<string, string> Extras { get; set; }
        bool Success { get; }
        bool Error { get; }
        T Response { get; }
    }
}


