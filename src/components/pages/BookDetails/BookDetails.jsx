import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const BookDetails = () => {
    const axiosInstance = useAxios();
    const loaderData = useLoaderData();

    const { user, loader } = useAuth();

    const { photo, book_name, author_name, category, rating, book_quantity, description } = loaderData;

    const starRating = parseInt(rating);


    const handleBorrowBook = e => {
        e.preventDefault();
        const form = e.target;

        const return_date = form.return_date.value;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;

        axiosInstance.post('/borrowed-books', {
            return_date,
            user_name,
            user_email,
        })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Book Added Successfully",
                });

                //reduce book quantity//


            })
        form.reset();
    }

    const closeModal = ()=>{
        const modal = document.getElementById('borrow-book-modal');
        if(modal){
            modal.close();
        }
    }

    return (
        <>
            <Helmet>
                <title>{book_name}</title>
            </Helmet>

            {
                loader ?
                    <div className="text-center my-6">
                        <span className="loading loading-dots loading-lg"></span>
                    </div> :
                    <>

                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                                <div className="mt-4  md:mt-10">
                                    <h1 className="text-2xl md:text-4xl font-bold mt-6 md:mt-0">{book_name}</h1>
                                    <p className="py-6">{description}</p>

                                    <hr className="border-1 border-gray-400" />

                                    <div className="my-6 space-y-4 md:space-y-0 flex flex-col md:flex-row justify-around">

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

                                    <hr className="border-1 border-gray-400" />

                                    <div className="md:text-center">
                                        <button
                                            className="btn btn-outline btn-success px-10 md:px-16 text-base md:text-lg mt-2 md:mt-4"
                                            onClick={() => document.getElementById('borrow-book-modal').showModal()}
                                        >Borrow</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Modal for borrowing books */}

                        <div>
                            <dialog id="borrow-book-modal" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Fill up the Form</h3>
                                    <div>
                                        <form className="space-y-4 mt-6" onSubmit={handleBorrowBook}>
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text text-base">Return Date</span>
                                                </label>
                                                <label className="input-group ">
                                                    <input type="date" name="return_date" className="input input-bordered w-full border-2 border-blue-300" />
                                                </label>
                                            </div>

                                            {/* Form Row */}
                                            <div className="md:flex items-center space-y-4 md:space-y-0">
                                                <div className="form-control md:w-1/2">
                                                    <label className="label">
                                                        <span className="label-text text-base">User Name</span>
                                                    </label>
                                                    <label className="input-group ">
                                                        <input type="text"
                                                            name="user_name"
                                                            defaultValue={user.displayName}
                                                            readOnly
                                                            className="input input-bordered w-full border-2 border-blue-300" />
                                                    </label>
                                                </div>

                                                <div className=" md:w-1/2 md:ml-4">
                                                    <label className="label">
                                                        <span className="label-text text-base">User Email</span>
                                                    </label>
                                                    <label className="input-group ">
                                                        <input type="email"
                                                            name="user_email"
                                                            defaultValue={user.email}
                                                            readOnly
                                                            method="dialog"
                                                            className="input input-bordered w-full border-2 border-blue-300"
                                                        />
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Submit form */}
                                            <input
                                                type="submit"
                                                value="Submit"
                                                onClick={closeModal}
                                                className="btn btn-outline btn-success text-lg w-full border-2 border-blue-300"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </>
            }


        </>
    );
};

export default BookDetails;