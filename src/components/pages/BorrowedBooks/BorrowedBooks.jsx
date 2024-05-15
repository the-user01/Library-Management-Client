import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BorrowedBookCard from './BorrowedBookCard';
import { useLoaderData } from 'react-router-dom';

const BorrowedBooks = () => {

    const loaderData = useLoaderData()

    const [borrowedBooks, setBorrowedBooks] = useState(loaderData);

    return (
        <>
            <Helmet>
                <title>Borrowed Books</title>
            </Helmet>

            <div className='flex justify-center mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-10'>
                    {
                        borrowedBooks.map(borrowedBook => <BorrowedBookCard
                            key={borrowedBook._id}
                            borrowedBook={borrowedBook}
                            borrowedBooks={borrowedBooks}
                            setBorrowedBooks={setBorrowedBooks}
                        ></BorrowedBookCard>)
                    }
                </div>
            </div>

        </>
    );
};

export default BorrowedBooks;