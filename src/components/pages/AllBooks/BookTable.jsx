import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookTable = (params) => {

    const {index, book} = params;
    const { _id, book_name, author_name, category, rating } = book;

    return (
        <tr className="hover">
            <th>{index+1}</th>
            <td>{book_name}</td>
            <td>{author_name}</td>
            <td>{category}</td>
            <td>{rating}</td>
            <td><Link to={`/update-book/${_id}`} className="btn btn-outline btn-primary w-full"><button>Update</button></Link></td>
        </tr>
    );
};

BookTable.propTypes = {
    params: PropTypes.object
}

export default BookTable;