import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    localStorageDataStore,
    localStorageWishListDataStore,
} from "../../utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  console.log(books);
  const {bookId} = useParams();
  const book = books.find((book) => book.bookId == bookId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    rating,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleBookRead = () => {
    localStorageDataStore(book);
  };
  const handleWishListBook = () => {
    localStorageWishListDataStore(book);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
        <div className="bg-gray-100 rounded-xl flex justify-center items-center">
          <img src={image} alt="" className="w-60 h-3/4 md:h-3/5 shadow-xl" />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-medium">{bookName}</h3>
          <p className="font-medium">By: {author}</p>
          <p className="font-medium py-3 border-y-2 ">{category}</p>
          <p className="text-justify">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <p className="flex gap-4 items-center border-b-2 pb-6">
            <span className="font-bold">Tags </span>
            <span className="bg-gray-100 px-4 rounded-xl text-green-500 font-semibold">
              #{tags[0]}
            </span>
            <span className="bg-gray-100 px-4 rounded-xl text-green-500 font-semibold">
              #{tags[1]}
            </span>
          </p>
          <table>
            <tr className="h-10">
              <td>Number of Pages:</td>
              <td className="pl-12 font-bold">{totalPages}</td>
            </tr>
            <tr className="h-10">
              <td>Publisher:</td>
              <td className="pl-12 font-bold">{publisher}</td>
            </tr>
            <tr className="h-10">
              <td>Year of Publishing:</td>
              <td className="pl-12 font-bold">{yearOfPublishing}</td>
            </tr>
            <tr className="h-10">
              <td>Rating:</td>
              <td className="pl-12 font-bold">{rating}</td>
            </tr>
          </table>
          <div className="flex gap-6">
            <button
              onClick={handleBookRead}
              className="border-2 px-6 py-3 font-bold rounded-lg border-gray-300"
            >
              Read
            </button>
            <button
              onClick={handleWishListBook}
              className="border-2 px-6 py-3 font-bold text-white rounded-lg border-sky-500 bg-sky-500"
            >
              Wishlist
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 mb-10">
        <Link to={"/"}>
          <button className="bg-green-600 text-white font-medium px-5 py-2 rounded-lg">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
