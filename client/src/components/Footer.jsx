import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Footer = () => {
  return (
    <BrowserRouter>
      <footer className="bg-black text-white">
        {/* Top Section */}
        <div className="bg-green-600 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h6 className="text-white">
                Get connected with us on social networks!
              </h6>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link to="/" className="text-white hover:text-green-600">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/" className="text-white hover:text-green-600">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="/" className="text-white hover:text-green-600">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to="/" className="text-white hover:text-green-600">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="/" className="text-white hover:text-green-600">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
          {/* About */}
          <div className="text-gray-400">
            <h6 className="text-lg font-semibold uppercase mb-2">
              KRISHI SATHI
            </h6>
            <hr className="border-t-2 border-green-600 mb-4" />
            <p>
              Krishi Sathi is a digital platform that empowers farmers by
              connecting them directly with buyers, suppliers, and stakeholders,
              ensuring fair prices and eliminating intermediaries in the
              agricultural supply chain.
            </p>
          </div>

          {/* Links */}
          <div className="text-gray-400">
            <h6 className="text-lg font-semibold uppercase mb-2">Links</h6>
            <hr className="border-t-2 border-green-600 mb-4" />
            <p>
              <Link to="/farmer" className="hover:text-green-600">
                Farmer
              </Link>
            </p>
            <p>
              <Link to="/consumer" className="hover:text-green-600">
                Consumer
              </Link>
            </p>
            <p>
              <Link to="/supplier" className="hover:text-green-600">
                Supplier
              </Link>
            </p>
            <p>
              <Link to="/cart" className="hover:text-green-600">
                Cart
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div className="text-gray-400">
            <h6 className="text-lg font-semibold uppercase mb-2">Contact</h6>
            <hr className="border-t-2 border-green-600 mb-4" />
            <p>
              <i className="fa fa-home mr-3"></i> Janakpur,Nepal
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i> ram@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3"></i> +977 98 XXXXXXX
            </p>
            <p>
              <i className="fa fa-print mr-3"></i> +977 98 XXXXXXX
            </p>
          </div>

          {/* Get in Touch */}
          <div className="text-gray-400">
            <h6 className="text-lg font-semibold uppercase mb-2">
              Get in Touch
            </h6>
            <hr className="border-t-2 border-green-600 mb-4" />
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="comment" className="block text-sm mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  placeholder="Write Your Thoughts"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-black text-center py-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Copyright:All Rights Reserved.
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default Footer;
