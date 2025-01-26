import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialPinterestCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 cursor-pointer ">
      <div className="mx-40 ">
        <div className="container mx-auto px-4 ">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between">
            {/* Logo and Copyright */}
            <div className="w-full md:w-1/4 mb-6">
              <img
                className="mb-4"
                src="https://companieslogo.com/img/orig/SWIGGY.NS_BIG-f0e9f79a.png?t=1731987060"
                alt="Swiggy Logo"
                style={{ width: 150 }}
              />
              <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
            </div>

            {/* Company Section */}
            <div className="w-full sm:w-1/3 md:w-1/6 mb-6">
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Swiggy Corporate</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Dineout</li>
                <li>Swiggy Genie</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full sm:w-1/3 md:w-1/6 mb-6">
              <h3 className="text-lg font-bold mb-4">Contact us</h3>
              <ul className="space-y-2 text-sm mb-16">
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us</li>
              </ul>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
                <li>Investor Relations</li>
              </ul>
            </div>

            {/* Available Cities Section */}
            <div className="w-full sm:w-1/3 md:w-1/6 mb-6">
              <h3 className="text-lg font-bold mb-4">Available in:</h3>
              <ul className="space-y-2 text-sm">
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
              </ul>
            </div>
            {/* life at swiggy section */}
            <div className="w-full sm:w-1/3 md:w-1/6 mb-6">
              <h3 className="text-lg font-bold mb-4">Life at Swiggy</h3>
              <ul className="space-y-2 text-sm mb-8">
                <li>Explore with Swiggy</li>
                <li>Swiggy News</li>
                <li>Snackables</li>
              </ul>

              {/* Social links */}
              <h3 className="text-lg font-bold mb-4 ">Social Links</h3>
              <div className="flex space-x-2  flex-wrap items-center justify-between text-xl">
                <a href="#" className="text-gray-500 hover:text-gray-800 ">
                  <i className="fab fa-linkedin"></i><FaLinkedin />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <i className="fab fa-instagram"></i> <IoLogoInstagram />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <i className="fab fa-twitter"></i><FaTwitter />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <i className="fab fa-facebook"></i>  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <i className="fab fa-Pinterest"></i>  <TiSocialPinterestCircular />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* border */}
      <hr className='my-6 border-[1px] border-gray-500 mb-24 mt-16 mx-40' />
    </footer>
  );
};

export default Footer;
