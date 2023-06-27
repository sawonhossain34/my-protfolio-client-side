import img from "../../assets/img/IMG-20220710-WA0004 (1).jpg";

const TopSection = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl "/>
                <div className="mr-10">
                    <p className="text-gray-400 text-xl">Hello,My name is</p>
                    <h1 className="text-5xl text-amber-600 font-bold">Sawon Hossain</h1>
                    <p className="py-6 text-gray-400 font-bold">I am <span className="text-amber-600">Frontend Developer</span>.Highly declicated <br />
                    and hardworking.Most of the time I am busy <br />
                    working on my <span className="text-amber-600">HTML</span>,<span className="text-amber-600">CSS</span>,<span className="text-amber-600">Javascript</span> <br /> and <span className="text-amber-600">React</span> skills.</p>
                    <button className="btn bg-amber-600 hover:text-white"><a href="file:///C:/Users/Sawon%20Hossain/Downloads/Resume%20(3)%20(1).pdf">Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default TopSection;