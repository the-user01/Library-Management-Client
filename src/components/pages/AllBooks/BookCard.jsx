import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const BookCard = ({ book }) => {
    const { _id, photo, book_name, author_name, category, rating } = book;
    
    const starRating = parseInt(rating);

    return (
        <div className="card w-96 bg-white text-black shadow-xl">
            <figure><img src={photo} alt={book_name} className='h-56 w-full' /></figure>
            <div className="card-body skeleton w-full rounded-sm">
                <h2 className="card-title">{book_name}</h2>
                <p><span className='font-bold'>Author:</span> {author_name}</p>
                    <p><span className='font-bold'>Category: </span>{category}</p>
                    <div><span className='font-bold mr-4'>Rating: </span>
                        <span>
                            <StarRatings
                                starDimension="20px"
                                rating={starRating}
                                starRatedColor="rgb(230, 67, 47)"
                                numberOfStars={5}
                                name='rating'
                            />
                        </span>
                    </div>
                <div className="card-actions mt-4">
                    <Link to={`/update-book/${_id}`} className="btn btn-outline btn-primary w-full"><button>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.object
}

export default BookCard;