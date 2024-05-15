import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxios from "../../../hooks/useAxios";
import BookCard from "./BookCard";
import useAuth from "../../../hooks/useAuth";
import BookTable from "./BookTable";

const AllBooks = () => {
    const { loader } = useAuth();
    const axiosInstance = useAxios();
    const [books, setBooks] = useState([]);
    const [view, setView] = useState('card')

    useEffect(() => {
        axiosInstance.get('/all-books')
            .then(data => {
                setBooks(data.data)
            })
    }, [axiosInstance])

    // using for changing the view
    const handleViewChange = (newView) => {
        setView(newView);
    }


    return (
        <>
            <Helmet>
                <title>All Books</title>
            </Helmet>

            {
                loader ? <div className="text-center my-6">
                    <span className="loading loading-dots loading-lg"></span>
                </div> :
                    <div>
                        <div className="my-8">
                            <h2 className="font-extrabold text-center text-2xl md:text-4xl">All Books List</h2>
                        </div>

                        {/* View selector */}
                        <div className="text-center">
                            <label className="border-4 p-2 bg-gray-100 rounded-lg shadow-lg"><span className="font-bold text-black">View: </span>
                                <select
                                    value={view}
                                    className="bg-white rounded-lg text-black"
                                    onChange={(e) => handleViewChange(e.target.value)}
                                >
                                    <option value="card">Card View</option>
                                    <option value="table">List View</option>
                                </select>
                            </label>
                        </div>

                        {
                            view === 'card' ?
                                <>
                                    {/* Card view */}
                                    <div className="flex justify-center mt-12">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-10">
                                            {
                                                books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                                            }
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className="mt-12">
                                        <div className="overflow-x-auto">
                                            <table className="table">
                                                {/* head */}
                                                <thead>
                                                    <tr className="text-lg">
                                                        <th></th>
                                                        <th>Book Name</th>
                                                        <th>Author</th>
                                                        <th>Category</th>
                                                        <th>Rating</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* run map here to get rows */}
                                                    {
                                                        books.map((book, index) => <BookTable
                                                        key={book._id}
                                                        index={index}
                                                        book={book}
                                                        ></BookTable>)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                        }



                    </div>

            }


        </>
    );
};

export default AllBooks;