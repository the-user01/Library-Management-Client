import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { photo, category_name } = category;

    return (
        <div className="card w-96 bg-white shadow-xl text-black">
            <figure><img src={photo} alt={category_name} className='w-full h-52'/></figure>
            <div className="card-body skeleton w-full rounded-sm">
                <h2 className="card-title mb-6 font-bold">{category_name}</h2>
                <div className="card-actions">
                   <Link to={`/category-books/category/${category_name}`} className="btn btn-outline btn-accent w-full"> <button >Show Books</button></Link>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object,
}

export default CategoryCard;