import { useLoaderData } from "react-router-dom";
import CategoryBooksCard from "./CategoryBooksCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const CategoryBooks = () => {

    const [header, setHeader] = useState();

    const loaderData = useLoaderData();

    return (
        <>
            <Helmet>
                <title>{`Books | ${header}`}</title>
            </Helmet>

            <div className="text-center font-extrabold text-2xl md:text-4xl mt-12">
                <h2>{header}</h2>
            </div>

            <div className="flex justify-center">
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-10">
                    {
                        loaderData.map(book => <CategoryBooksCard
                            key={book._id}
                            book={book}
                            setHeader={setHeader}
                        ></CategoryBooksCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryBooks;