import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [dataLength, setDataLenhth] = useState(6);

  useEffect(() => {
    fetch('books.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div className="my-20">
      <h2 className="play-fair font-bold text-5xl text-center mb-12">Books</h2>
      <div className="grid grid-cols-3 gap-12">
        {
          books.slice(0, dataLength).map(book => <Book key={book.id} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;