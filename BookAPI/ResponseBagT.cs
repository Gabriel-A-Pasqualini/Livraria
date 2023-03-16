using BookAPI.Interfaces;

namespace BookAPI
{
    public class ResponseBag<T> : IResponseBag<T>
    {
        public ResponseBag()
        {
            Messages = new List<INotification>();
            Extras = new Dictionary<string, string>();
        }

        internal ResponseBag(T content, IList<INotification> notifications, Dictionary<string, string> extraHeaders)
        {
            Response = content;
            Messages = notifications;
            Extras = extraHeaders;
        }

        public int? Total { get; private set; }
        public int? Page { get; private set; }
        public int? TotalPages { get; private set; }

        T _content;
        public T Response
        {
            get => _content;
            set
            {
                _content = value;
                if ((value?.GetType() ?? typeof(T)).GetInterfaces().Contains(typeof(IPaginatedList)))
                {
                    var list = (value as IPaginatedList);
                    Total = list.Total;
                    Page = list.Page;
                    TotalPages = list.TotalPages;
                }
            }
        }

        public IResponseBag<T> Fill(T content)
        {
            Response = content;
            return this;
        }

        public IList<INotification> Messages { get; set; }
        public bool Success { get => !Error; }
        public bool Error { get => Messages.Any(n => n.Type == NotificationType.Error); }
        public Dictionary<string, string> Extras { get; set; }

        public void PutIn(INotification notification)
        {
            Messages.Add(notification);
        }
    }
}
