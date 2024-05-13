import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
    const axiosInstance = useAxios();

    const loader = useLoaderData();

    const { 
        _id,
        book_name,
        author_name,
        category,
        rating,
        photo, } = loader;

    const handleUpdateBooks = e => {
        e.preventDefault();

        const form = e.target;

        const book_name = form.book_name.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        axiosInstance.put(`/all-books/${_id}`, {
            book_name,
            author_name,
            category,
            rating,
            photo,
        })
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Book Added Updated",
                });

            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <>
            <Helmet>
                <title>Update Book</title>
            </Helmet>

            <div>
                <div>
                    <h2 className="font-bold text-center my-6 text-xl md:text-3xl">Update {`"${book_name}"`} Information</h2>
                </div>

                <div className="">
                    <form className="space-y-4 mt-6" onSubmit={handleUpdateBooks}>
                        {/* Form Row */}
                        <div className="md:flex items-center space-y-4 md:space-y-0">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-base">Book Name</span>
                                </label>
                                <label className="input-group ">
                                    <input type="text" name="book_name" defaultValue={book_name} placeholder="Book Name" className="input input-bordered w-full border-2 border-blue-300" />
                                </label>
                            </div>
                        </div>

                        {/* Form Row */}
                        <div className="md:flex items-center space-y-4 md:space-y-0">
                        <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-base">Author Name</span>
                                </label>
                                <label className="input-group ">
                                    <input type="text" name="author_name" defaultValue={author_name} placeholder="Author Name" className="input input-bordered w-full border-2 border-blue-300" />
                                </label>
                            </div>
                        </div>

                        {/* Form Row */}
                        <div className="md:flex space-y-4 md:space-y-0">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-base">Category</span>
                                </label>
                                <select className="select border-2 border-blue-300 w-full" name='category'>
                                    <option>{category}</option>
                                    <option>Novel</option>
                                    <option>Thriller</option>
                                    <option>History</option>
                                    <option>Drama</option>
                                    <option>Sci-Fi</option>
                                    <option>Art & Music</option>
                                    <option>Comics</option>
                                    <option>Biography</option>
                                    <option>Computer & Tech</option>
                                    <option>Entertainmant</option>
                                    <option>Health & Fitness</option>
                                    <option>History</option>
                                    <option>Romance</option>
                                    <option>Sports</option>
                                    <option>Travel</option>
                                </select>
                            </div>
                        </div>

                        {/* Form Row */}
                        <div className="md:flex space-y-4 md:space-y-0">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-base">Rating</span>
                                </label>
                                <select className="select border-2 border-blue-300 w-full" name='rating'>
                                    <option>{rating}</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>

                        {/* Form Row */}
                        <div >
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-base">Book Image</span>
                                </label>
                                <label className="input-group ">
                                    <input type="text" name="photo"
                                    defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full border-2 border-blue-300" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Update Book Info" className="btn btn-block bg-primary text-white md:w-1/2" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default UpdateBook;