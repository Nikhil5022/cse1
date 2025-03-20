import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 font-sans">
      {/* Hero Section - Modern Welcome with Animated Details */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient with animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-500">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block mb-4 py-2 px-4 rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-blue-600"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <span>Shaping Tomorrow's Technology Leaders</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Department of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">
              Computer Science & Engineering
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Empowering students through cutting-edge research, innovation, and
            industry-relevant education.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#programs"
              className="px-6 py-3 bg-white text-blue-900 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
            >
              Explore Programs
            </a>
            <a
              href="#research"
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-900 hover:bg-opacity-10 transition duration-300"
            >
              Research Highlights
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            y: isLoaded ? [0, 10, 0] : -10,
          }}
          transition={{
            duration: 1.5,
            delay: 1.2,
            y: { repeat: Infinity, repeatType: "loop", duration: 1.5 },
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white border-opacity-40 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission Section with Modern Cards */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative">
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vision Card */}
          <motion.div
            className="flex-1 bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden"
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
            <h2 className="text-3xl font-bold text-blue-600 flex items-center">
              <span className="mr-3 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              To be a globally recognized center of excellence in computer
              science education, fostering technological innovation, research,
              and leadership to address real-world challenges and shape the
              future of computing.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="flex-1 bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden"
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
            <h2 className="text-3xl font-bold text-indigo-600 flex items-center">
              <span className="mr-3 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </span>
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Our mission is to provide high-quality education that blends
              theoretical knowledge with practical applications, cultivate a
              research-driven environment, and develop skilled professionals who
              contribute to society through innovation, entrepreneurship, and
              ethical leadership in computing and technology.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Message from HOD - Modern Card Layout */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white bg-opacity-10 text-blue-600 text-sm font-medium mb-4">
              LEADERSHIP
            </span>
            <h2 className="text-4xl font-bold">
              Message from the Head of Department
            </h2>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full blur-md transform scale-95 opacity-50"></div>
                <img
                  src="/api/placeholder/300/300"
                  alt="HOD Portrait"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white relative z-10"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-blue-600">
                Dr. James Smith
              </h3>
              <p className="text-blue-600 mb-2">
                Professor & Head of Department
              </p>
              <p className="text-blue-600 text-lg leading-relaxed mb-6">
                "Our department is committed to empowering the next generation
                of technology leaders. We foster an environment of innovation,
                rigorous academics, and hands-on experience that prepares our
                students for the ever-evolving field of computer science. Our
                faculty's cutting-edge research and strong industry connections
                ensure that our graduates are not just participants in the
                digital revolution, but are positioned to lead it."
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 hover:scale-110 transition "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Contact
                </a>
                <a
                  href="#profile"
                  className="inline-flex items-center gap-2 text-blue-600 hover:scale-110 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                  Full Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Modern Feature Grid */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl font-bold text-slate-800">
            Excellence in Education & Research
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Our department offers a comprehensive learning experience with
            state-of-the-art facilities and world-class faculty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "World-Class Faculty",
              desc: "Learn from leading researchers and industry experts who are at the forefront of computer science innovation.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              ),
            },
            {
              title: "Cutting-Edge Research",
              desc: "Engage in groundbreaking research across AI, machine learning, cybersecurity, and emerging technologies.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              ),
            },
            {
              title: "Industry Partnerships",
              desc: "Benefit from our strong connections with leading tech companies for internships, projects, and career opportunities.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              ),
            },
            {
              title: "State-of-the-Art Facilities",
              desc: "Access to advanced computing labs, specialized research centers, and modern learning environments.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              ),
            },
            {
              title: "Innovative Curriculum",
              desc: "A dynamic curriculum that evolves with industry trends and prepares students for real-world challenges.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              ),
            },
            {
              title: "Global Opportunities",
              desc: "Collaborative programs with international universities and global tech companies for a truly global education.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
