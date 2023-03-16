namespace BookAPI.Interfaces
{
    public interface IPaginatedList
    {
        int Page { get; }
        int TotalPages { get; }
        int Total { get; }
    }
}
