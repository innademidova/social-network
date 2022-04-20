using Microsoft.AspNetCore.Mvc;

namespace SocialNetwork.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    [HttpGet("profile/{userId}")]
    public ActionResult<User> GetUser(int userId)
    {
        var user = Store.Users.FirstOrDefault(x => x.Id == userId);
        if (user == null)
        {
            return NotFound();
        }

        return Ok(user);
    }
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

    [HttpPost("{userId}/follow")]
    public void Follow(int userId)
    {
        var user = Store.Users.First(x => x.Id == userId);
        user.Followed = true;
    }

    [HttpDelete("{userId}/follow")]
    public void Unfollow(int userId)
    {
        var user = Store.Users.First(x => x.Id == userId);
        user.Followed = false;
    }
}
