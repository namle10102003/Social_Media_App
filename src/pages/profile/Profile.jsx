import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img
                    src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="cover"
                />
                <img
                    src="https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg"
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://www.facebook.com/namle10102003/">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/namle10102003/">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/namle10102003/">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/namle10102003/">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/namle10102003/">
                            <PinterestIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Laurent Garcia</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>Vietnam</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>Vietnamese</span>
                            </div>
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;