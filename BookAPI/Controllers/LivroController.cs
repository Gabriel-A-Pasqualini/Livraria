
using AutoMapper;
using BookAPI.Data;
using BookAPI.Data.Dtos;
using BookAPI.Interfaces;
using BookAPI.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using trouwnutrition.mes.api.service;

namespace BookAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class LivroController : Controller
{

    private LivroContext _context;
    private IMapper _mapper;
    private readonly LoteService service;

    public LivroController(LivroContext context)
    {
        _context = context;
    }

    [HttpPost]
    public IActionResult AdicionaLivro([FromBody] CreateLivroDto livroDto)
    {
        Livro livro = _mapper.Map<Livro>(livroDto);
        _context.Livros.Add(livro);
        _context.SaveChanges();
        return CreatedAtAction(nameof(RecuperaLivrosId),
            new { id = livro.Id },
            livro
        );
    }


    [HttpGet]
    public IEnumerable<ReadLivroDto> RecuperaLivros([FromQuery] int skip = 0, [FromQuery] int take = 50)
    {
        return _mapper.Map<List<ReadLivroDto>>(_context.Livros.Skip(skip).Take(take));
    }


    [HttpGet("{id}")]
    public IActionResult RecuperaLivrosId(int id)
    {
        var livro = _context.Livros.FirstOrDefault(livros => livros.Id == id);
        if (livro == null) return NotFound();
        var livroDto = _mapper.Map<ReadLivroDto>(livro);
        return Ok(livroDto);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizaLivro(int id, [FromBody] UpdateLivroDto livroDto)
    {
        var livro = _context.Livros.FirstOrDefault(
            livro => livro.Id == id);
        if (livro == null) return NotFound();
        _mapper.Map(livroDto, livro);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpPatch("{id}")]
    public IActionResult AtualizaLivroParcial(int id, JsonPatchDocument<UpdateLivroDto> patch)
    {
        var livro = _context.Livros.FirstOrDefault(
            livro => livro.Id == id);
        if (livro == null) return NotFound();

        var livroParaAtualizar = _mapper.Map<UpdateLivroDto>(livro);

        patch.ApplyTo(livroParaAtualizar, ModelState);

        if (!TryValidateModel(livroParaAtualizar))
        {
            return ValidationProblem(ModelState);
        }

        _mapper.Map(livroParaAtualizar, livro);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeletaLivro(int id) 
    {
        var livro = _context.Livros.FirstOrDefault(
            livro => livro.Id == id
            );
        if (livro == null) return NotFound();
        _context.Remove(livro);
        _context.SaveChanges();
        return NoContent();

    }

    [HttpGet, Route("producao")]
    public IResponseBag<FrmLoteProducao> FrmLoteProducao(string lote = "")
    {
        var lista = service.ObterInfoProducaoLote(lote);
        return bag.Fill(lista);
    }
}
