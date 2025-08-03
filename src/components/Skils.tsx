import React from "react";
import {
  Code,
  Database,
  Users,
  Globe,
  Brain,
  GitBranch,
  Workflow,
  BarChart3,
  Layers,
  Server,
  TestTube,
  Settings,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Redux",
        "TypeScript",
        "Material-UI",
        "Tailwind CSS",
        "Formik",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Next.js API Routes",
        "Prisma ORM",
        "GraphQL",
        "REST APIs",
        "Firebase",
        "Database Design",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Settings,
      title: "Build Tools & Architecture",
      skills: [
        "Webpack",
        "Vite",
        "Monorepo Architecture",
        "Git",
        "Electron.js",
        "Remix",
        "Linux",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Brain,
      title: "Advanced Technologies",
      skills: [
        "AI Integration (Gemini AI)",
        "WebAssembly (Rust)",
        "React DnD",
        "React Flow",
        "D3.js",
        "Slate.js",
        "Workflow Builder Systems",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      skills: [
        "D3.js",
        "ReCharts",
        "Leaflet Maps",
        "Custom Charts",
        "Data Analysis",
        "Interactive Dashboards",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Workflow,
      title: "Development Tools",
      skills: [
        "Workflow Builder Systems",
        "Custom Hooks",
        "Component Libraries",
        "Postman",
        "Puppeteer",
        "Testing",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Globe,
      title: "Internationalization & Performance",
      skills: [
        "Lingui (i18n)",
        "Performance Optimization",
        "SEO",
        "AMP",
        "Server-Side Rendering",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        "Effective Communication",
        "Team Leadership",
        "Problem Solving",
        "Project Management",
        "Code Review",
        "Mentoring",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Skills<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            A comprehensive toolkit spanning frontend excellence, AI
            integration, modern architectures, and cutting-edge technologies
            that enable me to build scalable, innovative digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${category.color} p-6 text-white`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="w-12 h-1 bg-white rounded-full opacity-80"></div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-gray-700 group-hover:text-gray-800 transition-colors duration-200"
                      style={{
                        animationDelay: `${
                          500 + index * 100 + skillIndex * 50
                        }ms`,
                      }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`}
                      ></div>
                      <span className="text-sm lg:text-base font-medium">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Skills Section */}
        <div className="mt-16 animate-fade-in-up delay-700">
          <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Specialized Expertise
              </h3>
              <p className="text-gray-600 text-lg">
                Advanced technical capabilities and modern development practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors duration-200">
                  <Brain className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    AI Integration
                  </h4>
                  <p className="text-sm text-gray-600">
                    Gemini AI & ML Solutions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-200">
                  <Layers className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WebAssembly</h4>
                  <p className="text-sm text-gray-600">
                    High-performance with Rust
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-cyan-100 rounded-lg group-hover:bg-cyan-200 transition-colors duration-200">
                  <GitBranch className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Monorepo Architecture
                  </h4>
                  <p className="text-sm text-gray-600">
                    Scalable project structure
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-200">
                  <Workflow className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Workflow Builder
                  </h4>
                  <p className="text-sm text-gray-600">
                    Visual workflow design systems
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    API Development
                  </h4>
                  <p className="text-sm text-gray-600">
                    Next.js & Node.js APIs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                  <TestTube className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Testing & Automation
                  </h4>
                  <p className="text-sm text-gray-600">Postman & Puppeteer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Integration Section */}
        <div className="mt-12 animate-fade-in-up delay-900">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                Hardware-Software Integration
              </h3>
              <p className="text-gray-600">
                Experience with hardware communication and industrial systems
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Barcode Scanner Integration",
                "PLC Communication",
                "USB Device Integration",
                "Touch Interface Development",
                "Industrial IoT Systems",
                "Real-time Data Processing",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-200"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
