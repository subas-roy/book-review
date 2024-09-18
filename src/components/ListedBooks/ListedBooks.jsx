import { useLoaderData } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
import WishItem from "../ListItem/wishItem";

const ListedBooks = () => {
  const books = useLoaderData();
  const storedReadBooks = localStorage.getItem('read');
  const storedWishlistBooks = localStorage.getItem('wishlist');

  const readbooks = books.filter(item => storedReadBooks.includes(item.bookId));
  const wishbooks = books.filter(item => storedWishlistBooks.includes(item.bookId));

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" defaultChecked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-sm p-6">
        {
          readbooks.map(readItem => <ListItem key={readItem.id} readItem={readItem}></ListItem>)
        }
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-sm p-6">
        {
          wishbooks.map(wishItem => <WishItem key={wishItem.id} wishItem={wishItem}></WishItem>)
        }
      </div>
    </div>
  );
};

export default ListedBooks;