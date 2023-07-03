
import "./project.css"

const Project = () => {

    return (
        <div id="project" className="mainBody">
            <h2 className="text-5xl bg-gray-700 text-amber-600 font-bold text-center py-10">Projects</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  container justify-around text-amber-700 ml-12 bottom-2 border-y-orange-600">

                {/* 1  no */}
                <div className="  ">
                    <div className="box box1 ">
                        <h3> </h3>
                    </div>
                    <h3 className="text-amber-700">Learn_Photography,
                        react_tailwind_daisyui <br />_react_icon_react_form,
                        Slider_ <br />faveroutclass_dashboard login.</h3>
                </div>

                {/* 2  no */}
                <div className="  ">
                    <div className="box box2">
                        <h3> </h3>
                    </div>
                    <h3 className="text-amber-700">navigationBer
                        Responsive Footer
                        slider <br />
                        imgGallery
                        other 2 section</h3>
                </div>

                {/* 3  no */}
                <div className="  ">
                    <div className="box box3">
                        <h3> </h3>
                    </div>
                    <h3 className="text-amber-700">vite.config.js
                        chef details
                        .gitignore <br /> node_modules
                        create env.local <br />
                        ActiveLink Add</h3>
                </div>
            </div>
        </div>


    );
};

export default Project;