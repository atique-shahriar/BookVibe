import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-16">
            <div>
                <h3 className="text-5xl text-center font-semibold my-10">Books</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;