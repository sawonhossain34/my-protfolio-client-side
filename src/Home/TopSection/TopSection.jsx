import img from "../../assets/img/IMG-20220710-WA0004 (1).jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import imgpdf from "../../../public/resume (4).pdf"

import html from "../../assets/img/html.avif"
import css from "../../assets/img/css.webp"
import js from "../../assets/img/js.png"
import react from "../../assets/img/react.png"

const TopSection = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="hero  bg-black relative">
            <div className="hero-content flex-col lg:flex-row-reverse py-10">
                <img data-aos="fade-left" src={img} className="max-w-sm rounded-b-full rounded-tl-full shadow-2xl " />
                <div data-aos="fade-right" className="mr-10 ">
                    <p className="text-gray-400 text-xl">Hello,My name is</p>
                    <h1 className="text-5xl text-amber-600 font-bold">Sawon Hossain</h1>
                    <p className="py-6 text-gray-400 font-bold">I am <span className="text-amber-600">Frontend Developer</span>.Highly declicated <br />
                        and hardworking.Most of the time I am busy <br />
                        working on my <span className="text-amber-600">HTML</span>,<span className="text-amber-600">CSS</span>,<span className="text-amber-600">Javascript</span> <br /> and <span className="text-amber-600">React</span> skills.</p>
                    {/* <button className="btn bg-amber-600 hover:text-white"><a href="file:///C:/Users/Sawon%20Hossain/Downloads/Resume%20(3)%20(1).pdf">Resume</a></button> */}
                    <button className="btn bg-amber-600 hover:text-amber-600">
                        <a href={imgpdf} alt=''>Resume</a>
                    </button>
                </div>
            </div>
            <div className="bg-gray-700 w-full opacity-20 -bottom-7 p-8 flex flex-cols-2 lg:flex-cols-4 justify-around items-center gap-4 absolute">
                <div className="w-10 h-10 text-amber-600 text-center"><img src={html} alt="" />HTML</div>
                <div className="w-10 h-10 text-amber-600  text-center"><img src={css} alt="" />CSS</div>
                <div className="w-10 h-10 text-amber-600  text-center"><img src={js} alt="" />JAVASCRIPT</div>
                <div className="w-10 h-10 text-amber-600 text-center"><img src={react} alt="" />REACT</div>

            </div>
        </div>
    );
};

export default TopSection;