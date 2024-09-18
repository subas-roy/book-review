import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveToLocalStorage } from "../../utility/localStorage";
import { useState } from 'react';

const BookDetails = () => {
  const books = useLoaderData();
  const {bookId} = useParams();

  const book = books.find(book => book.bookId === bookId);

  const handleRead = (key, id) => {
    const readList = localStorage.getItem(key);
    if (!readList) {
      saveToLocalStorage(key, id);
      toast(`Added to read successfully!`);
    }
    else if (!readList.includes(id)) {
      saveToLocalStorage(key, id);
      toast(`Added to read successfully!`);
    }
    else {
      toast(`Already exists!`);
    }
    // setRead(() => readList)
    // console.log(read)
  }

  const handleWishlist = (key, id) => {
    const wishList = localStorage.getItem(key);
    const read = localStorage.getItem('read')
    if (read.includes(id)) {
      toast(`Already read!`)
    }
    else if (!wishList) {
      saveToLocalStorage(key, id);
      toast(`Added to read successfully!`);
    }
    else if (!wishList.includes(id)) {
      saveToLocalStorage(key, id);
      toast(`Added to read successfully!`);
    }
    else {
      toast(`Already exists!`);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <img className="w-[425px] p-12 bg-[#13131310] rounded-md" src={book.image} alt={book.bookName} />
      </div>
      <div>
        <h1 className="text-5xl play-fair">{book.bookName}</h1>
        <p className="work-sans font-medium text-xl py-4">By : {book.author}</p>
        <hr />
        <p className="font-medium text-xl py-2">{book.category}</p>
        <hr className="pb-2" />
        <p><b>Review: </b>{book.review}</p>
        <div className="flex items-center">
          <b className="font-bold py-4 mr-4">Tags: </b>
          <div className="flex gap-8">
            {
              book.tags.map(tag => <p>{tag}</p>)
            }
          </div>
        </div>
        <hr className="pb-4" />
        <table>
          <tr>
            <td>Number of Pages: </td>
            <td className="font-semibold">{book.totalPages}</td>
          </tr>
          <tr>
            <td>Publisher: </td>
            <td className="font-semibold">{book.publisher}</td>
          </tr>
          <tr>
            <td>Year of Publishing: </td>
            <td className="font-semibold">{book.yearOfPublishing}</td>
          </tr>
          <tr>
            <td>Rating: </td>
            <td className="font-semibold">{book.rating}</td>
          </tr>
        </table>
        <div className=" flex gap-4 pt-4">
          <Link onClick={() => handleRead('read', bookId)} className="btn bg-transparent border-2 border-gray-300 ">Read</Link>
          <Link onClick={() => handleWishlist('wishlist', bookId)} className="btn bg-[#50B1C9] text-white">Wishlist</Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;