using LinqToDB.Mapping;
using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace BookAPI.Models;

[Table("livros")]
public class Livro
{
    [Key]
    [Required]
    [Column("Id")]
    public int Id { get; set; }

    [Column("Titulo")]
    [Required(ErrorMessage = "O titulo é obrigatório")]
    public string Titulo { get; set; }

    [Column("Genero")]
    [Required(ErrorMessage = "O genero é obrigatório")]
    public string Genero { get; set; }

    [Column("Autor")]
    [Required(ErrorMessage = "O autor é obrigatório")]
    public string Autor { get; set;}

    [Column("Editora")]
    [Required(ErrorMessage = "A editora é obrigatório")]
    public string Editora { get; set;}

    [Column("Qtd_Paginas")]
    [Required(ErrorMessage = "A quantidade de paginas é obrigatório")]
    public string Qtd_Paginas { get; set;}

    [Column("Pais_Orig")]
    [Required(ErrorMessage = "O pais de origem é obrigatório")]
    public string Pais_Orig { get; set; }

    [Column("Ano_Lanc")]
    [Required(ErrorMessage = "O ano de lançamento é obrigatório")]
    public string Ano_Lanc { get; set; }

    [Column("Sinopse")]
    [Required(ErrorMessage = "A sinopse é obrigatório")]
    public string Sinopse { get; set;}
}
