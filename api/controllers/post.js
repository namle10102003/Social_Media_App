export const getPosts = (req, res) => {
    const posts = [
        {
            id: 1,
            userId: 1,
            name: "Laurent Garcia",
            profilePic: "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg",
            desc: "This is a sample post from API",
            img: "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg",
        },
    ];

    res.status(200).json(posts);
}

