import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Programs() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Club data
  const clubInfo = {
    name: "Tech Innovators Club",
    description:
      "The Tech Innovators Club is a vibrant community of students passionate about technology, innovation, and collaboration. We organize workshops, hackathons, and tech talks to foster skill development and networking among aspiring technologists.",
    founded: "2018",
    members: "150+",
    mission:
      "Empowering students to explore cutting-edge technologies and turn their ideas into impactful solutions.",
  };

  // Recent events data (timeline)
  const events = [
    {
      id: 1,
      title: "Hackathon 2024: CodeStorm",
      date: "February 15, 2024",
      description:
        "A 24-hour coding challenge where teams developed innovative solutions for real-world problems. Over 50 participants showcased their skills.",
      type: "Hackathon",
    },
    {
      id: 2,
      title: "AI Workshop Series",
      date: "January 20-22, 2024",
      description:
        "A three-day workshop on Artificial Intelligence, covering machine learning basics, neural networks, and practical applications.",
      type: "Workshop",
    },
    {
      id: 3,
      title: "Tech Talk: Future of Blockchain",
      date: "December 10, 2023",
      description:
        "An insightful session with industry experts discussing blockchain trends and career opportunities in the field.",
      type: "Tech Talk",
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      date: "November 5-6, 2023",
      description:
        "A hands-on bootcamp teaching modern web development with React, Node.js, and Tailwind CSS.",
      type: "Workshop",
    },
    {
      id: 5,
      title: "Tech Trivia Night",
      date: "October 25, 2023",
      description:
        "A fun-filled evening of tech-related trivia, bringing together students for friendly competition and networking.",
      type: "Social Event",
    },
  ];

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 font-sans mt-10">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-500">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          ></div>
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {clubInfo.name}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {clubInfo.mission}
          </motion.p>
        </motion.div>
      </section>

      {/* Club Introduction Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 md:mb-6">About Our Club</h2>
          <p className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">{clubInfo.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-500 uppercase font-medium mb-1">Founded</p>
              <p className="text-xl font-medium text-slate-800">{clubInfo.founded}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-500 uppercase font-medium mb-1">Members</p>
              <p className="text-xl font-medium text-slate-800">{clubInfo.members}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Events Timeline Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3 md:mb-4">
            CLUB ACTIVITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 md:mb-3">Recent Events</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            A timeline of our latest club events and activities
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="relative hidden md:block">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={`mb-12 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <div
                className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-between'}`}>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Hackathon'
                          ? 'bg-green-100 text-green-800'
                          : event.type === 'Workshop'
                          ? 'bg-blue-100 text-blue-800'
                          : event.type === 'Tech Talk'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-amber-100 text-amber-800'
                      } ${index % 2 === 0 ? 'order-1 ml-2' : ''}`}
                    >
                      {event.type}
                    </span>
                    <span className={`text-sm text-slate-500 ${index % 2 === 0 ? 'order-0' : ''}`}>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-3 border-white shadow-md"></div>
            </motion.div>
          ))}
        </div>

        {/* Timeline - Mobile */}
        <div className="md:hidden">
          {/* Vertical line */}

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative pl-12 mb-8 pb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-30px' }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
              
              <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Hackathon'
                        ? 'bg-green-100 text-green-800'
                        : event.type === 'Workshop'
                        ? 'bg-blue-100 text-blue-800'
                        : event.type === 'Tech Talk'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {event.type}
                  </span>
                  <span className="text-sm text-slate-500">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{event.title}</h3>
                <p className="text-sm text-slate-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      
    </div>
  );
}

export default Programs;