namespace SocialNetwork.API;

public static class UsersInitializer
{
    public static List<User> Initialize()
    {
        return new List<User>
        {
            new User
            {
                Name = "Vladimir Zelenskiy",
                Id = 1,
                Photos = new Photos
                {
                    Large =
                        "https://24tv.ua/resources/photos/news/640_DIR/202203/1908099_15604589.jpg?202203155422"

                },
                Status = "I am a boss of Ukraine",
                Followed = false,
                Location = new Location
                {
                    City = "Kiev",
                    Country = "Ukraine"
                },
                FullName = "Inna"

            },
            new User
            {
                Name = "Joe Biden",
                Id = 2,
                Photos = new Photos
                {
                    Large =
                        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Portrait_of_United_States_President_Joe_Biden.jpg"

                },
                Status = "I am a boss of USA",
                Followed = false,
                Location = new Location
                {
                    City = "Washington",
                    Country = "USA"
                }

            },

            new User
            {
                Name = "Vtali Kim",
                Id = 3,
                Photos = new Photos
                {
                    Large =
                        "https://pbs.twimg.com/media/FOBOr4RXsAQsejw?format=jpg&name=large"

                },
                Status = "Доброго вечора, ми з України!",
                Followed = false,
                Location = new Location
                {
                    City = "Mykolaiv",
                    Country = "Ukraine"
                }

            },
            new User
            {
                Name = "Alexey Arestovich",
                Id = 4,
                Photos = new Photos
                {
                    Large =
                        "https://24tv.ua/resources/photos/news/723x889_DIR/202203/1908099_15604591.jpg?202203155422"

                },
                Status = "Keep calm and love Ukraine!",
                Followed = false,
                Location = new Location
                {
                    City = "Kiev",
                    Country = "Ukraine"
                }

            },
            new User
            {
                Name = "Boris Johnson",
                Id = 5,
                Photos = new Photos
                {
                    Large =
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Boris_Johnson_official_portrait.jpg/819px-Boris_Johnson_official_portrait.jpg"

                },
                Status = "I am a boss of UK",
                Followed = false,
                Location = new Location
                {
                    City = "London",
                    Country = "UK"
                }

            },
            new User
            {
                Name = "Vitali Klychko",
                Id = 6,
                Photos = new Photos
                {
                    Large =
                        "https://i.pinimg.com/736x/ee/a7/50/eea7508df12b4a4b4fe0ac53ad0e01c3.jpg"

                },
                Status = "З 2222, друзі!",
                Followed = false,
                Location = new Location
                {
                    City = "Kiev",
                    Country = "Ukraine"
                }

            },
            new User
            {
                Name = "Taras Shevchenko",
                Id = 7,
                Photos = new Photos
                {
                    Large =
                        "https://galychyna.if.ua/wp-content/uploads/2022/03/taras-shevchenko.jpg"

                },
                Status = "Борітеся - поборете!",
                Followed = false,
                Location = new Location
                {
                    City = "Kiev",
                    Country = "Ukraine"
                }

            },
            new User
            {
                Name = "Gennadiy Kernes",
                Id = 8,
                Photos = new Photos
                {
                    Large =
                        "https://zn.ua/img/forall/u/14/4/118344451_2699080823528460_5845458035995404090_o.jpg"

                },
                Status = "Да я вас на ноль умножу",
                Followed = false,
                Location = new Location
                {
                    City = "Kharkiv",
                    Country = "Ukraine"
                }

            },
            new User
            {
                Name = "Ihor Terekhov",
                Id = 9,
                Photos = new Photos
                {
                    Large =
                        "https://yt3.ggpht.com/ytc/AKedOLSI8NrWrzX7V9_FL0fQPd9H17f0-xp0snzutr7U=s900-c-k-c0x00ffffff-no-rj"

                },
                Status = "I am a boss of Kharkiv",
                Followed = false,
                Location = new Location
                {
                    City = "Kharkiv",
                    Country = "Ukraine"
                }

            },
            new User
            {
                Name = "Lukash",
                Id = 10,
                Photos = new Photos
                {
                    Large =
                        "https://newsmaker.md/wp-content/uploads/2022/03/unnamed-file.jpg"

                },
                Status = "А я сейчас вам покажу",
                Followed = false,
                Location = new Location
                {
                    City = "Minsk",
                    Country = "Kartoplandia"
                }

            }
        };

    }
}