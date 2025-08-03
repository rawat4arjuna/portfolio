import React from "react";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  Star,
  Code,
  Globe,
  Award,
} from "lucide-react";

const MyStory = () => {
  const storyTimeline = [
    {
      year: "2015-2018",
      title: "Foundation Years",
      description:
        "Started my journey at Uttarakhand Technical University pursuing Bachelor of Computer Application. Discovered my passion for programming and began exploring web technologies, laying the groundwork for my future career.",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2018-2020",
      title: "Advanced Learning",
      description:
        "Pursued Master of Computer Application at Doon University. Deepened my understanding of software engineering principles, data structures, and modern development practices while working on academic projects.",
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2019-2020",
      title: "First Industry Experience",
      description:
        "Started as a Software Engineer Intern at Acroknacks in Dehradun. Developed board-based projects using Electron.js and React.js, worked with PLC communication, and built touch interfaces for industrial systems.",
      icon: Code,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "2020-2021",
      title: "Professional Debut",
      description:
        "Joined Tutree Inc. as a React.js Developer in Noida. Built high-performance web applications, developed AMP projects with GO GIN, and implemented server-side rendering solutions using Node.js and Express.",
      icon: Briefcase,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "2021-2022",
      title: "Technical Growth",
      description:
        "Advanced to Senior Associate Technology at Zapbuild in Mohali. Mastered GraphQL and Redux for optimal data management, created data visualizations with D3 and ReCharts, and integrated third-party APIs like Shopify.",
      icon: Rocket,
      color: "from-pink-500 to-pink-600",
    },
    {
      year: "2022-2024",
      title: "International Expansion",
      description:
        "Became Front-End Engineer at Pericius Technology/Tecnotree-Flex, working remotely from Bangalore and on-site in Kuwait. Led Webpack-to-Vite migration, revolutionized app localization with Lingui, and integrated hardware systems.",
      icon: Globe,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      year: "2024-Present",
      title: "Senior Engineering Role",
      description:
        "Currently serving as Sr. Front-End Engineer at GEDU Services in Noida. Architecting advanced UI systems with Material-UI, building rich text editors with Slate.js, and developing enterprise-grade component libraries.",
      icon: Award,
      color: "from-teal-500 to-teal-600",
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
            My Journey<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            From computer science student in Uttarakhand to Senior Frontend
            Engineer - a journey of continuous learning, growth, and building
            impactful digital solutions across industries and continents.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-purple-400 transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {storyTimeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                {/* Timeline Item */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "lg:pr-8 lg:text-right"
                      : "lg:pl-8 lg:text-left lg:order-3"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group">
                    {/* Year Badge */}
                    <div
                      className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 group-hover:scale-105 transition-transform duration-300`}
                    >
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="relative z-10 flex-shrink-0 lg:order-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300 cursor-pointer`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div
                  className={`flex-1 lg:block hidden ${
                    index % 2 === 0 ? "lg:order-3" : "lg:order-1"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 animate-fade-in-up delay-1000">
          <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-purple-600 animate-pulse" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                  The Journey Continues
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                From building industrial PLC interfaces in Dehradun to
                architecting enterprise applications for international clients -
                every step has been a learning opportunity that shaped my
                expertise in modern web technologies.
              </p>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  5+
                </div>
                <div className="text-gray-700 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50+
                </div>
                <div className="text-gray-700 font-medium">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-gray-700 font-medium">
                  Technologies Mastered
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <Star className="w-5 h-5" />
                <span>Ready to build the next chapter together?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-12 animate-fade-in-up delay-1200">
          <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Current Focus: Innovation & Excellence
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
                Today, {"I'm"} passionate about AI integration, workflow
                builders, and creating scalable component libraries that empower
                teams to build faster and better. My goal is to bridge the gap
                between complex technical requirements and intuitive user
                experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "AI Integration",
                  "Workflow Builders",
                  "Component Libraries",
                  "Enterprise Solutions",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
