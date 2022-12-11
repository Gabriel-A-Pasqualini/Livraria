using System.ComponentModel.DataAnnotations;

namespace BookAPI.Data.Dtos
{
    public class ReadLivroDto
    {

        public string Titulo { get; set; }
        public string Genero { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public string Qtd_Paginas { get; set; }
        public string Pais_Orig { get; set; }
        public string Ano_Lanc { get; set; }
        public string Sinopse { get; set; }
        public DateTime HoraDaConsulta { get; set; } = DateTime.Now;

    }
}
