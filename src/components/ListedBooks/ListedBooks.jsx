import { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBook from "../WishlistBook/WishlistBook";

const ListedBooks = () => {

    const [readBooks, setReadBooks] = useState([]);
    const [displayReadBooks, setDisplayReadBooks] = useState([]);

    useEffect(() => {
        const getStoredData = JSON.parse(localStorage.getItem("readBooks")) || [];
        setReadBooks(getStoredData);
        setDisplayReadBooks(getStoredData);
    }, [])


    const handleBooks = (event) => {
        let sortedValues = readBooks;
        if (event.target.value === "Rating") {
            sortedValues = [...readBooks].sort((a, b) => b.rating - a.rating);
        }
        else if (event.target.value === "Number of pages") {
            sortedValues = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (event.target.value === "Published year") {
            sortedValues = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

        }
        // console.log("Form Condition", displayReadBooks);
        setDisplayReadBooks(sortedValues);
    }





    const [wishListBooks, setWishListBook] = useState([]);
    useEffect(() => {
        const getStoredData = JSON.parse(localStorage.getItem("wishListBooks")) || [];
        setWishListBook(getStoredData);
    }, [])

    return (
        <div>
            <div className="bg-gray-100 rounded-xl p-5 my-6">
                <h4 className="text-3xl font-bold text-center">Books</h4>
            </div>
            <div className="flex justify-center mt-4">


                <select className="select w-full max-w-40 bg-green-600 border-none text-white text-base font-semibold" onChange={handleBooks} >
                    <option disabled selected hidden className="bg-white text-black ">Sort By </option>
                    <option className="bg-white text-black">Rating</option>
                    <option className="bg-white text-black">Number of pages</option>
                    <option className="bg-white text-black">Published year</option>
                </select>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs" role="tab" className="tab text-base focus:text-green-600 focus:font-bold" aria-label="Read Books" checked />
                    <div role="tabpanel" className="tab-content border-none p-6 space-y-6 mt-8">
                        {
                            displayReadBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
                        }
                    </div>

                    <input type="radio" name="my_tabs" role="tab" className="tab text-base focus:text-green-600 focus:font-bold" aria-label="Wishlist Books" />
                    <div role="tabpanel" className="tab-content border-none p-6 space-y-6 mt-8">
                        {
                            wishListBooks.map(wishBook => <WishlistBook key={wishBook.bookId} wishBook={wishBook}></WishlistBook>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;