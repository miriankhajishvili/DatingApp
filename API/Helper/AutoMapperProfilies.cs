
using System;
using API.DTOs;
using API.Enteties;
using API.Extensions;
using AutoMapper;

namespace API.Helper;

public class AutoMapperProfilies : Profile
{

    public AutoMapperProfilies()
    {
        CreateMap<AppUser, MemberDto>()
        .ForMember(d => d.Age, o => o.MapFrom(s => s.DateOfBirth.CalculateAge()))
        .ForMember(d=> d.PhotoUrl, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain)!.Url));
        CreateMap<Photo, PhotoDto>();
        CreateMap<MemberUpdateDto, AppUser>(); 

    }

}
