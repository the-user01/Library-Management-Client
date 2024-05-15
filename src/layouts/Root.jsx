import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Footer></Footer>

            <ScrollRestoration></ScrollRestoration>
        </>
    );
};

export default Root;