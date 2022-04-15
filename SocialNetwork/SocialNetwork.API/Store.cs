namespace SocialNetwork.API;

public static class Store
{
    public static List<User> Users { get; set; }

    static Store()
    {
        Users = UsersInitializer.Initialize();
    }
}