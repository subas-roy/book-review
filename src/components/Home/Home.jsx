import { Link } from "react-router-dom";
import Books from "../Books/Books";

const Home = () => {
  return (
    <>
      <div className="flex justify-around py-20 bg-[#13131310] rounded-3xl mt-4">
        <div>
          <h2 className="play-fair text-6xl">Books to freshen up <br />your bookshelf</h2>
          <Link to={"/listed-books"} className="btn bg-[#23BE0A] font-bold text-xl text-white mt-12">View The List</Link>
        </div>
        <div>
          <img src="https://ibb.co.com/4MRTBmm" alt="" />
        </div>
      </div>

      <Books></Books>
    </>
  );
};

export default Home;