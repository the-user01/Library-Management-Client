import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import CategoryCard from "./CategoryCard";

const ShowCategory = () => {
    const axiosInstance = useAxios();

    const [booksCategory, setBooksCategory] = useState([]);
    const [datalength, setDatalength] = useState(6);

    useEffect(() => {
        axiosInstance.get('/books-category')
            .then(data => {
                setBooksCategory(data.data);
            })
    }, [axiosInstance])

    return (
        <div>
            <div>
                <h2 className="font-bold my-8 text-3xl md:text-4xl text-center">Categories</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-y-6">
                    {
                        booksCategory.slice(0, datalength).map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                    }
                </div>
            </div>

            <div className="flex justify-center my-10 gap-24 md:gap-48">
                <div className={datalength === booksCategory.length ? 'hidden' : undefined}>
                    <button
                        className="btn btn-outline md:text-base md:px-16"
                        onClick={() => setDatalength(datalength + 3)}
                    >Show More</button>
                </div>
                <div className={datalength === 6 ? 'hidden' : 'block'}>
                    <button
                        className="btn btn-outline md:text-base md:px-16"
                        onClick={() => setDatalength(datalength - 3)}
                    >Show Less</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCategory;