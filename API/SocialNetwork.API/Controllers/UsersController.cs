using Microsoft.AspNetCore.Mvc;

namespace SocialNetwork.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet]
    public UsersResponse Get(int pageNumber = 1, int pageSize = 2)
    {
        return new UsersResponse
        {
            Users = Store.Users
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToArray(),
            TotalCount = Store.Users.Count
        };
    }
}
