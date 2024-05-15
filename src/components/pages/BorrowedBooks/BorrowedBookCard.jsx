
const BorrowedBookCard = (params) => {

    const {borrowedBook} = params;
    const {photo, book_name, category, borrowedDate, return_date} = borrowedBook;


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
                    <button className="btn btn-outline w-full text-lg text-black">Return</button>
                </div>
            </div>
        </div>
    );
};


export default BorrowedBookCard;