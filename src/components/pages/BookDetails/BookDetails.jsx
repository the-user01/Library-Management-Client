import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";

const BookDetails = () => {
    const loader = useLoaderData();

    const { photo, book_name, author_name, category, rating, book_quantity, description } = loader;

    const starRating = parseInt(rating);

    return (
        <>
            <Helmet>
                <title>{book_name}</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mt-6 md:mt-0">{book_name}</h1>
                        <p className="py-6">{description}</p>

                        <hr />

                        <div className="my-6 space-y-4 flex flex-col md:flex-row justify-around">

                            <div className="space-y-2">
                                <p className="text-red-900 font-bold">Stock: Only {book_quantity} left</p>
                                <div><span className="text-red-900 font-bold">Ratings: </span>
                                    <StarRatings
                                        starDimension="20px"
                                        rating={starRating}
                                        starRatedColor="rgb(230, 67, 47)"
                                        numberOfStars={5}
                                        name='rating'
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p><span className="text-red-900 font-bold">Category: </span>{category}</p>
                                <p><span className="text-red-900 font-bold">Authore: </span>{author_name}</p>
                            </div>
                        </div>

                        <hr />

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BookDetails;