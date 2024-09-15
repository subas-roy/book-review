
const Book = ({book}) => {
  const {image, bookName, author, category, rating, tags} = book;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Book" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
        {
          tags.map(tag => <p>{tag}</p>)
        }
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex justify-between">
          <span>{category}</span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;