using AutoMapper;
using BookAPI.Data.Dtos;
using BookAPI.Models;

namespace BookAPI.Profiles
{
    public class LivroProfile : Profile
    {
        public LivroProfile() {
            CreateMap<CreateLivroDto, Livro>();
            CreateMap<UpdateLivroDto, Livro>();
            CreateMap<Livro, UpdateLivroDto>();
            CreateMap<Livro, ReadLivroDto>();
        }   
    }
}
