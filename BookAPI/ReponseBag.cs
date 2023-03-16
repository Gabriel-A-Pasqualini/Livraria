using BookAPI.Interfaces;

namespace BookAPI
{
    public class ResponseBag : ResponseBag<object>
    {
        public ResponseBag() : base() { }

        public IResponseBag<T> Fill<T>(T content)
        {
            return new ResponseBag<T>(content, Messages, Extras);

        }
