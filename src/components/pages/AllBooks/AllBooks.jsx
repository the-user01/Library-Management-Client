import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../../hooks/useAxios";
import BookCard from "./BookCard";
import useAuth from "../../../hooks/useAuth";

const AllBooks = () => {
    const { loader } = useAuth();
    const axiosInstance = useAxios();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axiosInstance.get('/all-books')
            .then(data => {
                setBooks(data.data)
            })
    }, [axiosInstance])


    return (
        <>
            <Helmet>
                <title>All Books</title>
            </Helmet>
            <div>
                <div className="my-8">
                    <h2 className="font-extrabold text-center text-2xl md:text-4xl">All Books List</h2>
                </div>
                {
                    loader ? <div className="text-center my-6">
                        <span className="loading loading-dots loading-lg"></span>
                    </div> :
                        <>

                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-10">
                                    {
                                        books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                                    }
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    );
};

export default AllBooks;