import { Helmet } from 'react-helmet-async';

const AddBooks = () => {
    return (
        <>
            <Helmet>
                <title>Add Books</title>
            </Helmet>
            <div className="bg-gray-100 mt-6 p-24">

                <form className="space-y-4 mt-6" >
                    {/* Form Row */}
                    <div className="md:flex items-center space-y-4 md:space-y-0">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base">Spot Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="spot_name" placeholder="Spot Name" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>

                        <div className=" md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base">Country Name</span>
                            </label>
                            <select className="select border-2 border-blue-300 w-full" name='country_name'>
                                <option></option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                        </div>
                    </div>

                    {/* Form Row */}
                    <div className="md:flex space-y-4 md:space-y-0">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base">Location</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base">Average Cost</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>
                    </div>

                    {/* Form Row */}
                    <div className="md:flex space-y-4 md:space-y-0">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base">Seasonality</span>
                            </label>
                            <select className="select border-2 border-blue-300 w-full" name='seasonality'>
                                <option></option>
                                <option>Spring</option>
                                <option>Summer</option>
                                <option>Monsoon</option>
                                <option>Autumn</option>
                                <option>winter</option>
                            </select>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base">Travel Time</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>
                    </div>

                    {/* Form Row */}
                    <div className="md:flex space-y-4 md:space-y-0">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base">Short Description</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text text-base">Total Visitor Per Year</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="total_visitor" placeholder="Total Visitor Per Year" className="input input-bordered w-full border-2 border-blue-300" />
                            </label>
                        </div>
                    </div>

                    {/* Form Row */}
                    <div className="space-y-4 md:space-y-0" >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-base">Photo URL</span>
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