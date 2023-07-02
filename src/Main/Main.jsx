import { Outlet } from "react-router-dom";
import NavigationBer from "../NavigationBer/NavigationBer";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div  className='max-w-screen-xl mx-auto'>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;