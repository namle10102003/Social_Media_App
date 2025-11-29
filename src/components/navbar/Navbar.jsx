import "./navbar.scss"
import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {

    const { toggle } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>UniCircle</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon onClick={toggle} />
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOffOutlinedIcon />
                <div className="user">
                    <img src="https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg" alt="" />
                    <span>Laurent Garcia</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar