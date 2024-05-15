import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const BorrowedBookCard = (params) => {
    const axiosInstance = useAxios();

    const {borrowedBook, borrowedBooks, setBorrowedBooks} = params;
    const {_id, photo, book_name, category, borrowedDate, return_date} = borrowedBook;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure, You want to return?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/borrowed-books/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Returned!",
                                text: "Book has been returned.",
                                icon: "success",
                            });
                            const reamining = borrowedBooks.filter(spot => spot._id !== _id);
                            setBorrowedBooks(reamining);
                        }
                    })
            }
        });
    }


    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure><img src={photo} alt={book_name}  className="h-52 md:h-60 w-full"/></figure>
            <div className="card-body text-black skeleton w-full rounded-sm">
                <h2 className="card-title">{book_name}</h2>
                <p><span className="font-bold text-red-900">Category: </span>{category}</p>
                <hr  className="border-1 border-gray-400"/>
                <div className="flex justify-around">
                    <div>
                        <p className="text-red-900">Borrowed Date:</p>
                        <p>{borrowedDate}</p>
                    </div>
                    <div>
                        <p className="text-red-900">Return Date:</p>
                        <p>{return_date}</p>
                    </div>
                </div>
                <hr className="border-1 border-gray-400"/>
                <div className="card-actions mt-2 ">
                    <button onClick={()=> handleDelete(_id)}
                    className="btn btn-outline w-full text-lg text-black">Return</button>
                </div>
            </div>
        </div>
    );
};


export default BorrowedBookCard;