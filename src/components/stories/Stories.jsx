import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext.jsx"

const Stories = () => {

    const { currentUser } = useContext(AuthContext)

    const resolveProfilePic = (pic) => {
        const fallback = "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg";
        if (!pic) return fallback;
        if (pic.startsWith("http") || pic.startsWith("/")) return pic;
        return "/upload/" + pic;
    };


    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Anthony Taylor",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "Anthony Taylor",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 3,
            name: "Anthony Taylor",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 4,
            name: "Anthony Taylor",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={resolveProfilePic(currentUser?.profilePic)} alt={currentUser?.name || "user"} />
                <span>{currentUser?.name || "Laurent Garcia"}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories