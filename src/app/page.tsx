import { Download } from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import Link from "next/link";
import MyStory from "@/components/MyStory";
import Skills from "@/components/Skils"; // Fixed typo from "Skils"
import Experience from "@/components/Experience";
import ProjectBanner from "@/components/ProjectBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arjun Singh Rawat | Sr. Frontend Engineer & React.js Expert",
  description:
    "Senior Frontend Engineer with 5+ years of expertise in React.js, Next.js, TypeScript, Redux, and modern web technologies. Specialized in building scalable enterprise applications, AI-integrated platforms, workflow builders, and component libraries. Experience with hardware integration, localization, and performance optimization.",
  keywords: [
    "Senior Frontend Engineer",
    "React.js Expert",
    "Next.js Developer",
    "TypeScript Developer",
    "Redux Specialist",
    "Component Library Developer",
    "AI Integration Developer",
    "Workflow Builder",
    "WebAssembly Developer",
    "Monorepo Architecture",
    "Performance Optimization",
    "Internationalization",
    "Hardware Integration",
    "Enterprise Applications",
    "Slate.js Developer",
    "Material-UI Expert",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/JR9gd9Xk/image.png",
    title: "Arjun Singh Rawat | Sr. Frontend Engineer & React.js Expert",
    description:
      "Senior Frontend Engineer specializing in enterprise-grade React.js applications, AI integration, workflow builders, and scalable component libraries. 5+ years of experience delivering high-performance web solutions.",
  },
  twitter: {
    images: "https://i.ibb.co/JR9gd9Xk/image.png",
    title: "Arjun Singh Rawat | Sr. Frontend Engineer & React.js Expert",
    description:
      "Senior Frontend Engineer specializing in enterprise-grade React.js applications, AI integration, workflow builders, and scalable component libraries. 5+ years of experience delivering high-performance web solutions.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#7c3aed",
};

const Home = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto overflow-hidden">
      <section className="py-28 relative overflow-visible">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="text-center lg:text-left lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-gray-800 font-medium animate-fade-in-up">
                  Hey, {"I'm"} Arjun Singh Rawat{" "}
                  <span className="inline-block animate-bounce">👋🏻</span>
                </p>

                <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent animate-fade-in-up delay-200">
                    Senior
                  </span>
                  <br />
                  <span className="text-gray-800 animate-fade-in-up delay-300">
                    Frontend
                  </span>
                  <br />
                  <span className="text-gray-800 animate-fade-in-up delay-400">
                    Engineer
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                  {"I'm"} a Senior Frontend Engineer from{" "}
                  <span className="text-purple-600 font-semibold">India</span>{" "}
                  with 5+ years of experience building{" "}
                  <span className="text-purple-600 font-semibold">
                    enterprise-grade applications and scalable UI systems
                  </span>
                  . I specialize in React.js, Next.js, and TypeScript, creating
                  everything from AI-integrated platforms and workflow builders
                  to rich text editors and component libraries that power
                  large-scale applications across multiple industries.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-gray-50 p-6 rounded-xl border border-purple-100 animate-fade-in-up delay-600">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Current Focus
                  </h3>
                  <p className="text-gray-700">
                    Currently at{" "}
                    <span className="font-semibold text-purple-600">
                      GEDU Services
                    </span>
                    , architecting advanced UI systems with Material-UI,
                    building customizable rich text editors with Slate.js, and
                    developing multi-range calendar systems for enterprise
                    scheduling applications.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up delay-700">
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    React.js & Next.js Expert
                  </span>
                  <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                    TypeScript & Redux
                  </span>
                  <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                    AI Integration
                  </span>
                  <span className="bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium border border-pink-200">
                    Workflow Builder
                  </span>
                  <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200">
                    Component Libraries
                  </span>
                </div>
              </div>

              <div className="space-y-4 animate-fade-in-up delay-800">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600">
                      50+ Projects Delivered
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600">Enterprise Scale Apps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600">
                      International Experience
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-900">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold transition-all duration-300 transform hover:shadow-lg flex items-center gap-2"
                >
                  {"Let's"} Build Together
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Link>

                <Link
                  href="https://rawat4arjuna.github.io/portfolio/ArjunResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-xl hover:border-purple-600 hover:text-purple-600 font-semibold transition-all duration-300 transform flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
              </div>
            </div>

            {/* Profile Image Container with Constrained Floating Elements */}
            <div className="relative flex items-center justify-center w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 animate-fade-in-up delay-300">
              <div className="relative w-full h-full rounded-full border-4 border-purple-300 shadow-xl overflow-hidden">
                <Image
                  src={profileImg}
                  alt="Arjun Singh Rawat - Senior Frontend Engineer"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
              </div>

              {/* Floating Tech Icons - Properly Constrained */}
              {/* Corner positions */}
              <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 bg-blue-100 p-3 rounded-lg shadow-md animate-float">
                <span className="text-blue-600 font-bold text-xs md:text-sm">
                  React
                </span>
              </div>

              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-green-100 p-3 rounded-lg shadow-md animate-float delay-300">
                <span className="text-green-600 font-bold text-xs md:text-sm">
                  Next.js
                </span>
              </div>

              <div className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4 bg-purple-100 p-3 rounded-lg shadow-md animate-float delay-500">
                <span className="text-purple-600 font-bold text-xs md:text-sm">
                  TypeScript
                </span>
              </div>

              <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 bg-pink-100 p-3 rounded-lg shadow-md animate-float delay-700">
                <span className="text-pink-600 font-bold text-xs md:text-sm">
                  Redux
                </span>
              </div>

              {/* Side positions */}
              <div className="absolute top-1/2 left-0 transform -translate-x-8 -translate-y-1/2 bg-indigo-100 p-3 rounded-lg shadow-md animate-float delay-1000">
                <span className="text-indigo-600 font-bold text-xs md:text-sm">
                  Material-UI
                </span>
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-8 -translate-y-1/2 bg-cyan-100 p-3 rounded-lg shadow-md animate-float delay-1200 max-w-[60px] md:max-w-[80px]">
                <span className="text-cyan-600 font-bold text-xs md:text-sm truncate block">
                  Slate.js
                </span>
              </div>

              {/* Top and bottom center */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 bg-orange-100 p-3 rounded-lg shadow-md animate-float delay-1500">
                <span className="text-orange-600 font-bold text-xs md:text-sm">
                  Vite
                </span>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 bg-teal-100 p-3 rounded-lg shadow-md animate-float delay-1800">
                <span className="text-teal-600 font-bold text-xs md:text-sm">
                  GraphQL
                </span>
              </div>

              {/* Smaller outer badges - more constrained */}
              <div className="absolute top-8 left-4 transform -translate-x-4 bg-red-100 p-2 rounded-lg shadow-md animate-float delay-2000">
                <span className="text-red-600 font-bold text-[10px] md:text-xs">
                  AI
                </span>
              </div>

              <div className="absolute top-8 right-4 transform translate-x-4 bg-yellow-100 p-2 rounded-lg shadow-md animate-float delay-2200">
                <span className="text-yellow-600 font-bold text-[10px] md:text-xs">
                  D3.js
                </span>
              </div>

              <div className="absolute bottom-8 left-4 transform -translate-x-4 bg-emerald-100 p-2 rounded-lg shadow-md animate-float delay-2400">
                <span className="text-emerald-600 font-bold text-[10px] md:text-xs">
                  Prisma
                </span>
              </div>

              <div className="absolute bottom-8 right-4 transform translate-x-4 bg-violet-100 p-2 rounded-lg shadow-md animate-float delay-2600">
                <span className="text-violet-600 font-bold text-[10px] md:text-xs">
                  Rust
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <ProjectBanner />
      <Skills />
      <MyStory />
    </main>
  );
};

export default Home;
