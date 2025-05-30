import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="py-20 bg-neutral-800 text-white">
        <section className="w-11/12 mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo + Description */}
            <div>
              <div className="flex items-center space-x-2">
                <Link to="/" className="text-2xl font-bold text-green-700">
                  GardenGlee
                </Link>
              </div>
              <p className="pt-4">
                Tips, Tools & a Thriving Gardening Community!
              </p>
            </div>

            {/* Internal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link>Terms of Service</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Developer Resources</Link>
                </li>
              </ul>
            </div>

            {/* Social Media - External */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook className="w-6 h-6 hover:text-primary" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter className="w-6 h-6 hover:text-primary" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub className="w-6 h-6 hover:text-gray-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="w-6 h-6 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* Bottom Line */}
      <div className=" text-center text-sm text-white bg-black py-4">
        &copy; {new Date().getFullYear()} GardenGlee, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
