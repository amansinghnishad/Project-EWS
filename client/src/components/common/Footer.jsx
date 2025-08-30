import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";

const SocialIcon = ({ href, Icon, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700 transition"
    aria-label={alt}
  >
    <img src={Icon} className="h-4 w-4" alt="" />
  </a>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-gray-900 text-gray-300 rounded-t-[100px] mt-8 sm:mt-10 md:mt-12 lg:mt-16 mx-4 sm:mx-6 md:mx-12 lg:mx-[4.5rem] "
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold tracking-tight text-white">
              EWS
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Eklavya Welfare Society — free career guidance and development for
              students.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <SocialIcon href="#" Icon={FacebookIcon} alt="Facebook" />
              <SocialIcon href="#" Icon={TwitterIcon} alt="Twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-semibold text-white">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "hover:text-white"
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <a href="mailto:contact@ews.org" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-sm font-semibold text-white">Resources</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mentorship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-white">Get in touch</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:contact@ews.org" className="hover:text-white">
                  contact@ews.org
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-white">
                  +91 12345 67890
                </a>
              </li>
              <li>
                <span className="text-gray-400">Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 ">
          <p className="text-xs">
            &copy; {year} Eklavya Welfare Society. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
