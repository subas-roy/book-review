import { Link } from "react-router-dom";
import Books from "../Books/Books";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Book Vibe | Home</title>
      </Helmet>
      <div className="flex justify-around items-center py-12 bg-[#13131310] rounded-3xl">
        <div>
          <h2 className="play-fair text-5xl md:text-6xl">Books to freshen up <br />your bookshelf</h2>
          <Link to={"/listed-books"} className="btn bg-[#23BE0A] font-bold text-xl text-white mt-12">View The List</Link>
        </div>
        <div>
          <img src="https://i.ibb.co.com/LZMMHkB/banner-Image.png" alt="" />
        </div>
      </div>
      <Books></Books>
    </>
  );
};

export default Home;