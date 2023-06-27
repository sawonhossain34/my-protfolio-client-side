import skill from "../../assets/img/skill-img.jpg";
const Skill = () => {
    return (
        <div className="my-10 ">
            <h2 className="text-5xl text-amber-600 font-bold text-center py-10">Skill</h2>
            <div className="hero w-full min-h-screen bg-base-200">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={skill} className="max-w-sm rounded-lg shadow-2xl  mr-10" />
                    <div className=" w-full pl-10">
                        <div className="grid grid-cols-2 gap-10">
                            <p className="py-6">Javascript</p>
                            <p className="py-6">Firebase</p>
                            <p className="py-6">React</p>
                            <p className="py-6">HTML</p>
                            <p className="py-6">CSS</p>
                            <p className="py-6">Tailwind CSS</p>
                            <p className="py-6">Bootstrap</p>
                            <p className="py-6"><span className="text-5xl">git</span> git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;


