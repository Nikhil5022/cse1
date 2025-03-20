import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Development team members
  const teamMembers = [
    {
      name: "Jane Cooper",
      role: "Lead Developer",
      image: "/api/placeholder/300/300",
      bio: "Full-stack developer with expertise in React and modern web technologies. Passionate about creating elegant, user-friendly interfaces.",
    },
    {
      name: "Alex Morgan",
      role: "UI/UX Designer",
      image: "/api/placeholder/300/300",
      bio: "Creative designer focused on building intuitive user experiences. Combines aesthetic sensibility with practical usability principles.",
    },
    {
      name: "Sam Wilson",
      role: "Backend Developer",
      image: "/api/placeholder/300/300",
      bio: "Database and systems architecture specialist. Ensures robust performance and scalability across all department applications.",
    },
  ];

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 font-sans">
      {/* Header Section */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
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

        {/* Header content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About Our Department
          </motion.h1>
        </motion.div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
          <h2 className="text-3xl font-bold text-blue-600 flex items-center mb-6">
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
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </span>
            Why This Website Exists
          </h2>
          
          <div className="space-y-4 text-lg text-slate-700">
            <p>
              This website serves as the digital hub for our Computer Science & Engineering Department, created with a three-fold purpose:
            </p>
            
            <motion.div 
              className="pl-6 border-l-4 border-blue-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-medium text-blue-800">Information Gateway</p>
              <p>Providing comprehensive, up-to-date information about our academic programs, research initiatives, faculty expertise, and department events to students, faculty, industry partners, and the wider academic community.</p>
            </motion.div>
            
            <motion.div 
              className="pl-6 border-l-4 border-indigo-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="font-medium text-indigo-800">Student Resource</p>
              <p>Offering valuable resources to current and prospective students, including curriculum details, research opportunities, internship connections, and insights into student life within our department.</p>
            </motion.div>
            
            <motion.div 
              className="pl-6 border-l-4 border-blue-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="font-medium text-blue-800">Showcase of Excellence</p>
              <p>Highlighting our department's achievements, innovative research projects, faculty accomplishments, and student success stories to demonstrate our commitment to excellence in computer science education and research.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Development Team Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto  ">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            OUR TEAM
          </span>
          <h2 className="text-4xl font-bold text-slate-800">
            Meet The Development Team
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            The talented individuals who brought this platform to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="relative h-64 bg-gradient-to-r from-blue-500 to-indigo-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
                <div className="mt-6 flex justify-center space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    
    </div>
  );
}

export default AboutUs;