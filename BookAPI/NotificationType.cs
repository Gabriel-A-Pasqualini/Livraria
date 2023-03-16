using System.Runtime.Serialization;

namespace BookAPI
{ 
    public enum NotificationType
    {
        Success = 'S',
        Info = 'I',
        Alert = 'A',
        Error = 'E'
    }
}
