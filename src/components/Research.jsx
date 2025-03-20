import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Research() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("publications");

  // Publications state and filters
  const [publications, setPublications] = useState([
    {
      id: 1,
      title: "Advances in Machine Learning Algorithms",
      faculty: "Dr. James Smith",
      type: "Journal",
      year: 2023,
    },
    {
      id: 2,
      title: "Blockchain Security Vulnerabilities",
      faculty: "Dr. Maria Johnson",
      type: "Conference",
      year: 2023,
    },
    {
      id: 3,
      title: "Cloud Computing Architecture for IoT",
      faculty: "Dr. Robert Chen",
      type: "Journal",
      year: 2022,
    },
    {
      id: 4,
      title: "Deep Learning in Image Recognition",
      faculty: "Dr. Sarah Williams",
      type: "Book Chapter",
      year: 2022,
    },
    {
      id: 5,
      title: "Edge Computing Frameworks",
      faculty: "Dr. James Smith",
      type: "Conference",
      year: 2021,
    },
    {
      id: 6,
      title: "Formal Verification Methods in Software",
      faculty: "Dr. Alex Thompson",
      type: "Journal",
      year: 2021,
    },
    {
      id: 7,
      title: "Graph Neural Networks",
      faculty: "Dr. Maria Johnson",
      type: "Conference",
      year: 2021,
      
    }
  ]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [publicationTypeFilter, setPublicationTypeFilter] = useState("All");
  const [publicationYearFilter, setPublicationYearFilter] = useState("All");

  // Workshops state and filters
  const [workshops, setWorkshops] = useState([
    {
      id: 1,
      title: "AI for Social Good",
      faculty: "Dr. James Smith",
      organizedBy: "Department of CSE",
      scope: "National",
      type: "Workshop",
      startDate: "2023-10-15",
      endDate: "2023-10-17",
    },
    {
      id: 2,
      title: "Cybersecurity Challenges",
      faculty: "Dr. Maria Johnson",
      organizedBy: "IEEE",
      scope: "International",
      type: "Conference",
      startDate: "2023-08-05",
      endDate: "2023-08-07",
    },
    {
      id: 3,
      title: "Data Science with Python",
      faculty: "Dr. Robert Chen",
      organizedBy: "Department of CSE",
      scope: "Local",
      type: "Workshop",
      startDate: "2023-06-20",
      endDate: "2023-06-22",
    },
    {
      id: 4,
      title: "Web3 Development",
      faculty: "Dr. Sarah Williams",
      organizedBy: "ACM",
      scope: "International",
      type: "Symposium",
      startDate: "2022-11-10",
      endDate: "2022-11-12",
    },
    {
      id: 5,
      title: "Cloud Computing Trends",
      faculty: "Dr. Alex Thompson",
      organizedBy: "Department of CSE",
      scope: "National",
      type: "Conference",
      startDate: "2022-09-25",
      endDate: "2022-09-27",
    },
  ]);
  const [filteredWorkshops, setFilteredWorkshops] = useState([]);
  const [workshopTypeFilter, setWorkshopTypeFilter] = useState("All");

  // Publication types and years for filtering
  const publicationTypes = ["All", "Journal", "Conference", "Book Chapter"];
  const publicationYears = ["All", "2023", "2022", "2021"];

  // Workshop types for filtering
  const workshopTypes = ["All", "Workshop", "Conference", "Symposium"];

  useEffect(() => {
    setIsLoaded(true);

    // Initial filtering
    setFilteredPublications(publications);
    setFilteredWorkshops(workshops);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Filter publications when filters change
  useEffect(() => {
    let filtered = [...publications];

    if (publicationTypeFilter !== "All") {
      filtered = filtered.filter((pub) => pub.type === publicationTypeFilter);
    }

    if (publicationYearFilter !== "All") {
      filtered = filtered.filter(
        (pub) => pub.year.toString() === publicationYearFilter
      );
    }

    setFilteredPublications(filtered);
  }, [publicationTypeFilter, publicationYearFilter, publications]);

  // Filter workshops when filters change
  useEffect(() => {
    let filtered = [...workshops];

    if (workshopTypeFilter !== "All") {
      filtered = filtered.filter(
        (workshop) => workshop.type === workshopTypeFilter
      );
    }

    setFilteredWorkshops(filtered);
  }, [workshopTypeFilter, workshops]);

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen text-slate-800 bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative py-24 px-6 flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
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
            <span>Advancing the Frontiers of Knowledge</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Research &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">
              {" "}
              Scholarly Activities
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Exploring cutting-edge technologies and creating innovative
            solutions through world-class research.
          </motion.p>
        </motion.div>
      </section>

      {/* Research Content Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                activeTab === "publications"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("publications")}
            >
              Publications
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
                activeTab === "workshops"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("workshops")}
            >
              Workshops
            </button>
          </div>
        </motion.div>

        {/* Publications Tab Content */}
        {activeTab === "publications" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-800">
                Faculty Publications
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                {/* Type Filter */}
                <div className="relative">
                  <select
                    value={publicationTypeFilter}
                    onChange={(e) => setPublicationTypeFilter(e.target.value)}
                    className="block appearance-none bg-white border border-slate-200 rounded-lg py-2 px-4 pr-8 leading-tight shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  >
                    {publicationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                {/* Year Filter */}
                <div className="relative">
                  <select
                    value={publicationYearFilter}
                    onChange={(e) => setPublicationYearFilter(e.target.value)}
                    className="block appearance-none bg-white border border-slate-200 rounded-lg py-2 px-4 pr-8 leading-tight shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  >
                    {publicationYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications Table */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        No.
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Title
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Faculty
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Type
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPublications.length > 0 ? (
                      filteredPublications.map((publication, index) => (
                        <motion.tr
                          key={publication.id}
                          className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <td className="py-4 px-6 text-sm text-slate-700">
                            {index + 1}
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-700 font-medium">
                            {publication.title}
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-700">
                            {publication.faculty}
                          </td>
                          <td className="py-4 px-6 text-sm">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                publication.type === "Journal"
                                  ? "bg-green-100 text-green-800"
                                  : publication.type === "Conference"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {publication.type}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-700">
                            {publication.year}
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="py-8 px-6 text-center text-slate-500"
                        >
                          No publications match the selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Workshops Tab Content */}
        {activeTab === "workshops" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-800">
                Workshops & Conferences
              </h2>
              <div className="relative">
                <select
                  value={workshopTypeFilter}
                  onChange={(e) => setWorkshopTypeFilter(e.target.value)}
                  className="block appearance-none bg-white border border-slate-200 rounded-lg py-2 px-4 pr-8 leading-tight shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                >
                  {workshopTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Workshops Table */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        No.
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Title
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Faculty
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Organized By
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Scope
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Type
                      </th>
                      <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                        Dates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWorkshops.length > 0 ? (
                      filteredWorkshops.map((workshop, index) => (
                        <motion.tr
                          key={workshop.id}
                          className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <td className="py-4 px-6 text-sm text-slate-700">
                            {index + 1}
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-700 font-medium">
                            {workshop.title}
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-700">
                            {workshop.faculty}
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-700">
                            {workshop.organizedBy}
                          </td>
                          <td className="py-4 px-6 text-sm">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                workshop.scope === "International"
                                  ? "bg-indigo-100 text-indigo-800"
                                  : workshop.scope === "National"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-teal-100 text-teal-800"
                              }`}
                            >
                              {workshop.scope}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                workshop.type === "Workshop"
                                  ? "bg-blue-100 text-blue-800"
                                  : workshop.type === "Conference"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {workshop.type}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-700">
                            {formatDate(workshop.startDate)} -{" "}
                            {formatDate(workshop.endDate)}
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="py-8 px-6 text-center text-slate-500"
                        >
                          No workshops match the selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </section>

    </div>
  );
}

export default Research;
