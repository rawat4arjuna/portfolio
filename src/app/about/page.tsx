import Experience from "@/components/Experience";
import Myplace from "@/components/Myplace";
import MyStory from "@/components/MyStory";
import { Metadata } from "next";
import { Brain, Rocket, Globe, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Arjun Singh Rawat - Sr. Frontend Engineer & React.js Expert",
  description:
    "Learn about Arjun Singh Rawat, Senior Frontend Engineer with 5+ years of expertise in React.js, Next.js, AI integration, workflow builders, and enterprise-grade applications. Based in Dehradun, Uttarakhand with international experience.",
  keywords: [
    "Arjun Singh Rawat",
    "Senior Frontend Engineer",
    "React.js Expert",
    "Next.js Developer",
    "AI Integration Developer",
    "Workflow Builder Specialist",
    "Component Library Developer",
    "Enterprise Applications",
    "Hardware Integration",
    "TypeScript Expert",
    "Material-UI Specialist",
    "Slate.js Developer",
    "Uttarakhand Developer",
    "International Experience",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/SwV3FCz9/image.png",
    title: "About | Arjun Singh Rawat - Sr. Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in enterprise React.js applications, AI integration, and scalable web solutions. 5+ years of professional experience.",
  },
  twitter: {
    images: "https://i.ibb.co/SwV3FCz9/image.png",
    title: "About | Arjun Singh Rawat - Sr. Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in enterprise React.js applications, AI integration, and scalable web solutions. 5+ years of professional experience.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#7c3aed",
};

const About = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Hero Section with Enhanced Design */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              About me<span className="text-purple-600">.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200 border-l-4 lg:border-l-8 border-purple-600 pl-6 lg:pl-8">
              Building enterprise-grade applications and scalable UI systems is
              my passion.{" "}
              <span className="text-purple-600 font-semibold">
                With 5+ years of experience
              </span>{" "}
              across industries and continents, I architect solutions that
              bridge complex technical requirements with intuitive user
              experiences.
            </p>
          </div>

          {/* Professional Summary */}
          <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-white mb-16 animate-fade-in-up delay-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Senior Frontend Engineer
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Currently at GEDU Services, I specialize in React.js ecosystems,
                AI integration, and workflow builder systems. My journey spans
                from IoT hardware communication to enterprise no-code platforms,
                with international experience in Kuwait.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">
                  5+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">5</div>
                <div className="text-gray-300">Companies Worked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Core Expertise Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  AI Integration Expert
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Specialized in Gemini AI integration, building intelligent
                workflow systems and automated content processing solutions for
                enterprise applications.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Enterprise Architect
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Design and build scalable component libraries, monorepo
                architectures, and no-code platforms that power multiple
                enterprise applications.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  International Experience
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Worked remotely and on-site across India and Kuwait, handling
                localization, hardware integration, and cross-cultural
                development challenges.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Code className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Full-Stack Capabilities
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                From IoT hardware communication to modern web APIs, I bridge the
                gap between frontend excellence and backend integration.
              </p>
            </div>
          </div>

          {/* Technical Philosophy */}
          <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100 animate-fade-in-up delay-700">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                My Engineering Philosophy
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                I believe in building{" "}
                <span className="text-purple-600 font-semibold">
                  intelligent, scalable, and maintainable systems
                </span>{" "}
                that grow with business needs. Every line of code should serve a
                purpose, every component should be reusable, and every user
                interaction should feel intuitive.
              </p>

              {/* Technical Principles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    Component-Driven Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Building reusable, well-documented components that
                    accelerate development and ensure consistency across
                    enterprise applications.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Performance-First Approach
                  </h3>
                  <p className="text-gray-600 text-sm">
                    I focus on making websites fast and smooth from the
                    start—using the latest tools, keeping code organized, and
                    making sure everything loads quickly for the best user
                    experience.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Future-Proof Architecture
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Designing systems with TypeScript, modern React patterns,
                    and modular architectures that adapt to changing
                    requirements.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    User-Centric Innovation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Leveraging AI, workflow builders, and rich text editors to
                    create interfaces that empower users rather than constrain
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-16 animate-fade-in-up delay-900">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Current Focus & Expertise
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Areas where I&apos;m pushing the boundaries of frontend
                development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl border border-purple-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  AI-Powered UIs
                </h3>
                <p className="text-sm text-gray-600">
                  Integrating Gemini AI for intelligent content generation,
                  workflow automation, and enhanced user experiences.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl border border-blue-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  No-Code Platforms
                </h3>
                <p className="text-sm text-gray-600">
                  Building drag-and-drop workflow builders and dynamic form
                  systems that empower non-technical users.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl border border-green-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Performance Engineering
                </h3>
                <p className="text-sm text-gray-600">
                  WebAssembly with Rust, advanced bundling, and optimization
                  techniques for enterprise-scale applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <Myplace />
      <MyStory />
      <Experience />
    </main>
  );
};

export default About;
