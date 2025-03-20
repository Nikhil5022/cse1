import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function StudentsCorner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSemester, setActiveSemester] = useState(1);
  const [activeSubject, setActiveSubject] = useState(null);
  
  useEffect(() => {
    setIsLoaded(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  }, []);

  // All semesters data with subjects and resources
  const semestersData = [
    {
      id: 1,
      name: "Semester 1",
      subjects: [
        {
          id: "cs101",
          name: "Introduction to Programming",
          description: "Fundamentals of programming using C/C++, covering variables, control structures, functions, and basic data structures.",
          resources: [
            { type: "Textbook", name: "C Programming Language", author: "Brian Kernighan & Dennis Ritchie", link: "https://www.youtube.com/" },
            { type: "Online Course", name: "CS50: Introduction to Computer Science", platform: "edX", link: "#" },
            { type: "Video Lectures", name: "Programming Methodology", platform: "Stanford University", link: "#" }
          ]
        },
        {
          id: "cs102",
          name: "Mathematics for Computer Science I",
          description: "Discrete mathematics, logic, set theory, and mathematical reasoning for computer science applications.",
          resources: [
            { type: "Textbook", name: "Discrete Mathematics and Its Applications", author: "Kenneth Rosen", link: "#" },
            { type: "Online Resource", name: "MIT OpenCourseWare: Mathematics for Computer Science", link: "#" },
            { type: "Practice Problems", name: "Brilliant.org - Discrete Math", link: "#" }
          ]
        },
        {
          id: "cs103",
          name: "Digital Logic Design",
          description: "Boolean algebra, logic gates, digital circuits, and combinational logic design.",
          resources: [
            { type: "Textbook", name: "Digital Design", author: "Morris Mano & Michael Ciletti", link: "#" },
            { type: "Simulation Tool", name: "Logic.ly - Digital Logic Simulator", link: "#" },
            { type: "Tutorial Series", name: "Neso Academy Digital Logic Design", platform: "YouTube", link: "#" }
          ]
        },
        {
          id: "cs104",
          name: "Introduction to Computer Systems",
          description: "Computer organization, hardware components, memory hierarchy, and basic operating system concepts.",
          resources: [
            { type: "Textbook", name: "Computer Organization and Design", author: "Patterson & Hennessy", link: "#" },
            { type: "Online Course", name: "Computer Architecture", platform: "Coursera", link: "#" },
            { type: "Interactive Tool", name: "CPU Sim", link: "#" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Semester 2",
      subjects: [
        {
          id: "cs201",
          name: "Data Structures",
          description: "Advanced data structures including lists, stacks, queues, trees, and graphs with implementation in C++/Java.",
          resources: [
            { type: "Textbook", name: "Data Structures and Algorithm Analysis in C++", author: "Mark Allen Weiss", link: "#" },
            { type: "Online Course", name: "Data Structures", platform: "Coursera", link: "#" },
            { type: "Visualization Tool", name: "VisuAlgo - Data Structure Visualizations", link: "#" }
          ]
        },
        {
          id: "cs202",
          name: "Object-Oriented Programming",
          description: "OOP concepts including classes, objects, inheritance, polymorphism, and encapsulation using Java.",
          resources: [
            { type: "Textbook", name: "Thinking in Java", author: "Bruce Eckel", link: "#" },
            { type: "Tutorial", name: "Oracle Java Tutorials", link: "#" },
            { type: "Practice Platform", name: "Codingbat Java", link: "#" }
          ]
        },
        {
          id: "cs203",
          name: "Mathematics for Computer Science II",
          description: "Probability, statistics, linear algebra, and numerical methods for computer science applications.",
          resources: [
            { type: "Textbook", name: "Mathematics for Computer Science", author: "Eric Lehman, F Thomson Leighton, Albert R Meyer", link: "#" },
            { type: "Interactive Tool", name: "Khan Academy Linear Algebra", link: "#" },
            { type: "Online Course", name: "Probability for Computer Scientists", platform: "edX", link: "#" }
          ]
        },
        {
          id: "cs204",
          name: "Web Development Fundamentals",
          description: "HTML, CSS, JavaScript, and basic web technologies for creating interactive websites.",
          resources: [
            { type: "Resource", name: "MDN Web Docs", link: "#" },
            { type: "Interactive Course", name: "freeCodeCamp Web Responsive Design", link: "#" },
            { type: "Practice Platform", name: "Frontend Mentor", link: "#" }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Semester 3",
      subjects: [
        {
          id: "cs301",
          name: "Algorithms",
          description: "Design and analysis of algorithms, computational complexity, and optimization techniques.",
          resources: [
            { type: "Textbook", name: "Introduction to Algorithms", author: "Cormen, Leiserson, Rivest, Stein", link: "#" },
            { type: "Online Course", name: "Algorithms Specialization", platform: "Coursera", link: "#" },
            { type: "Visualization", name: "Algorithm Visualizer", link: "#" }
          ]
        },
        {
          id: "cs302",
          name: "Database Systems",
          description: "Relational database design, SQL, normalization, and database management systems.",
          resources: [
            { type: "Textbook", name: "Database System Concepts", author: "Silberschatz, Korth, Sudarshan", link: "#" },
            { type: "Tutorial", name: "SQL Tutorial", platform: "W3Schools", link: "#" },
            { type: "Practice", name: "SQLZoo", link: "#" }
          ]
        },
        {
          id: "cs303",
          name: "Operating Systems",
          description: "Process management, memory management, file systems, and concurrency control.",
          resources: [
            { type: "Textbook", name: "Operating System Concepts", author: "Silberschatz, Galvin, Gagne", link: "#" },
            { type: "Online Course", name: "Introduction to Operating Systems", platform: "Udacity", link: "#" },
            { type: "Hands-on", name: "OS Development Tutorial", link: "#" }
          ]
        },
        {
          id: "cs304",
          name: "Software Engineering",
          description: "Software development lifecycle, requirements engineering, design patterns, and testing methodologies.",
          resources: [
            { type: "Textbook", name: "Software Engineering: A Practitioner's Approach", author: "Roger Pressman", link: "#" },
            { type: "Guide", name: "The Mythical Man-Month", author: "Frederick Brooks", link: "#" },
            { type: "Tool", name: "GitHub Student Developer Pack", link: "#" }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Semester 4",
      subjects: [
        {
          id: "cs401",
          name: "Computer Networks",
          description: "Network architectures, protocols, TCP/IP model, and network security fundamentals.",
          resources: [
            { type: "Textbook", name: "Computer Networking: A Top-Down Approach", author: "Kurose & Ross", link: "#" },
            { type: "Course", name: "The Bits and Bytes of Computer Networking", platform: "Coursera", link: "#" },
            { type: "Lab Tool", name: "Cisco Packet Tracer", link: "#" }
          ]
        },
        {
          id: "cs402",
          name: "Artificial Intelligence",
          description: "Intelligent agents, search algorithms, knowledge representation, and machine learning basics.",
          resources: [
            { type: "Textbook", name: "Artificial Intelligence: A Modern Approach", author: "Russell & Norvig", link: "#" },
            { type: "Course", name: "AI For Everyone", platform: "Coursera", link: "#" },
            { type: "Interactive Tool", name: "AI Experiments by Google", link: "#" }
          ]
        },
        {
          id: "cs403",
          name: "Theory of Computation",
          description: "Formal languages, automata theory, computability, and complexity theory.",
          resources: [
            { type: "Textbook", name: "Introduction to the Theory of Computation", author: "Michael Sipser", link: "#" },
            { type: "Video Lectures", name: "Theory of Computation", platform: "MIT OCW", link: "#" },
            { type: "Practice Problems", name: "Automata Tutor", link: "#" }
          ]
        },
        {
          id: "cs404",
          name: "Advanced Web Development",
          description: "Full-stack web development using modern frameworks, RESTful APIs, and database integration.",
          resources: [
            { type: "Textbook", name: "Web Development with Node and Express", author: "Ethan Brown", link: "#" },
            { type: "Course", name: "The Complete Web Developer Course", platform: "Udemy", link: "#" },
            { type: "Documentation", name: "React.js Docs", link: "#" }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Semester 5",
      subjects: [
        {
          id: "cs501",
          name: "Machine Learning",
          description: "Supervised and unsupervised learning algorithms, neural networks, and model evaluation.",
          resources: [
            { type: "Textbook", name: "Pattern Recognition and Machine Learning", author: "Christopher Bishop", link: "#" },
            { type: "Course", name: "Machine Learning", platform: "Coursera", link: "#" },
            { type: "Library", name: "Scikit-learn Documentation", link: "#" }
          ]
        },
        {
          id: "cs502",
          name: "Computer Graphics",
          description: "2D and 3D rendering, geometric transformations, and graphics programming.",
          resources: [
            { type: "Textbook", name: "Computer Graphics: Principles and Practice", author: "Hughes, et al.", link: "#" },
            { type: "Tutorial", name: "WebGL Fundamentals", link: "#" },
            { type: "Library", name: "Three.js Documentation", link: "#" }
          ]
        },
        {
          id: "cs503",
          name: "Compiler Design",
          description: "Lexical analysis, parsing, semantic analysis, and code generation for programming languages.",
          resources: [
            { type: "Textbook", name: "Compilers: Principles, Techniques, and Tools", author: "Aho, Lam, Sethi, Ullman", link: "#" },
            { type: "Course", name: "Compiler Design", platform: "Stanford Online", link: "#" },
            { type: "Tool", name: "ANTLR: Parser Generator", link: "#" }
          ]
        },
        {
          id: "cs504",
          name: "Information Security",
          description: "Cryptography, network security, secure coding practices, and ethical hacking.",
          resources: [
            { type: "Textbook", name: "Cryptography and Network Security", author: "William Stallings", link: "#" },
            { type: "Course", name: "Introduction to Cybersecurity", platform: "edX", link: "#" },
            { type: "Practice Platform", name: "Hack The Box", link: "#" }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Semester 6",
      subjects: [
        {
          id: "cs601",
          name: "Cloud Computing",
          description: "Cloud service models, virtualization, containerization, and distributed systems.",
          resources: [
            { type: "Textbook", name: "Cloud Computing: Concepts, Technology & Architecture", author: "Thomas Erl", link: "#" },
            { type: "Course", name: "Cloud Computing Specialization", platform: "Coursera", link: "#" },
            { type: "Hands-on", name: "AWS Free Tier", link: "#" }
          ]
        },
        {
          id: "cs602",
          name: "Big Data Analytics",
          description: "Large-scale data processing, MapReduce, Hadoop ecosystem, and analytics techniques.",
          resources: [
            { type: "Textbook", name: "Mining of Massive Datasets", author: "Leskovec, Rajaraman, Ullman", link: "#" },
            { type: "Course", name: "Big Data Specialization", platform: "Coursera", link: "#" },
            { type: "Framework", name: "Apache Spark Documentation", link: "#" }
          ]
        },
        {
          id: "cs603",
          name: "Mobile Application Development",
          description: "Cross-platform and native mobile app development for iOS and Android.",
          resources: [
            { type: "Textbook", name: "Head First Android Development", author: "Dawn Griffiths & David Griffiths", link: "#" },
            { type: "Course", name: "iOS Development", platform: "Udacity", link: "#" },
            { type: "Framework", name: "React Native Documentation", link: "#" }
          ]
        },
        {
          id: "cs604",
          name: "Software Project Management",
          description: "Project planning, risk management, agile methodologies, and team coordination.",
          resources: [
            { type: "Textbook", name: "Agile Project Management with Scrum", author: "Ken Schwaber", link: "#" },
            { type: "Course", name: "Software Project Management", platform: "edX", link: "#" },
            { type: "Tool", name: "Jira Software Tutorials", link: "#" }
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Semester 7",
      subjects: [
        {
          id: "cs701",
          name: "Deep Learning",
          description: "Neural network architectures, convolutional networks, recurrent networks, and deep reinforcement learning.",
          resources: [
            { type: "Textbook", name: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio & Aaron Courville", link: "#" },
            { type: "Course", name: "Deep Learning Specialization", platform: "Coursera", link: "#" },
            { type: "Framework", name: "TensorFlow Documentation", link: "#" }
          ]
        },
        {
          id: "cs702",
          name: "Natural Language Processing",
          description: "Text processing, language modeling, sentiment analysis, and machine translation.",
          resources: [
            { type: "Textbook", name: "Speech and Language Processing", author: "Jurafsky & Martin", link: "#" },
            { type: "Course", name: "NLP with Deep Learning", platform: "Stanford Online", link: "#" },
            { type: "Library", name: "NLTK Documentation", link: "#" }
          ]
        },
        {
          id: "cs703",
          name: "Internet of Things",
          description: "Embedded systems, sensor networks, IoT protocols, and smart applications.",
          resources: [
            { type: "Textbook", name: "Designing the Internet of Things", author: "Adrian McEwen & Hakim Cassimally", link: "#" },
            { type: "Course", name: "Introduction to the Internet of Things and Embedded Systems", platform: "Coursera", link: "#" },
            { type: "Hardware", name: "Arduino Projects Book", link: "#" }
          ]
        },
        {
          id: "cs704",
          name: "Capstone Project I",
          description: "First phase of the final year project involving problem identification, requirements analysis, and design.",
          resources: [
            { type: "Guide", name: "How to Write a Project Proposal", link: "#" },
            { type: "Template", name: "Software Requirements Specification Template", link: "#" },
            { type: "Tool", name: "GitHub Project Management", link: "#" }
          ]
        }
      ]
    },
    {
      id: 8,
      name: "Semester 8",
      subjects: [
        {
          id: "cs801",
          name: "Blockchain Technology",
          description: "Distributed ledger technology, smart contracts, cryptocurrencies, and blockchain applications.",
          resources: [
            { type: "Textbook", name: "Mastering Blockchain", author: "Imran Bashir", link: "#" },
            { type: "Course", name: "Blockchain Fundamentals", platform: "Udacity", link: "#" },
            { type: "Development", name: "Ethereum Developer Resources", link: "#" }
          ]
        },
        {
          id: "cs802",
          name: "Quantum Computing",
          description: "Quantum mechanics basics, quantum algorithms, and quantum programming frameworks.",
          resources: [
            { type: "Textbook", name: "Quantum Computing for Computer Scientists", author: "Yanofsky & Mannucci", link: "#" },
            { type: "Course", name: "Quantum Computing", platform: "edX", link: "#" },
            { type: "Framework", name: "Qiskit Documentation", link: "#" }
          ]
        },
        {
          id: "cs803",
          name: "Ethics in Computing",
          description: "Professional ethics, privacy issues, intellectual property, and societal impact of technology.",
          resources: [
            { type: "Textbook", name: "Ethics in the Age of Information Technology", author: "Richard Spinello", link: "#" },
            { type: "Course", name: "Ethics, Technology and Engineering", platform: "Coursera", link: "#" },
            { type: "Resource", name: "ACM Code of Ethics and Professional Conduct", link: "#" }
          ]
        },
        {
          id: "cs804",
          name: "Capstone Project II",
          description: "Implementation, testing, and presentation of the final year project.",
          resources: [
            { type: "Guide", name: "How to Document Software Projects", link: "#" },
            { type: "Template", name: "Software Testing Documentation", link: "#" },
            { type: "Resource", name: "Effective Technical Presentations", link: "#" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 font-sans">
      {/* Header Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        {/* Background gradient with animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800">
          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", 
                       backgroundSize: "30px 30px"}}></div>
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
            <span>Your Academic Journey</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Students Corner
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Access your complete semester syllabus and curated learning resources.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.h2 
            className="text-3xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Semester Syllabus
          </motion.h2>
          
          {/* Semester Tabs */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {semestersData.map((semester) => (
              <button
                key={semester.id}
                onClick={() => setActiveSemester(semester.id)}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  activeSemester === semester.id
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-blue-200 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {semester.name}
              </button>
            ))}
          </motion.div>
          
          {/* Active Semester Content */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
            {/* Subjects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {semestersData.find(s => s.id === activeSemester)?.subjects.map((subject, index) => (
                <motion.div 
                  key={subject.id}
                  className={`p-6 rounded-xl border transition duration-300 cursor-pointer ${
                    activeSubject === subject.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-blue-200 hover:bg-slate-50"
                  }`}
                  onClick={() => setActiveSubject(activeSubject === subject.id ? null : subject.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{subject.name}</h3>
                  <p className="text-slate-600 mb-4">{subject.description}</p>
                  
                  {activeSubject === subject.id && (
                    <motion.div 
                      className="mt-4 bg-white rounded-lg border border-slate-200 p-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="font-bold text-blue-600 mb-3">Learning Resources</h4>
                      <ul className="space-y-3">
                        {subject.resources.map((resource, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-blue-100 p-1 rounded text-blue-600 mr-3 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-slate-800">
                                {resource.type}: {resource.name}
                              </div>
                              {resource.author && (
                                <div className="text-sm text-slate-600">
                                  By {resource.author}
                                </div>
                              )}
                              {resource.platform && (
                                <div className="text-sm text-slate-600">
                                  Platform: {resource.platform}
                                </div>
                              )}
                              <a href={resource.link} target='_blank' className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                                Access Resource →
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  <div className="mt-2 flex justify-end">
                    <span className="text-sm text-blue-600 flex items-center">
                      {activeSubject === subject.id ? "Hide Resources" : "Show Resources"}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 ml-1 transition-transform ${activeSubject === subject.id ? "rotate-180" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

       
      </section>

    </div>
  );
}

export default StudentsCorner;