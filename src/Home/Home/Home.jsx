
import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

import TopSection from "../TopSection/TopSection";

const Home = () => {
    return (
        <div>
        <TopSection></TopSection>
        <Project></Project>
        <Skill></Skill>
        <About></About>
        <Contact></Contact>
        </div>
    );
};

export default Home;