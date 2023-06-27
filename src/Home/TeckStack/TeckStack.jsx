import html from "../../assets/img/html.avif"
import css from "../../assets/img/css.webp"
import js from "../../assets/img/js.png"
import react from "../../assets/img/react.png"
const TeckStack = () => {
    return (
        <div className="my-10 bg-black py-14"> 
            <h2 className="text-5xl mb-14 text-amber-600 text-center">Tack Stack</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center "> */}
            <div className="flex flex-cols-2 lg:flex-cols-4 justify-around items-center gap-4">
                <div className="w-20 h-20 text-amber-600 text-center"><img src={html} alt="" />HTML</div>
                <div className="w-20 h-20 text-amber-600  text-center"><img src={css} alt="" />CSS</div>
                <div className="w-20 h-20 text-amber-600  text-center"><img src={js} alt="" />JAVASCRIPT</div>
                <div className="w-20 h-20 text-amber-600 text-center"><img src={react} alt="" />REACT</div>

            </div>
        </div>
    );
};

export default TeckStack;