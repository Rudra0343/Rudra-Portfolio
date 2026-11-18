import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  Award,
  Database,
  Terminal,
  Brain,
  Link,
  Phone,
  FileText,
} from "lucide-react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "DEVIN Clone",
      description: "An AI-powered real-time chat application inspired by DEVIN.",
      image: "DEVIN.png",
      tags: ["MERN Stack", "Socket.io", "Web-Container", "AI"],
      sourceCode: "https://github.com/PremPatel1010/DEVIN-Clone",
      demoLink: "#",
    },
    {
      title: "Bhagavad Gita",
      description: "A single place to read and explore the teachings of the Bhagavad Gita.",
      image: "GITA.png",
      tags: ["Node.js", "Express", "REST API"],
      sourceCode: "https://github.com/PremPatel1010/Bhagavad-Gita",
      demoLink: "https://bhagavad-gita-seven.vercel.app/",
    },
    {
      title: "GTU Diploma Helper",
      description: "A study material platform for GTU diploma students with notes, question papers, and IMPs.",
      image: "GDH.png",
      tags: ["MERN Stack", "Redis", "Tailwind CSS"],
      sourceCode: "#",
      demoLink: "https://gtu-diploma-helper-wycw.onrender.com/",
    },
  ];



  const skills = [
    {
      category: "Full Stack Development",
      icon: <Code2 className="h-8 w-8 text-indigo-400" />,
      items: ["MERN Stack", "React.js", "Node.js", "Express.js", "REST APIs", "Socket.io", "EJS"],
    },
    {
      category: "Frontend Expertise",
      icon: <Briefcase className="h-8 w-8 text-indigo-400" />,
      items: ["Frontend Development", "Web Design", "Tailwind CSS", "CSS", "Responsive Design"],
    },
    {
      category: "Backend & Database",
      icon: <Database className="h-8 w-8 text-indigo-400" />,
      items: ["Backend Development", "PostgreSQL", "SQL", "DBMS", "MongoDB"],
    },
    {
      category: "Programming & Tools",
      icon: <Terminal className="h-8 w-8 text-indigo-400" />,
      items: ["Python", "Java", "OOP", "Linux", "Git & GitHub"],
    },
    {
      category: "AI & Innovation",
      icon: <Brain className="h-8 w-8 text-indigo-400" />,
      items: ["AI Integration", "Gemini API", "Machine Learning"],
    },
  ]

  const certifications = [
    {
      name: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      date: "Oct 2024",
      credentialId: "UC-2309249e-3970-422f-9d37-a9ac66a91250",
      icon: <Award className="h-6 w-6 text-indigo-400" />,
      url: "https://www.udemy.com/certificate/UC-2309249e-3970-422f-9d37-a9ac66a91250/",
    },
    {
      name: "Goldman Sachs - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Aug 2024",
      credentialId: "NpHZBL6Nuggfs4qhX",
      icon: <Award className="h-6 w-6 text-indigo-400" />,
    },
    {
      name: "Skyscanner - Front-End Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Aug 2024",
      credentialId: "kWwPsfo7yXYzNsZDE",
      icon: <Award className="h-6 w-6 text-indigo-400" />,
    },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  const AnimatedSection = ({ children, id }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })
  
    return (
      <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp} id={id}>
        {children}
      </motion.div>
    )
  }
  

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-100">Rudra Patel</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <a href="#about" className="text-sm lg:text-base text-gray-200 hover:text-indigo-600">
                About
              </a>
              <a href="#projects" className="text-sm lg:text-base text-gray-200 hover:text-indigo-600">
                Projects
              </a>
              <a href="#skills" className="text-sm lg:text-base text-gray-200 hover:text-indigo-600">
                Skills
              </a>
              <a href="#certifications" className="text-sm lg:text-base text-gray-200 hover:text-indigo-600">
                Certifications
              </a>
              <a href="#connect" className="text-sm lg:text-base text-gray-200 hover:text-indigo-600">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-base text-gray-200 hover:text-indigo-600">
                About
              </a>
              <a href="#projects" className="block px-3 py-2 text-base text-gray-200 hover:text-indigo-600">
                Projects
              </a>
              <a href="#skills" className="block px-3 py-2 text-base text-gray-200 hover:text-indigo-600">
                Skills
              </a>
              <a href="#certifications" className="block px-3 py-2 text-base text-gray-200 hover:text-indigo-600">
                Certifications
              </a>
              <a href="#connect" className="block px-3 py-2 text-base text-gray-200 hover:text-indigo-600">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="about"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-gray-950 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Text content */}
            <motion.div variants={fadeInLeft} className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-100">
                <span className="block">Hi, I'm Rudra Patel</span>
                <span className="block text-indigo-600">Full Stack Developer</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto md:mx-0">
                Passionate about creating beautiful, functional, and user-friendly applications using MERN stack.
              </p>
              <div className="mt-5 flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/Rudra0343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rudra-patel-33ab45365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:patelrudra0343@gmail.com" className="text-gray-400 hover:text-gray-500">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            {/* Right side - Profile Image */}
            <motion.div variants={fadeInRight} className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <img
                  src="prem.png"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-white"
                />
                <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <AnimatedSection id="projects">
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 sm:py-20 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Featured Projects</h2>
              <p className="mt-4 text-base sm:text-lg text-gray-400">Explore my latest work and creative solutions</p>
            </div>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="group bg-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-gray-800 to-gray-900">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs sm:text-sm bg-gray-700 text-indigo-400 rounded-full font-medium hover:bg-gray-600 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      <a
                        href={project.sourceCode}
                        className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                      >
                        <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="ml-2 text-xs sm:text-sm font-medium">Source Code</span>
                      </a>
                      <a
                        href={project.demoLink}
                        className="flex items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="ml-2 text-xs sm:text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills">
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 sm:py-20 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Technical Skills</h2>
              <p className="mt-4 text-base sm:text-lg text-gray-400">Expertise across the full development stack</p>
            </div>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 sm:mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  className="group relative bg-gray-800 rounded-xl p-6"
                >
                  <div className="absolute -top-4 left-6 bg-gray-900 p-3 rounded-xl shadow-lg border border-gray-700">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-4 mb-6 group-hover:text-indigo-400 transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-full font-medium hover:bg-gray-600 hover:text-indigo-400 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 border border-gray-700 rounded-xl group-hover:border-indigo-500/50 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </AnimatedSection>

      {/* Certifications Section */}
      <AnimatedSection id="certifications">
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 sm:py-20 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Licenses & Certifications</h2>
              <p className="mt-4 text-base sm:text-lg text-gray-400">
                Professional achievements and credentials that showcase my expertise
              </p>
            </div>
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  variants={fadeInUp}
                  whileHover="hover"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-gray-800 rounded-xl p-6 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-300"></div>
                  <div className="relative">
                    <div className="bg-gray-900 p-3 rounded-xl shadow-lg inline-block border border-gray-700 mb-4">
                      {cert.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-2">{cert.issuer}</p>
                    <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-4">
                      <span>{cert.date}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <Link className="h-4 w-4 mr-2" />
                        <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-gray-700 rounded-xl group-hover:border-indigo-500/50 transition-colors duration-300"></div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="connect">
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Let's Connect</h2>
              <p className="mt-4 text-base sm:text-lg text-gray-400">
                Feel free to reach out through any of these platforms
              </p>
            </div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8"
            >
              <motion.a
                variants={fadeInUp}
                href="tel:+917990474552"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                title="Call me"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-indigo-400" />
              </motion.a>

              <motion.a
                variants={fadeInUp}
                href="mailto:patelrudra0343@gmail.com"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                title="Email me"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-indigo-400" />
              </motion.a>

              <motion.a
                variants={fadeInUp}
                href="https://www.linkedin.com/in/rudra-patel-33ab45365/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                title="Connect on LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-indigo-400" />
              </motion.a>

              <motion.a
                variants={fadeInUp}
                href="https://github.com/Rudra0343"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                title="View my GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-indigo-400" />
              </motion.a>

              <motion.a
                variants={fadeInUp}
                href="https://leetcode.com/u/prempatel1010/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                title="Check my LeetCode"
              >
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-indigo-400" />
              </motion.a>

              <motion.a
                variants={fadeInUp}
                href="/path-to-your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
                title="Download Resume"
              >
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-indigo-400" />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-900 py-8 border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-400 animate-spin-slow" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
                Rudra Patel
              </span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 text-center">
              Building digital experiences with passion and precision
            </p>
            <div className="mt-6 text-center text-gray-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}


export default App

