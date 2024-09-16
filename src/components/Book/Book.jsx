import { Link } from "react-router-dom";

const Book = ({book}) => {
  const {bookId, image, bookName, author, category, rating, tags} = book;
  
  return (
    <div className="card bg-base-100 shadow-md px-6 pt-6 border">
      <Link to={`/book-details/${bookId}`}>
        <figure className="grow bg-[#F3F3F3] rounded-xl p-6">
          <img width="134px"
            src={image}
            alt="Book" />
        </figure>
        <div className="card-body flex-none px-0">
          <div className="flex justify-between">
          {
            tags.map(tag => <p>{tag}</p>)
          }
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <hr />
          <div className="flex justify-between">
            <span>{category}</span>
            <span>{rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;