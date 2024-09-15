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

  console.log(books)
  return (
    <div>
      <h2 className="play-fair font-bold text-5xl text-center">Books</h2>
      <div className="grid grid-cols-3 gap-8">
        {
          books.slice(0, dataLength).map(book => <Book key={book.id} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;