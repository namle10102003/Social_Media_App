import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser, logout } = useContext(AuthContext);
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    // close logout menu when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setShowLogout(false);
            }
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    const resolveProfilePic = (pic) => {
        const fallback = "https://images.pexels.com/photos/27690887/pexels-photo-27690887.jpeg";
        if (!pic) return fallback;
        if (pic.startsWith("http") || pic.startsWith("/")) return pic;
        return "/upload/" + pic;
    };

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>lamasocial</span>
                </Link>
                <HomeOutlinedIcon />
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} />
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle} />
                )}
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user" ref={menuRef}>
                    <div
                        role="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowLogout((s) => !s);
                        }}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                    >
                        <img src={resolveProfilePic(currentUser?.profilePic)} alt="" />
                        <span>{currentUser?.name}</span>
                    </div>
                    {showLogout && (
                        <div style={{ position: 'absolute', right: 10, top: '100%', background: 'white', padding: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', borderRadius: 4 }}>
                            <button
                                onClick={async () => {
                                    await logout();
                                    navigate('/login');
                                }}
                                style={{ background: '#f0544f', color: 'white', border: 'none', padding: '6px 12px', cursor: 'pointer' }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;