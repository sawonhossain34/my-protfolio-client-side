// import { Link } from "react-router-dom";

const NavigationBer = () => {

    const listItem =
        <>
            {/* <li className="font-bold text-amber-600 text-xl"><Link>Home</Link></li>
            <li className="font-bold text-amber-600 text-xl"><Link>Project</Link></li>
            <li className="font-bold text-amber-600 text-xl"><Link>About Us</Link></li>
            <li className="font-bold text-amber-600 text-xl"><Link to='/contact'>Contact me</Link></li> */}
            <a href="/"  className="mr-2 font-bold text-amber-600 text-xl">Home</a>
            <a href="#project"  className="mr-2 font-bold text-amber-600 text-xl">Project</a>
            <a href="#About"  className="mr-2 font-bold text-amber-600 text-xl">About</a>
            <a href="#contact"  className="mr-2 font-bold text-amber-600 text-xl">Contact</a>
        </>
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {listItem}
                    </ul>
                </div>
                <a className="text-amber-600 normal-case text-4xl font-bold">Sawon Protfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listItem}
                </ul>
            </div>
        </div>
    );
};

export default NavigationBer;