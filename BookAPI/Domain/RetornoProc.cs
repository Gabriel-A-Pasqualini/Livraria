using BookAPI.Enum;
using LinqToDB.Mapping;


namespace BookAPI.Domain
{
    public class RetornoProc
    {
        [Column("ies_ok")]
        public Bool IesOk { get; set; } // CHAR(1)      

        [Column("mensagem")]
        public string Mensagem { get; set; } // CHAR(100) 
    }
}
