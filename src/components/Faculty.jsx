import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Faculty() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [facultyList, setFacultyList] = useState([]);
  
  // Sample faculty data
  const facultyData = [
    {
      id: "CS001",
      name: "Dr. James Smith",
      title: "Professor & Department Head",
      image: "/api/placeholder/300/300",
      specialization: "Artificial Intelligence",
      email: "james.smith@university.edu",
      phone: "(555) 123-4567",
      office: "CS Building, Room 201",
      education: [
        "Ph.D. in Computer Science, Stanford University",
        "M.S. in Computer Science, MIT",
        "B.Tech in Computer Science, IIT Delhi"
      ],
      research: [
        "Machine Learning Algorithms",
        "Neural Networks",
        "AI Ethics"
      ],
      publications: [
        "Smith, J. et al. (2023). 'Advances in Neural Network Architectures', IEEE Transactions on AI",
        "Smith, J. & Johnson, A. (2022). 'Ethical Considerations in AI Development', Journal of AI Ethics",
        "Smith, J. (2021). 'Machine Learning for Sustainable Computing', International Conference on Green Computing"
      ]
    },
    {
      id: "CS002",
      name: "Dr. Sarah Johnson",
      title: "Associate Professor",
      image: "/api/placeholder/300/300",
      specialization: "Computer Vision",
      email: "sarah.johnson@university.edu",
      phone: "(555) 234-5678",
      office: "CS Building, Room 215",
      education: [
        "Ph.D. in Computer Science, UC Berkeley",
        "M.S. in Computer Engineering, Georgia Tech",
        "B.S. in Electrical Engineering, University of Michigan"
      ],
      research: [
        "Object Recognition",
        "Image Processing",
        "Autonomous Systems"
      ],
      publications: [
        "Johnson, S. et al. (2023). 'Real-time Object Detection in Low-light Conditions', Computer Vision Journal",
        "Johnson, S. (2022). 'Advancements in 3D Scene Reconstruction', Conference on Computer Vision and Pattern Recognition",
        "Johnson, S. & Lee, M. (2021). 'Vision Systems for Autonomous Vehicles', IEEE Transactions on Intelligent Transportation"
      ]
    },
    {
      id: "CS003",
      name: "Dr. Robert Lee",
      title: "Assistant Professor",
      image: "/api/placeholder/300/300",
      specialization: "Cybersecurity",
      email: "robert.lee@university.edu",
      phone: "(555) 345-6789",
      office: "CS Building, Room 183",
      education: [
        "Ph.D. in Information Security, Carnegie Mellon University",
        "M.S. in Computer Science, Cornell University",
        "B.S. in Computer Science, Purdue University"
      ],
      research: [
        "Network Security",
        "Cryptography",
        "Secure Software Development"
      ],
      publications: [
        "Lee, R. & Zhang, W. (2024). 'Novel Approaches to Blockchain Security', Journal of Cryptography",
        "Lee, R. et al. (2023). 'Detecting Zero-day Vulnerabilities with AI', Security and Privacy Symposium",
        "Lee, R. (2022). 'Secure Coding Practices for Critical Infrastructure', IEEE Security Conference"
      ]
    },
    {
      id: "CS004",
      name: "Dr. Maria Garcia",
      title: "Professor",
      image: "/api/placeholder/300/300",
      specialization: "Human-Computer Interaction",
      email: "maria.garcia@university.edu",
      phone: "(555) 456-7890",
      office: "CS Building, Room 222",
      education: [
        "Ph.D. in Human-Computer Interaction, University of Washington",
        "M.S. in Information Systems, Northwestern University",
        "B.A. in Psychology, UCLA"
      ],
      research: [
        "User Experience Design",
        "Accessibility",
        "AR/VR Interfaces"
      ],
      publications: [
        "Garcia, M. et al. (2024). 'Designing Inclusive Interfaces for Diverse User Groups', ACM Transactions on Accessible Computing",
        "Garcia, M. (2023). 'Virtual Reality Applications in Education', Conference on Human Factors in Computing Systems",
        "Garcia, M. & Smith, J. (2022). 'AI-Enhanced User Interfaces', Journal of User Experience Design"
      ]
    },
    {
      id: "CS005",
      name: "Dr. David Chen",
      title: "Associate Professor",
      image: "/api/placeholder/300/300",
      specialization: "Distributed Systems",
      email: "david.chen@university.edu",
      phone: "(555) 567-8901",
      office: "CS Building, Room 156",
      education: [
        "Ph.D. in Computer Science, University of Toronto",
        "M.Eng. in Computer Engineering, Cornell University",
        "B.S. in Computer Science, University of Illinois"
      ],
      research: [
        "Cloud Computing",
        "Edge Computing",
        "Distributed Algorithms"
      ],
      publications: [
        "Chen, D. & Wilson, T. (2023). 'Efficient Resource Allocation in Edge Computing', IEEE Cloud Computing",
        "Chen, D. et al. (2022). 'Fault Tolerance in Distributed Systems', ACM Distributed Computing",
        "Chen, D. (2021). 'Scalable Architecture for IoT Networks', International Conference on Distributed Computing Systems"
      ]
    },
    {
      id: "CS006",
      name: "Dr. Jennifer Wilson",
      title: "Assistant Professor",
      image: "/api/placeholder/300/300",
      specialization: "Data Science",
      email: "jennifer.wilson@university.edu",
      phone: "(555) 678-9012",
      office: "CS Building, Room 175",
      education: [
        "Ph.D. in Statistics, Harvard University",
        "M.S. in Data Science, Columbia University",
        "B.S. in Mathematics, Duke University"
      ],
      research: [
        "Big Data Analytics",
        "Statistical Learning",
        "Data Visualization"
      ],
      publications: [
        "Wilson, J. et al. (2024). 'Novel Approaches to High-dimensional Data Visualization', Data Science Journal",
        "Wilson, J. & Garcia, M. (2023). 'Interpretable Machine Learning Models', Conference on Knowledge Discovery and Data Mining",
        "Wilson, J. (2022). 'Statistical Methods for Large-Scale Data Analysis', Journal of Computational Statistics"
      ]
    }
  ];
  
  useEffect(() => {
    setIsLoaded(true);
    setFacultyList(facultyData);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  
  // Filter faculty based on search query
  const filteredFaculty = facultyList.filter(faculty => 
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faculty.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 font-sans">
      {/* Hero Section with Search */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-500">
          {/* Improved animated grid pattern overlay with better opacity */}
          <div className="absolute inset-0 opacity-20" 
               style={{backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", 
                       backgroundSize: "24px 24px"}}></div>
        </div>
        
      
       
        
        {/* Hero content with improved layout and spacing */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full mt-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight bg-clip-text  bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our Faculty
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Meet our world-class faculty members leading innovation in computer science
            </motion.p>
          </motion.div>
          
          {/* Improved search box with better styling and animations */}
          <motion.div
            className="max-w-xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-70 blur-sm"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 px-6 pl-14 rounded-full border-none ring-2 ring-white/20 focus:ring-blue-300 bg-white/10 backdrop-blur-sm shadow-xl text-white placeholder-blue-100/70 focus:outline-none focus:bg-white/20 transition-all duration-300"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                    className="w-6 h-6 absolute left-5 text-blue-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-5 text-blue-100 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              onClick={() => setSelectedFaculty(faculty)}
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-100">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {faculty.id}
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-md transform scale-95 opacity-30"></div>
                    <img 
                      src={faculty.image} 
                      alt={faculty.name} 
                      className="w-40 h-40 rounded-full object-cover border-4 border-white relative z-10"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800">{faculty.name}</h3>
                <p className="text-blue-600 mt-1">{faculty.title}</p>
                <p className="text-slate-600 mt-2">{faculty.specialization}</p>
                <button 
                  className="mt-4 flex items-center justify-center mx-auto text-blue-600 hover:text-blue-800 transition"
                >
                  <span>View Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Empty state when no faculty match search */}
        {filteredFaculty.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className="w-16 h-16 mx-auto text-slate-300 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No matching faculty found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any faculty matching "{searchQuery}". Please try a different search term.
            </p>
            <button 
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </section>

      {/* Faculty Details Dialog */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6 lg:p-8">
                <button 
                  onClick={() => setSelectedFaculty(null)}
                  className="absolute right-6 top-6 text-slate-400 hover:text-slate-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Profile image and contact info */}
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-xl">
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-md transform scale-95 opacity-30"></div>
                          <img 
                            src={selectedFaculty.image} 
                            alt={selectedFaculty.name} 
                            className="w-40 h-40 rounded-full object-cover border-4 border-white relative z-10"
                          />
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                          {selectedFaculty.id}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">{selectedFaculty.name}</h3>
                        <p className="text-blue-600 mt-1">{selectedFaculty.title}</p>
                        <p className="text-slate-600 mt-2">{selectedFaculty.specialization}</p>
                      </div>
                      
                      <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          <div>
                            <p className="text-xs text-slate-500">Email</p>
                            <p className="text-sm text-slate-700">{selectedFaculty.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                          <div>
                            <p className="text-xs text-slate-500">Phone</p>
                            <p className="text-sm text-slate-700">{selectedFaculty.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                          </svg>
                          <div>
                            <p className="text-xs text-slate-500">Office</p>
                            <p className="text-sm text-slate-700">{selectedFaculty.office}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Education, Research Interests, and Publications */}
                  <div className="lg:w-2/3">
                    {/* Education */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        Education
                      </h4>
                      <ul className="space-y-2">
                        {selectedFaculty.education.map((edu, index) => (
                          <li key={index} className="bg-slate-50 p-3 rounded-lg text-slate-700">
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Research Interests */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                        Research Interests
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedFaculty.research.map((interest, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Publications */}
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-blue-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        Selected Publications
                      </h4>
                      <div className="space-y-3">
                        {selectedFaculty.publications.map((pub, index) => (
                          <div key={index} className="border-l-2 border-blue-600 pl-4 py-1">
                            <p className="text-slate-700">{pub}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}