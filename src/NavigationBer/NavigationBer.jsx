
const NavigationBer = () => {

    const listItem =
        <>
            <a href="#" className="mr-2 font-bold text-amber-600 text-xl">Home</a>
            <a href="#project" className="mr-2 font-bold text-amber-600 text-xl">Project</a>
            <a href="#about" className="mr-2 font-bold text-amber-600 text-xl">About</a>
            <a href="#contact" className="mr-2 font-bold text-amber-600 text-xl">Contact</a>
        </>
    return (
            // <div className="flex justify-between py-5 w-[1260px] z-50 fixed top-0 bg-black">
            <div className="flex justify-between py-5 px-5 lg:px-10 md:px-8 sm:px-5 w-full max-w-screen-xl mx-auto z-50 fixed top-0 bg-black">
                <div className=" ml-10">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-amber-700 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {listItem}
                        </ul>
                    </div>
                    <a className="text-amber-600 normal-case text-4xl font-bold">Sawon Protfolio</a>
                </div>
                <div className=" hidden lg:flex mr-8 ">
                    <ul className="menu menu-horizontal px-1">
                        {listItem}
                    </ul>
                </div>
            </div>
    );
};

export default NavigationBer;