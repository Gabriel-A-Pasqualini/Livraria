using System.ComponentModel.DataAnnotations;

namespace BookAPI.Data.Dtos
{
    public class CreateLivroDto
    {
        public string Titulo { get; set; }
        [Required(ErrorMessage = "O genero é obrigatório")]
        public string Genero { get; set; }
        [Required(ErrorMessage = "O autor é obrigatório")]
        public string Autor { get; set; }
        [Required(ErrorMessage = "A editora é obrigatório")]
        public string Editora { get; set; }
        [Required(ErrorMessage = "A quantidade de paginas é obrigatório")]
        public string Qtd_Paginas { get; set; }
        [Required(ErrorMessage = "O pais de origem é obrigatório")]
        public string Pais_Orig { get; set; }
        [Required(ErrorMessage = "O ano de lançamento é obrigatório")]
        public string Ano_Lanc { get; set; }
        [Required(ErrorMessage = "A sinopse é obrigatório")]
        public string Sinopse { get; set; }
    }
}
