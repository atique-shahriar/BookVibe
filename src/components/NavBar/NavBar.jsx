import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listedBooks'>Listed Books</NavLink></li>
        <li><NavLink to='/pageToRead'>Page To Read</NavLink></li>
        <li><NavLink to='/privacy'>Privacy</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100 my-4 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-4 shadow rounded-box w-40 bg-gray-200">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <a className="text-xl md:text-3xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 text-base font-normal">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="bg-green-600 px-5 py-2 rounded-lg font-medium text-white text-base">Sign In</a>
                    <a className="bg-sky-600 px-5 py-2 rounded-lg font-medium text-white text-base">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;