
import Contact from "../Contact/Contact";
import Skill from "../Skill/Skill";
import TeckStack from "../TeckStack/TeckStack";
import TopSection from "../TopSection/TopSection";

const Home = () => {
    return (
        <div>
        <TopSection></TopSection>
        <TeckStack></TeckStack>
        <Skill></Skill>
        <Contact></Contact>
        </div>
    );
};

export default Home;