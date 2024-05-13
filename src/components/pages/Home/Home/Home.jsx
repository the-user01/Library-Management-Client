import { Helmet } from "react-helmet-async";
import ShowCategory from "../Category/ShowCategory";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Book-Mania(c) | Home</title>
            </Helmet>
            <div>
                <ShowCategory></ShowCategory>
            </div>
        </>
    );
};

export default Home;