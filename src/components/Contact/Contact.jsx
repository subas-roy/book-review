import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Book Review | Contact</title>
      </Helmet>
      <div className="flex justify-around items-center py-6 bg-[#13131310] rounded-3xl">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
    </div>
  );
};

export default Contact;