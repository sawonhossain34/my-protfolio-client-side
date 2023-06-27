import skill from "../../assets/img/skill-img.jpg";

import bootstrap from "../../assets/img/skill/bootstrap.png"
import css from "../../assets/img/skill/css.png"
import firebase from "../../assets/img/skill/firebase.png"
import html from "../../assets/img/skill/html.png"
import react from "../../assets/img/skill/react.png"
import js from "../../assets/img/skill/js.png"
const Skill = () => {
    return (
        <div className="my-10 ">
            <h2 className="text-5xl bg-gray-700 text-amber-600 font-bold text-center py-10">Skill</h2>
            <div className="hero w-full min-h-screen bg-black">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={skill} className="max-w-sm  rounded-lg shadow-2xl  mr-10 " />
                    <div className="w-full pl-10 text-amber-600">
                        <div className="grid grid-cols-2 gap-10">
                            <p data-aos="fade-right" className="py-6 flex gap-4 items-center"><img className="w-10 h-10" src={js} alt="" /> Javascript</p>
                            <p data-aos="fade-left" className="py-6 flex  gap-4 items-center"><img className="w-10 h-10" src={firebase} alt="" />Firebase</p>
                            <p data-aos="fade-right" className="py-6 flex gap-4 items-center"><img className="w-10 h-10" src={react} alt="" />React</p>
                            <p data-aos="fade-left" className="py-6 flex gap-4 items-center"><img className="w-10 h-10" src={html} alt="" />HTML</p>
                            <p data-aos="fade-right" className="py-6 flex gap-4 items-center"><img className="w-10 h-10" src={css} alt="" />CSS</p>
                            <p data-aos="fade-left" className="py-6 flex gap-4 items-center"><img className="w-10 h-10" src={css} alt="" />Tailwind CSS</p>
                            <p data-aos="fade-right" className="py-6 flex gap-4 items-center"><img className="w-10 h-10" src={bootstrap} alt="" />Bootstrap</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;


