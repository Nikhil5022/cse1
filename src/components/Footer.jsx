import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  // Quick links for footer
  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "Faculty", path: "/faculty" },
    { name: "Students", path: "/students" },
    { name: "Research", path: "/research" },
    { name: "Programs", path: "/programs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Resources links
  const resources = [
    { name: "Academic Calendar", path: "/calendar" },
    { name: "Course Catalog", path: "/courses" },
    { name: "Scholarships", path: "/scholarships" },
    { name: "Library Resources", path: "/library" },
    { name: "Career Services", path: "/careers" },
  ];

  // Social media icons
  const socialMedia = [
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M23.5 6.2C23.3 5.4 22.7 4.8 22 4.5C20.6 4 12 4 12 4C12 4 3.4 4 2 4.5C1.3 4.8 0.7 5.4 0.5 6.2C0.2 7.8 0 11 0 11C0 11 0.2 14.2 0.5 15.8C0.7 16.6 1.3 17.2 2 17.5C3.4 18 12 18 12 18C12 18 20.6 18 22 17.5C22.7 17.2 23.3 16.6 23.5 15.8C23.8 14.2 24 11 24 11C24 11 23.8 7.8 23.5 6.2Z" />
          <path d="M9.6 14.4L15.6 11L9.6 7.6V14.4Z" fill="white" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "GitHub",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      url: "#",
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Department Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg mr-3 bg-blue-600 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-base sm:text-lg text-blue-900">
                  CS&E Department
                </h2>
                <p className="text-xs sm:text-sm font-medium text-blue-600">
                  Excellence in Computing
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our department is committed to advancing the field of computer science through innovative research, exceptional education, and community engagement.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-800 mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm sm:text-base text-semibold-800 mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.path}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-800 mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Computer Science Building<br />
                  123 University Avenue, Campus 12345
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p className="text-xs sm:text-sm text-slate-600">(555) 123-4567</p>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:cs@university.edu"
                  className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-300"
                >
                  cs@university.edu
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 mr-2 sm:mr-3 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mon-Fri: 8AM-5PM<br />
                  Sat: 9AM-1PM, Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-50 border-t border-slate-200 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} CS&E Department. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 text-xs sm:text-sm">
            <Link
              to="/privacy-policy"
              className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/accessibility"
              className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;