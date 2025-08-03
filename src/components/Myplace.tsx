import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const Myplace = () => {
  return (
    <section className="pb-20">
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40%_60%]">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            My Tech Stack.
          </h3>
          <div className="flex flex-col flex-nowrap justify-center gap-5 items-baseline w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-gray-100">
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-purple-600 text-white py-2 px-4 rounded-lg font-medium">
                  React.js & Next.js
                </div>
                <Star className="text-purple-600" />
                <div className="bg-purple-600 text-white py-2 px-4 rounded-lg font-medium">
                  TypeScript Expert
                </div>
                <Star className="text-purple-600" />
                <div className="bg-purple-600 text-white py-2 px-4 rounded-lg font-medium">
                  AI Integration (Gemini)
                </div>
                <Star className="text-purple-600" />
                <span className="w-8"></span>
              </div>
            </Marquee>
            <Marquee direction="right" speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium">
                  Material-UI & Slate.js
                </div>
                <Star className="text-blue-600" />
                <div className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium">
                  Workflow Builder Systems
                </div>
                <Star className="text-blue-600" />
                <div className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium">
                  Component Libraries
                </div>
                <Star className="text-blue-600" />
                <span className="w-8"></span>
              </div>
            </Marquee>
            <Marquee speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium">
                  Hardware Integration
                </div>
                <Star className="text-green-600" />
                <div className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium">
                  WebAssembly (Rust)
                </div>
                <Star className="text-green-600" />
                <div className="bg-green-600 text-white py-2 px-4 rounded-lg font-medium">
                  Monorepo Architecture
                </div>
                <Star className="text-green-600" />
                <span className="w-8"></span>
              </div>
            </Marquee>
            <Marquee direction="right" speed={30}>
              <div className="flex gap-5 items-center">
                <div className="bg-orange-600 text-white py-2 px-4 rounded-lg font-medium">
                  Enterprise Solutions
                </div>
                <Star className="text-orange-600" />
                <div className="bg-orange-600 text-white py-2 px-4 rounded-lg font-medium">
                  Performance Optimization
                </div>
                <Star className="text-orange-600" />
                <div className="bg-orange-600 text-white py-2 px-4 rounded-lg font-medium">
                  International Experience
                </div>
                <Star className="text-orange-600" />
                <span className="w-8"></span>
              </div>
            </Marquee>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            My Current Location.
          </h3>
          <div className="relative w-full h-64 sm:h-80 lg:h-[250px] overflow-hidden rounded-lg shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.3398661227!2d77.04417055625!3d28.527554649665853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1734796800000!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-gray-50 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-gray-800 font-semibold">
                Currently Based in Noida
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Working as Sr. Frontend Engineer at GEDU Services, building
              enterprise-grade applications while being open to remote
              collaboration opportunities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myplace;
