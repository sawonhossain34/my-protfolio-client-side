
import NavigationBer from "../NavigationBer/NavigationBer";
import TopSection from "../Home/TopSection/TopSection";
import Project from "../Home/Project/Project";
import Skill from "../Home/Skill/Skill";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto bg-black'>
            <NavigationBer></NavigationBer>
            <TopSection></TopSection>
            <Project></Project>
            <Skill></Skill>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Main;