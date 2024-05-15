import { Helmet } from "react-helmet-async";
import ShowCategory from "../Category/ShowCategory";
import Banner from "./Banner";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Book-Mania(c) | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <ShowCategory></ShowCategory>
            </div>
        </>
    );
};

export default Home;