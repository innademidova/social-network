
public class UsersResponse
{
    public User[] Users { get; set; }

    public int TotalCount { get; set; }
}

public class User
{
    public string Name { get; set; }

    public long Id { get; set; }

    public Photos Photos { get; set; }
    public Location Location { get; set; }

    public string Status { get; set; }

    public bool Followed { get; set; }
}

public class Photos
{
    public string Small { get; set; }

    public string Large { get; set; }
}

public class Location
{
    public string City { get; set; }
    public string Country { get; set; }
}

