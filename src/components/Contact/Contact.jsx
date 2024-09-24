import { Helmet } from "react-helmet-async";
// import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  return (
    <div>
      <Helmet>
        <title>Book Vibe | Contact</title>
      </Helmet>
      <div className="flex justify-around items-center py-6 bg-[#13131310] rounded-3xl">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>

      {/* <div style={{ height: '500px', width: '500px%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div> */}

      <section class="bg-white py-12">
        <div class="container mx-auto px-4">
          <div class="text-center">
            {/* <h2 class="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2> */}
            <p class="text-lg text-gray-600 mb-8">
              Have questions, feedback, or just want to say hello? We’d love to hear from you! Reach out to us using the form below or through our email and social media channels.
            </p>
          </div>

          <div class="max-w-xl mx-auto">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name" />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com" />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your message..."></textarea>
              </div>

              <div class="text-center">
                <button type="submit" class="inline-block px-8 py-3 bg-[#23BE0A] text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div class="text-center mt-12">
            <p class="text-lg text-gray-600">Or reach us directly at:</p>
            <p class="text-lg font-semibold text-gray-800 mt-2">support@bookvibe.com</p>
            
            <div class="flex justify-center space-x-6 mt-6">
              {/* <!-- Social media icons (replace # with actual links) --> */}
              <a href="#" class="text-gray-600 hover:text-blue-500 transition">
                <span class="sr-only">Facebook</span>
                {/* <!-- Facebook icon (SVG) --> */}
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495V14.709h-3.13v-3.63h3.13V8.414c0-3.1 1.893-4.79 4.657-4.79 1.325 0 2.463.1 2.794.144v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.63h-3.12V24h6.117c.73 0 1.324-.593 1.324-1.325V1.325C24 .593 23.406 0 22.675 0z"/></svg>
              </a>

              <a href="#" class="text-gray-600 hover:text-blue-500 transition">
                <span class="sr-only">Twitter</span>
                {/* <!-- Twitter icon (SVG) --> */}
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.933 4.933 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.92 4.92 0 0016.616 3c-2.737 0-4.958 2.222-4.958 4.959 0 .39.043.765.127 1.124C7.691 8.803 4.066 6.859 1.64 3.924a4.93 4.93 0 00-.669 2.492c0 1.721.875 3.24 2.206 4.132a4.908 4.908 0 01-2.248-.621v.062c0 2.403 1.71 4.408 3.977 4.864a4.937 4.937 0 01-2.241.085 4.928 4.928 0 004.604 3.418A9.867 9.867 0 010 21.54a13.938 13.938 0 007.548 2.212c9.056 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/></svg>
              </a>

              <a href="#" class="text-gray-600 hover:text-blue-500 transition">
                <span class="sr-only">Instagram</span>
                {/* <!-- Instagram icon (SVG) --> */}
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.976.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.976-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.976-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.517 2.495 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.342 0 7.052.052 5.762.104 4.509.326 3.444 1.391 2.378 2.457 2.156 3.71 2.104 5c-.052 1.29-.052 1.704-.052 5.948s0 4.658.052 5.948c.052 1.29.274 2.543 1.34 3.608 1.065 1.066 2.318 1.288 3.608 1.34 1.29.052 1.704.052 5.948.052s4.658 0 5.948-.052c1.29-.052 2.543-.274 3.608-1.34 1.066-1.065 1.288-2.318 1.34-3.608.052-1.29.052-1.704.052-5.948s0-4.658-.052-5.948c-.052-1.29-.274-2.543-1.34-3.608C19.457.326 18.204.104 16.914.052 15.624 0 15.21 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.838 3.838 0 110-7.676 3.838 3.838 0 010 7.676zm6.406-11.31a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;