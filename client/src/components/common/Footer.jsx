import React from "react";
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";

const footerLinks = {
  Solutions: [
    { title: "Marketing", path: "#" },
    { title: "Analytics", path: "#" },
    { title: "Commerce", path: "#" },
    { title: "Insights", path: "#" },
  ],
  Support: [
    { title: "Pricing", path: "#" },
    { title: "Documentation", path: "#" },
    { title: "Guides", path: "#" },
    { title: "API Status", path: "#" },
  ],
  Company: [
    { title: "About", path: "/about" },
    { title: "Blog", path: "#" },
    { title: "Jobs", path: "#" },
    { title: "Press", path: "#" },
  ],
  Legal: [
    { title: "Claim", path: "#" },
    { title: "Privacy", path: "#" },
    { title: "Terms", path: "#" },
  ],
};

const SocialIcon = ({ path, src, alt }) => (
  <a href={path} className="text-gray-400 hover:text-white">
    <span className="sr-only">{alt}</span>
    <img src={src} alt={alt} className="h-6 w-6" />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="/" className="text-2xl font-bold">
              Eklavya Welfare Society
            </a>
            <p className="text-gray-400 text-base">
              Making the web a more beautiful place.
            </p>
            <div className="flex space-x-6">
              <SocialIcon path="#" src={FacebookIcon} alt="Facebook" />
              <SocialIcon path="#" src={TwitterIcon} alt="Twitter" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Solutions.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.path}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Support.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.path}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Company.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.path}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Legal.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.path}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Eklavya Welfare Society. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
