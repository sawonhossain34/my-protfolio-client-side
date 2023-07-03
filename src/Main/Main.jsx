// import { Outlet } from "react-router-dom";
import NavigationBer from "../NavigationBer/NavigationBer";
import Footer from "../Footer/Footer";
import TopSection from "../Home/TopSection/TopSection";
import Project from "../Home/Project/Project";
import Skill from "../Home/Skill/Skill";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";

// TODO : bg black set
const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <NavigationBer></NavigationBer>
            {/* <Outlet></Outlet> */}
            <TopSection></TopSection>
            <Project></Project>
            <Skill></Skill>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;