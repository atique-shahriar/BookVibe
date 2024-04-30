import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;
    console.log(book);
    return (
        <Link to={`/book/${bookId}`}>
            <div className='p-5 border rounded-2xl'>
                <div className='bg-gray-100 rounded-xl flex justify-center'>
                    <img src={image} alt="" className='w-32 h-44 m-6 shadow-xl' />
                </div>
                <div className='flex gap-4 mt-4'>
                    <h5 className='text-green-600 px-5 bg-gray-100 rounded-xl font-medium'>{tags[0]}</h5>
                    <h5 className='text-green-600 px-5 bg-gray-100 rounded-xl font-medium'>{tags[1]}</h5>
                </div>
                <h3 className='my-3 text-2xl font-medium'>{bookName}</h3>
                <h4 className='border-b border-dashed pb-4 font-medium'>By: {author}</h4>
                <div className='pt-2 flex justify-between font-medium'>
                    <h1>{category}</h1>
                    <p className='flex gap-1 items-center'>
                        {rating} <FaRegStar></FaRegStar>
                    </p>
                </div>

            </div>


        </Link>
    );
};

export default Book;

Book.propTypes = {
    book: PropTypes.object,
}