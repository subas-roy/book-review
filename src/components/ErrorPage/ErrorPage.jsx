import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    
    <div className="text-center mt-[10%]">
      <Helmet>
      <title>Book Vibe | 404</title>
      </Helmet>
      <h2 className="text-3xl">Oops!!!</h2>
      <h2 className="text-4xl my-6">Page Not Found</h2>
      <Link className="btn rounded-full bg-[#23BE0A] text-white" to={'/'}>Back to Home</Link>
    </div>
  );
};

export default ErrorPage;