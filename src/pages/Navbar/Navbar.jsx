import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArtCraftItems">All Art & craft Items</NavLink></li>
        <li><NavLink to="/addCraftItems">Add Craft Item</NavLink></li>
        <li><NavLink to="/myArtCraftList">My Art&Craft List</NavLink></li>
    </>

    return (
        <div className="bg-base-300">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a href="/" className="text-xl font-semibold">Ceramics <br /> & Pottery</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                            <div className="tooltip w-12 h-12">
                                <img className="w-full h-full object-cover rounded-full cursor-pointer mb-2" src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"} alt="" />
                                <div className="tooltip-text w-[130px]">{user.displayName}</div>
                            </div>
                        ) : (
                        <div>
                            <Link to="/login">
                                <button className="btn px-8 bg-gray-600 text-white">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn px-8 bg-gray-600 text-white ml-2">Register</button>
                            </Link>
                        </div>
                    )}
                    {user && (
                        <button onClick={handleLogout} className="btn px-4 md:px-8 bg-gray-600 text-white ml-4">Logout</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;