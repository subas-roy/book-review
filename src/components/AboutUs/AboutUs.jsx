import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Book Review | About Us</title>
      </Helmet>
      <div className="flex justify-around items-center py-6 bg-[#13131310] rounded-3xl">
        <h1 className="text-3xl font-bold">About Us</h1>
      </div>
      
    </div>
  );
};

export default AboutUs;