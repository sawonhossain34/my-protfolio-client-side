import { Outlet } from "react-router-dom";
import NavigationBer from "../NavigationBer/NavigationBer";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;