import { Link } from "react-router-dom";

const ListItem = ({readItem}) => {
  const {bookId, bookName, image, author, totalPages, category, tags, publisher, yearOfPublishing, rating} = readItem;
  return (
    <div className="grid grid-cols-4 gap-8 border p-4 rounded-xl my-5">
      <div className="col-span-1">
        <img className="p-6 bg-[#F3F3F3] rounded-xl" src={image} alt="" />
      </div>
      <div className="col-span-3">
        <h2 className="font-bold text-xl play-fair">{bookName}</h2>
        <p className="font-medium">By : {author}</p>
        <div className="flex items-center">
          <b className="font-bold py-4 mr-4">Tags: </b>
          <div className="flex gap-8 items-center">
            {
              tags.map(tag => <p className="text-[#23BE0A] bg-[#22be0a10] px-4 py-2 rounded-full">{tag}</p>)
            }
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-10">
          <p>Publisher: {publisher}</p>
          <p>Page {totalPages}</p>
        </div>
        <hr className="my-4" />
        <div className="flex gap-10 items-center">
          <p className="px-4 py-2 rounded-full bg-[#328eff15]">Category: {category}</p>
          <p className="px-4 py-2 rounded-full bg-[#ffad3331]">Rating: {rating}</p>
          <Link to={`/book-details/${bookId}`} className="btn bg-[#23BE0A] text-white rounded-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ListItem;