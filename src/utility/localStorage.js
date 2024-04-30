import { toast } from 'react-toastify';

export const localStorageDataStore = (book) => {
    const savedData = JSON.parse(localStorage.getItem('readBooks')) || [];
    const isDataAlreadyStored = savedData.find(bookItem => bookItem.bookId == book.bookId);

    const savedWishListData = JSON.parse(localStorage.getItem('wishListBooks')) || [];
    // const isStored = savedWishListData.find(bookItem => bookItem.bookId == book.bookId);
    // // console.log("Wish Book", isStored);
    const isStoredAllWithoutRead = savedWishListData.filter(bookItem => bookItem.bookId != book.bookId);
    // console.log("Wish Book All", isStoredAll);

    if (isDataAlreadyStored) {
        toast.warn('Book is already added into read', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    else {
        savedData.push(book);
        localStorage.setItem("wishListBooks", JSON.stringify(isStoredAllWithoutRead));
        localStorage.setItem("readBooks", JSON.stringify(savedData));
        toast("Book is added to read")
    }
}




export const localStorageWishListDataStore = (book) => {
    const savedData = JSON.parse(localStorage.getItem('readBooks')) || [];
    const isDataAlreadyStored = savedData.find(bookItem => bookItem.bookId == book.bookId);

    const savedWishListData = JSON.parse(localStorage.getItem('wishListBooks')) || [];
    const isWishListDataAlreadyStored = savedWishListData.find(bookItem => bookItem.bookId == book.bookId);

    if (isDataAlreadyStored) {
        toast.error('Book is already added into read', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    else {

        if (isWishListDataAlreadyStored) {
            toast.warn('This book is already added into wishlist', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            savedWishListData.push(book);

            localStorage.setItem("wishListBooks", JSON.stringify(savedWishListData));
            toast("Book is added into wishlist")
        }

    }






}