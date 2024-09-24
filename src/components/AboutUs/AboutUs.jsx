import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Book Vibe | About Us</title>
      </Helmet>
      <div className="flex justify-around items-center py-6 bg-[#13131310] rounded-3xl">
        <h1 className="text-3xl font-bold">About Us</h1>
      </div>
      <section class=" py-12">
        <div class="container mx-auto px-4">
          <div class="text-center">
            {/* <h1 class="text-4xl font-bold text-gray-800 mb-6">About Us</h1> */}
            <p class="text-lg text-gray-600 mb-8">
              Welcome to <span class="font-semibold text-gray-800">Book Vibe</span>, your personal hub for everything books! Whether you're an avid reader, casual explorer, or just starting your literary journey, we’ve designed a space where you can effortlessly track the books you've read, create personalized reading lists, and organize your ultimate book wishlists.
            </p>
          </div>

          <div class="text-center">
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p class="text-lg text-gray-600 mb-8">
              We’re dedicated to making reading more engaging and interactive. From fiction and fantasy to non-fiction and memoirs, we provide a user-friendly platform for you to:
            </p>

            <div class="max-w-3xl mx-auto space-y-4 text-left">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <span class="inline-block h-8 w-8 text-blue-500">
                    {/* <!-- Insert an icon here if needed --> */}
                    📚
                  </span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800">List Books You’ve Read</h3>
                  <p class="text-gray-600">Keep track of everything you’ve enjoyed, from the classics to contemporary bestsellers.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <span class="inline-block h-8 w-8 text-blue-500">
                    {/* <!-- Insert an icon here if needed --> */}
                    📝
                  </span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800">Create Wishlists</h3>
                  <p class="text-gray-600">Save books you want to read next, so you’ll never lose track of recommendations and new releases.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <span class="inline-block h-8 w-8 text-blue-500">
                    {/* <!-- Insert an icon here if needed --> */}
                    🔍
                  </span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800">Discover New Reads</h3>
                  <p class="text-gray-600">Get personalized book suggestions based on your reading history and preferences.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul class="list-inside list-disc text-left max-w-2xl mx-auto text-lg text-gray-600 space-y-2">
              <li><span class="font-semibold text-gray-800">Simple & Intuitive:</span> Easily add books, manage your lists, and explore new recommendations in just a few clicks.</li>
              <li><span class="font-semibold text-gray-800">Community-Driven:</span> Engage with other readers, share recommendations, and explore reviews from book lovers around the world.</li>
              <li><span class="font-semibold text-gray-800">Comprehensive Database:</span> From niche authors to popular titles, we’ve got a vast collection of books to choose from.</li>
            </ul>
          </div>

          <div class="text-center mt-12">
            <a href="#" class="inline-block px-8 py-3 bg-[#23BE0A] text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition">
              Join Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;