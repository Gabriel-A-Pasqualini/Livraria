using BookAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BookAPI.Data
{
    public class LivroContext : DbContext
    {
        public LivroContext(DbContextOptions<LivroContext> opts) 
        : base(opts)
        { 

        }

        public DbSet<Livro> Livros {get;set;}
    }
}
