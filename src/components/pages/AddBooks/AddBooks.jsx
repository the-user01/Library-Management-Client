import { Helmet } from 'react-helmet-async';
import useAxios from '../../../hooks/useAxios';

const AddBooks = () => {

    const axiosInstance = useAxios();

    const handleAddBooks = e => {
        e.preventDefault();

        const form = e.target;

        const book_name = form.book_name.value;
        const book_quantity = form.book_quantity.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;

        axiosInstance.post('/allBooks',{
            book_name,
            book_quantity,
            author_name,
            category,
            rating,
            description,
            photo,
        })
        .then(res=> {
            console.log(res.data);
        })


        form.reset();

    }


    return (
        <>
            <Helmet>
                <title>Add Books</title>
            </Helmet>
            <div className="bg-gray-100 mt-6 p-16">
                <div>
                    <h2 className='font-extrabold text-center text-4xl md:text-4xl'>Add Book</h2>
                </div>

                <form className="space-y-4 mt-6" onSubmit={handleAddBooks}>
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
                    <input type="submit" value="Add Spot" className="btn btn-block bg-primary text-white" />
                </form>
            </div>

        </>
    );
};

export default AddBooks;