import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import profileImg from "../../../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Arjun- Frontend Developer",
  description:
    "Get in touch with Arjunfor web development projects, collaborations, and job opportunities.",
  keywords: [
    "Contact Arjun",
    "Hire Frontend Developer",
    "React Developer Contact",
    "Next.js Developer Contact",
    "Web Developer Consultation",
    "Freelance Web Developer",
    "Work with Arjun",
    "JavaScript Developer for Hire",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/20FD61NY/image.png",
    title: "Contact | Arjun- Frontend Developer",
    description:
      "Get in touch with Arjunfor web development projects, collaborations, and job opportunities.",
  },
  twitter: {
    images: "https://i.ibb.co/20FD61NY/image.png",
    title: "Contact | Arjun- Frontend Developer",
    description:
      "Get in touch with Arjunfor web development projects, collaborations, and job opportunities.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Contact = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Hero Section with Enhanced Design */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Section with Enhanced Typography */}
            <div className="text-center lg:text-left lg:w-1/2 space-y-8">
              {/* Header with Animation */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold leading-tight animate-fade-in-up">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent animate-fade-in-up delay-200">
                    Get In
                  </span>
                  <span className="text-gray-800 animate-fade-in-up delay-300">
                    Touch
                  </span>
                  <span className="text-purple-600 animate-fade-in-up delay-400">
                    .
                  </span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                  Ready to bring your ideas to life? {`Let's`} collaborate on
                  your next project.
                  {`I'm`} here to help you create{" "}
                  <span className="text-purple-600 font-semibold">
                    amazing digital experiences
                  </span>{" "}
                  that your users will love.
                </p>

                {/* Contact Highlights */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-600">
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Quick Response
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Free Consultation
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Flexible Pricing
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 animate-fade-in-up delay-700">
                {/* Email */}
                <Link
                  href="mailto:Arjunarawatyt@gmail.com"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-purple-200"
                >
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-gray-800 font-semibold">
                      Arjunarawatyt@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Phone */}
                <Link
                  href="tel:+919690508043"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-purple-200"
                >
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="text-gray-800 font-semibold">
                      +91 9690508043
                    </p>
                  </div>
                </Link>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">
                      Location
                    </p>
                    <p className="text-gray-800 font-semibold">India</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">
                      Availability
                    </p>
                    <p className="text-gray-800 font-semibold">
                      Available for new projects
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/919690508043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-green-200"
                >
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-200">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.92 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">
                      WhatsApp
                    </p>
                    <p className="text-gray-800 font-semibold">
                      +91 9690508043
                    </p>
                  </div>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com/un_finished_sentenc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-pink-200"
                >
                  <div className="p-3 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors duration-200">
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.13.54c-.77.24-1.42.56-2.07 1.21-.65.65-.97 1.3-1.21 2.07-.23.74-.412 1.64-.47 2.92C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.18.47 2.92.24.77.56 1.42 1.21 2.07.65.65 1.3.97 2.07 1.21.74.23 1.64.412 2.92.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.24 2.92-.47.77-.24 1.42-.56 2.07-1.21.65-.65.97-1.3 1.21-2.07.23-.74.412-1.64.47-2.92.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.18-.47-2.92-.24-.77-.56-1.42-1.21-2.07-.65-.65-1.3-.97-2.07-1.21-.74-.23-1.64-.412-2.92-.47C15.668.012 15.264 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.844a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">
                      Instagram
                    </p>
                    <p className="text-gray-800 font-semibold">
                      @un_finished_sentenc
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative flex items-center justify-center w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 animate-fade-in-up delay-300">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-purple-300 shadow-xl overflow-hidden">
                <Image
                  src={profileImg}
                  alt="Arjun Singh Rawat - Frontend Developer"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 animate-fade-in-up delay-800">
        <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                {`Let's`} Start Your Project
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to
              discuss possibilities,
              {`I'm`} here to help. {`Let's`} create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:Arjunarawatyt@gmail.com"
                className="group px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </Link>
              <Link
                href="https://rawat4arjuna.github.io/portfolio/ArjunResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
