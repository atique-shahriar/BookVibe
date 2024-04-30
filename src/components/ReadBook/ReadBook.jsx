import { PropTypes } from 'prop-types';
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { Link } from 'react-router-dom';

const ReadBook = ({ readBook }) => {
    const { bookId, image, bookName, author, category, rating, tags, totalPages, publisher, yearOfPublishing } = readBook;
    return (
        <div className='flex  flex-col md:flex-row border rounded-xl p-6 gap-4'>
            <div className=' bg-gray-100 rounded-xl flex justify-center items-center'>
                <img src={image} alt="" className='w-24 h-32 m-6 shadow-xl' />
            </div>
            <div className='space-y-2'>
                <h3 className="text-2xl font-medium">{bookName}</h3>
                <p className="font-medium">By: {author}</p>
                <div className='flex flex-col md:flex-row gap-2 md:gap-16 md:items-center'>
                    <p className="flex gap-4 items-center"><span className="font-bold">Tags </span><span className="bg-gray-100 px-4 rounded-xl text-green-500 font-semibold">#{tags[0]}</span><span className="bg-gray-100 px-4 rounded-xl text-green-500 font-semibold">#{tags[1]}</span></p>
                    <p className='flex items-center gap-2'><BsCalendar2Date></BsCalendar2Date> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-10 border-b pb-2'>
                    <span className='flex items-center gap-2'><GoPeople></GoPeople>Publisher: {publisher}</span>
                    <span className='flex items-center gap-2'><FaRegFilePdf></FaRegFilePdf>Page: {totalPages}</span>
                </div>
                <div className='flex justify-between md:gap-4 text-xs md:text-base'>
                    <span className='bg-sky-100 px-2 py-2 md:py-0 md:px-4 rounded-xl text-sky-600 font-semibold'>Category: {category}</span>
                    <span className='bg-red-100 px-2 py-2 md:py-0 md:px-4 rounded-xl text-red-600 font-semibold'>Ratings: {rating}</span>
                    <span className='bg-green-600 px-2 py-2 md:py-0 md:px-4 rounded-xl text-white font-semibold'> <Link to={`/book/${bookId}`}>View Details</Link> </span>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    readBook: PropTypes.object,
}

export default ReadBook;
