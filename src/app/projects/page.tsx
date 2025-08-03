import MyProjects from "@/components/MyProjects";
import { Metadata } from "next";
import {
  Code,
  Sparkles,
  Zap,
  Shield,
  Lock,
  Rocket,
  Brain,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Projects | Arjun Singh Rawat - Sr. Frontend Engineer & React.js Expert",
  description:
    "Explore enterprise-grade projects by Arjun Singh Rawat, Senior Frontend Engineer specializing in React.js, Next.js, AI integration, workflow builders, and scalable component libraries. 4+ years of delivering high-performance web solutions.",
  keywords: [
    "Senior Frontend Engineer Projects",
    "Enterprise React.js Applications",
    "Next.js Portfolio",
    "AI Integration Projects",
    "Workflow Builder Development",
    "Component Library Development",
    "TypeScript Enterprise Apps",
    "Material-UI Systems",
    "Slate.js Rich Text Editors",
    "Hardware Integration Projects",
    "IoT Development",
    "Inventory Management Systems",
    "No-Code Platform Development",
    "Monorepo Architecture",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/C5QRJzQF/image.png",
    title: "Projects | Arjun Singh Rawat - Sr. Frontend Engineer",
    description:
      "Enterprise-grade projects showcasing 4+ years of expertise in React.js, AI integration, workflow builders, and scalable web applications.",
  },
  twitter: {
    images: "https://i.ibb.co/C5QRJzQF/image.png",
    title: "Projects | Arjun Singh Rawat - Sr. Frontend Engineer",
    description:
      "Enterprise-grade projects showcasing 4+ years of expertise in React.js, AI integration, workflow builders, and scalable web applications.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#7c3aed",
};

const Projects = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Enhanced Header Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Icon and Title Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-600 rounded-xl">
              <Rocket className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
                Enterprise <span className="text-purple-600">Solutions</span>
              </h1>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-100">
            <p className="text-gray-800 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-purple-600 mb-8">
              Building Scalable, AI-Integrated, and Hardware-Connected
              Applications with 4+ Years of Enterprise Development Expertise
            </p>

            {/* Professional Journey Highlights */}
            <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-6 mb-8 border border-purple-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Journey Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    System Mangement Platform → No Code Platform
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Hardware Integration → IoT Coffee Machine
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Educational Platform → Enterprise Architecture
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Component Libraries → Workflow Builders /Proformance based
                    Libraries
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Projects Delivered
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">50+</p>
                <p className="text-sm text-gray-600 mt-1">
                  Enterprise & Personal
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Technologies
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">20+</p>
                <p className="text-sm text-gray-600 mt-1">
                  Frontend & Integration
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Experience
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">4+</p>
                <p className="text-sm text-gray-600 mt-1">Years Professional</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Companies
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">5</p>
                <p className="text-sm text-gray-600 mt-1">
                  Including International
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <Brain className="text-purple-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">
                  AI Integration
                </h3>
                <p className="text-sm text-gray-600">
                  Gemini AI, Workflow Automation
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <Rocket className="text-blue-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Enterprise Systems
                </h3>
                <p className="text-sm text-gray-600">
                  Scalable Architecture, Component Libraries
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <Zap className="text-green-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-800 mb-2">
                  Hardware Integration
                </h3>
                <p className="text-sm text-gray-600">
                  IoT, PLC, Barcode Scanners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <MyProjects />

      {/* Enhanced Professional Note Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Shield className="text-white" size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Enterprise Portfolio Disclaimer
              </h2>
            </div>

            <div className="space-y-4 leading-relaxed">
              <p className="text-lg text-gray-200">
                As a Senior Frontend Engineer with 4+ years of enterprise
                experience, the projects displayed here represent only a curated
                selection of my work. Many of my most complex and impactful
                projects remain confidential due to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                  <Lock
                    className="text-purple-300 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">Enterprise NDAs</h3>
                    <p className="text-sm text-gray-300">
                      Projects at GEDU Services, Pericius Technology, and
                      Tecnotree-Flex involve proprietary business logic and
                      confidential client systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                  <Building
                    className="text-blue-300 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      International Compliance
                    </h3>
                    <p className="text-sm text-gray-300">
                      On-site work in Kuwait and enterprise applications require
                      strict security protocols and data protection measures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                  <Brain
                    className="text-green-300 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">
                      AI & Workflow Systems
                    </h3>
                    <p className="text-sm text-gray-300">
                      Advanced AI integrations and workflow builders often
                      contain sensitive algorithms and proprietary
                      implementation details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                  <Rocket
                    className="text-orange-300 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold mb-1">Active Development</h3>
                    <p className="text-sm text-gray-300">
                      Current projects including DSM platform, component
                      libraries, and enterprise systems are in active
                      development phases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-400/30">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-purple-300 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {"Let's"} Discuss My Work
                    </h3>
                    <p className="text-gray-200">
                      {"I'd "}be delighted to walk you through detailed case
                      studies of my enterprise projects, including technical
                      architecture decisions, performance optimizations, AI
                      integration strategies, and the impact of component
                      libraries {"I've"} built. These conversations often reveal
                      the depth of experience that portfolios {"can't"} fully
                      capture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Career Progression */}
              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Code className="text-purple-300" size={20} />
                  Career Evolution: From IoT to Enterprise AI
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>
                    🔹 Started with IoT coffee machines and PLC communication at
                    Acroknacks
                  </p>
                  <p>
                    🔹 Built educational platforms and performance optimizations
                    at Tutree
                  </p>
                  <p>
                    🔹 Developed inventory systems with barcode integration at
                    Pericius/Tecnotree
                  </p>
                  <p>
                    🔹 Created component libraries and workflow builders
                    (TT-UIKit)
                  </p>
                  <p>
                    🔹 Currently architecting AI-integrated platforms and
                    no-code systems at GEDU
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
