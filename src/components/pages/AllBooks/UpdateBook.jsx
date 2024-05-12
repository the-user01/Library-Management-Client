import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const UpdateBook = () => {

    const axiosInstance = useAxios();

    const handleUpdateBooks = e => {
        e.preventDefault();

        const form = e.target;

        const book_name = form.book_name.value;
        const book_quantity = form.book_quantity.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;

        axiosInstance.put('/update-book', {
            book_name,
            book_quantity,
            author_name,
            category,
            rating,
            description,
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
                <form className="space-y-4 mt-6" onSubmit={handleUpdateBooks}>
                    {/* Form Row */}
                    <div className="md:flex items-center space-y-4 md:space-y-0">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base">Book Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="book_name" placeholder="Book Name" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>

                        <div className=" md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base">Book Quantity</span>
                            </label>
                            <label className="input-group ">
                                <input type="number" name="book_quantity" placeholder="Book Quantity" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>
                    </div>

                    {/* Form Row */}
                    <div className="md:flex space-y-4 md:space-y-0">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base">Author Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="author_name" placeholder="Author Name" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base">Category</span>
                            </label>
                            <select className="select border-2 border-blue-300 w-full" name='category'>
                                <option></option>
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
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base">Short Description</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>
                    </div>

                    {/* Form Row */}
                    <div >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-base">Book Image</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Book Info" className="btn btn-block bg-primary text-white" />
                </form>
            </div>

        </>
    );
};

export default UpdateBook;