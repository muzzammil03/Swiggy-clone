import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialPinterestCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 cursor-pointer">
      <div className="px-4 sm:px-8 lg:px-40">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 text-center lg:text-left">
            {/* Logo and Copyright */}
            <div className="lg:col-span-1">
              <img
                className="mx-auto lg:mx-0 mb-4"
                src="https://companieslogo.com/img/orig/SWIGGY.NS_BIG-f0e9f79a.png?t=1731987060"
                alt="Swiggy Logo"
                style={{ width: 150 }}
              />
              <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
            </div>

            {/* Company Section */}
            <div>
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
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm mb-4">
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
            <div>
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

            {/* Life at Swiggy & Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Life at Swiggy</h3>
              <ul className="space-y-2 text-sm mb-6">
                <li>Explore with Swiggy</li>
                <li>Swiggy News</li>
                <li>Snackables</li>
              </ul>

              {/* Social Links */}
              <h3 className="text-lg font-bold mb-4">Social Links</h3>
              <div className="flex space-x-3 justify-center lg:justify-start">
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <IoLogoInstagram size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <TiSocialPinterestCircular size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Border */}
      <hr className="my-6 border-[1px] border-gray-500 mb-12 mx-4 sm:mx-8 lg:mx-40" />
    </footer>
  );
};

export default Footer;
