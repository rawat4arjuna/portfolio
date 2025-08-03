import Link from "next/link";
import React from "react";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "GEDU Services",
      website: "https://gedu.global",
      position: "Sr. Front-End Engineer",
      duration: "September 2024 - Present",
      location: "Noida",
      technologies: [
        "React.js",
        "Next.js",
        "Material-UI",
        "Slate.js",
        "Formik",
        "REST APIs",
        "Custom Hooks",
        "AI Integration",
        "Web Assembly",
        "WorkFlow Design",
        "D3",
      ],
      achievements: [
        "Architected and delivered advanced UI systems using React.js, Next.js, and Material-UI, enhancing usability across complex forms, calendars, and rich text editors.",
        "Built a fully customizable rich text editor with Slate.js, supporting image uploads, color pickers, alignment, list formatting, and dynamic component blocks for content creators.",
        "Developed a multi-range calendar system with color-coded intervals and shaded week-offs, improving visual planning for scheduling applications.",
        "Created a dynamic, reusable component library to ensure scalability and consistency across internal products, streamlining development workflows.",
        "Integrated REST APIs with efficient state handling using custom hooks and global state patterns, reducing redundant fetches and enhancing performance.",
      ],
      highlights: [
        "Advanced UI Systems Built",
        "Rich Text Editor Development",
        "Component Library Creation",
        "Calendar System Implementation",
      ],
    },
    {
      company: "Pericius Technology/Tecnotree-Flex",
      website: "#",
      position: "Front-End Engineer",
      duration: "January 2022 - September 2024",
      location: "Bangalore (Remote), Salmiya Kuwait (On Site)",
      technologies: [
        "React.js",
        "Redux",
        "REST APIs",
        "Webpack",
        "Vite",
        "Lingui",
        "Barcode Integration",
      ],
      achievements: [
        "Engineered robust platforms using React.js, Redux, and REST APIs while spearheading Webpack-to-Vite migration that significantly enhanced development speed and efficiency.",
        "Revolutionized large-scale app localization using Vite and Lingui, transforming user engagement for non-English speakers and exceeding product requirements through deep user insights.",
        "Successfully orchestrated production deployments, data migrations with maintained integrity, and developed solutions integrating hardware devices like barcode scanners with software systems.",
      ],
      highlights: [
        "Webpack to Vite Migration",
        "App Localization Implementation",
        "Hardware Integration",
        "Production Deployments",
      ],
    },
    {
      company: "Zapbuild",
      website: "#",
      position: "Senior Associate Technology",
      duration: "April 2021 - January 2022",
      location: "Mohali Chandigarh",
      technologies: [
        "React.js",
        "GraphQL",
        "Redux",
        "D3.js",
        "ReCharts",
        "Leaflet",
        "Shopify API",
      ],
      achievements: [
        "Leveraged GraphQL and Redux for optimal data management, notably reducing page load times and amplifying user engagement in a React.js project.",
        "Elevated data analysis with D3, ReCharts, and Leaflet, creating a captivating user interface and boosting overall engagement.",
        "Integrated third-party APIs (Shopify, social media) seamlessly, enhancing product functionality and enriching the user experience.",
      ],
      highlights: [
        "GraphQL Implementation",
        "Data Visualization",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      company: "Tutree Inc.",
      website: "#",
      position: "React.js Developer",
      duration: "February 2020 - April 2021",
      location: "Noida",
      technologies: [
        "React.js",
        "Redux",
        "Material UI",
        "Go Gin",
        "Node.js",
        "Express",
        "EJS",
      ],
      achievements: [
        "Engineered a high-performance web app prioritizing user experience and scalability, employing React.js, Redux, and Material UI.",
        "Developed an AMP project integrated with GO GIN, boosting mobile traffic significantly.",
        "Implemented a server-side rendered website using Node.js, Express, and EJS, enhancing search engine visibility and user engagement.",
      ],
      highlights: [
        "High-Performance Web App",
        "AMP Implementation",
        "SSR Development",
        "Mobile Optimization",
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Experience<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl animate-fade-in-up delay-200">
            My journey in frontend engineering, solving real-world problems
            using modern frameworks, design systems, and scalable practices.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:w-1/3">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {exp.website !== "#" ? (
                          <Link
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors duration-300"
                          >
                            {exp.company}
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        ) : (
                          <h2 className="text-2xl lg:text-3xl font-bold text-purple-600">
                            {exp.company}
                          </h2>
                        )}
                        <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                          {exp.position}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar className="w-5 h-5 text-purple-600" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin className="w-5 h-5 text-purple-600" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-800">
                          Stack Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="space-y-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                        {exp.position}{" "}
                        <span className="text-purple-600">@ {exp.company}</span>
                      </h3>

                      <div className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-3 group"
                          >
                            <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700 text-lg leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-gray-50 rounded-xl border border-purple-100">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                          Key Highlights
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.highlights.map((highlight, hlIndex) => (
                            <div
                              key={hlIndex}
                              className="flex items-center gap-3"
                            >
                              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Internship<span className="text-purple-600">.</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-1/3">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl lg:text-3xl font-bold text-purple-600">
                        Acroknacks
                      </h2>
                      <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                        Software Engineer Intern
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">
                          June 2019 - February 2020
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <span>Dehradun</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Stack Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Electron.js",
                          "React.js",
                          "PLC Integration",
                          "Bash Scripts",
                          "Database",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                      Software Engineer Intern{" "}
                      <span className="text-purple-600">@ Acroknacks</span>
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Developed a board-based project using Electron.js and
                          React.js, focusing on user experience and streamlined
                          communication with PLC.
                        </p>
                      </div>

                      <div className="flex items-start gap-3 group">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Implemented robust communication enabling parsing,
                          graphing of PLC data, and reliable database storage
                          for precise data analysis.
                        </p>
                      </div>

                      <div className="flex items-start gap-3 group">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Designed a touch keyboard for improved user
                          interaction and accessibility, ensuring a
                          user-friendly interface.
                        </p>
                      </div>

                      <div className="flex items-start gap-3 group">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Integrated bash scripts for seamless data transfer
                          between external devices and the application,
                          facilitating smooth USB-to-database data exchange.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
