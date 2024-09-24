import { redirect, useLoaderData } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
import WishItem from "../ListItem/wishItem";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const books = useLoaderData();
  // data form local storage
  const storedReadBooks = localStorage.getItem('read');
  const storedWishlistBooks = localStorage.getItem('wishlist');
  // filter books matches ids
  const readbooks = books.filter(item => storedReadBooks.includes(item.bookId));
  const wishbooks = books.filter(item => storedWishlistBooks.includes(item.bookId));
  // default values
  const [displayReadBooks, setDisplayReadBooks] = useState([]);
  const [displayWishBooks, setDisplayWishBooks] = useState([]);
  // console.log(readbooks)

   const handleBooksFilter = filter => {
    if (filter === 'rating') {
      const readSortByRate = readbooks.sort((a, b) => b.rating - a.rating);
      const wishSortByRate = wishbooks.sort((a, b) => b.rating - a.rating);
      setDisplayReadBooks(readSortByRate)
      setDisplayWishBooks(wishSortByRate)
    }
    else if (filter === 'totalPages') {
      const readSortByPage = readbooks.sort((a, b) => b.totalPages - a.totalPages);
      const wishSortByPage = wishbooks.sort((a, b) => b.totalPages - a.totalPages);
      setDisplayReadBooks(readSortByPage)
      setDisplayWishBooks(wishSortByPage)
    }
    else if (filter === 'yearOfPublishing') {
      const readSortByYear = readbooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      const wishSortByYear = wishbooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setDisplayReadBooks(readSortByYear)
      setDisplayWishBooks(wishSortByYear)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Book Vibe | Listed Books</title>
      </Helmet>
      <div className="flex justify-around items-center py-6 bg-[#13131310] rounded-3xl">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      <div className="text-center my-6">
        <details className="dropdown ">
          <summary className="btn m-1 bg-[#23BE0A] text-white">Sort By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
            <li onClick={() => handleBooksFilter('totalPages')}><a>Number of Pages</a></li>
            <li onClick={() => handleBooksFilter('yearOfPublishing')}><a>Published Year</a></li>
          </ul>
        </details>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-sm p-6">
          {storedReadBooks.length === 0 && <p>No books are available</p>}
          {
            displayReadBooks.length === 0 ?
            readbooks.map(readItem => <ListItem key={readItem.id} readItem={readItem}></ListItem>):
            displayReadBooks.map(readItem => <ListItem key={readItem.id} readItem={readItem}></ListItem>)
          }
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-sm p-6">
          {storedReadBooks.length === 0 && <p>No books are available</p>}
          {
            displayWishBooks.length === 0 ?
            wishbooks.map(readItem => <ListItem key={readItem.id} readItem={readItem}></ListItem>):
            displayWishBooks.map(readItem => <ListItem key={readItem.id} readItem={readItem}></ListItem>)
          }
        </div>
      </div>
    </div>

  );
};

export default ListedBooks;