import PropTypes from 'prop-types';

const BookCard = ({book}) => {
    const {photo, book_name, author_name, category, rating} = book;

    return (
        <div className="card w-96 bg-white text-black shadow-xl">
            <figure><img src={photo} alt={book_name} className='h-52 w-full'/></figure>
            <div className="card-body">
                <h2 className="card-title">{book_name}</h2>
                <p><span className='font-bold'>Authore:</span> {author_name}</p>
                <div className='flex justify-between'>
                    <p><span className='font-bold'>Category: </span>{category}</p>
                    <p><span className='font-bold'>Rating: </span>{
                        rating
                    }</p>
                </div>
                <div className="card-actions mt-4">
                    <button className="btn btn-outline btn-primary w-full">Update</button>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}

export default BookCard;