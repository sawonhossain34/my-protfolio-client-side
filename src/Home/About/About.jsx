import { useEffect } from "react";
import aboutimg from "../../assets/img/skill/about-me.jpg"
import Aos from "aos";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div id="about" className="my-10 mt-20 ">
            <h2 className="text-5xl bg-gray-700 text-amber-600 font-bold text-center py-10">About Me</h2>
            <div className="hero bg-black py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div  data-aos="zoom-in" className="w-1/2 pl-14 flex items-center justify-center ">
                    <img src={aboutimg} className="border-8 text-center border-amber-700 max-w-sm w-60 h-60 rounded-full shadow-2xl  border-5 hover:shadow-amber-700"  />
                    </div>
                    <div  data-aos="zoom-in" className="w-1/2 text-yellow-600 text-center">
                        <h1 className="text-5xl font-bold">About</h1>
                        <p className="py-6">I am a frontend developer with a passion for creating visually stunning and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and intuitive interfaces that engage and delight users.</p>
                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default About;