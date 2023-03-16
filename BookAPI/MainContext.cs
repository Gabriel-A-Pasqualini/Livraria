using BookAPI.Models;
using LinqToDB;
using LinqToDB.Data;

namespace BookAPI
{
    public class MainContext : DataConnection
    {
        public MainContext() : base("Main") 
        {
            LinqToDB.Common.Configuration.Linq.AllowMultipleQuery = true;
        }

        public new void Dispose()
        {
            this.Connection.Close();
            base.Dispose();
        }

        public ITable<Livro> Empresas { get => GetTable<Livro>(); }

    }
}
