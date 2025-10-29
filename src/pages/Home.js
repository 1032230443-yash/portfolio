import React from "react";
import { SiUnity } from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Unity Developer",
    icon: <SiUnity />,
    skills: ["C#", "Game Development", "2D/3D Design"],
    color: "bg-gray-800",
  },
  {
    title: "IoT Engineer",
    icon: <FaMicrochip />,
    skills: ["Embedded Systems", "Sensors", "Automation"],
    color: "bg-green-600",
  },
];

export default function Home() {
  return (
    <section className="pt-24 md:pt-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Hey There, I'm{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Yash Parab
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I’m passionate about building{" "}
              <span className="text-orange-500 font-semibold">
                interactive experiences
              </span>{" "}
              through technology — from intelligent IoT systems to immersive 3D
              environments.
            </p>

            <p className="text-sm sm:text-base font-medium mb-6">
              <a
                href="mailto:yparab05@gmail.com"
                className="hover:text-teal-400 transition"
              >
                yparab05@gmail.com
              </a>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-8">
              <div>
                <h2 className="text-4xl font-extrabold text-teal-500">
                  {new Date().getFullYear() - 2024}+
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Years of Experience
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  Thakur College of Engineering and Technology
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  IoT Engineer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://picsum.photos/300"
                alt="Profile"
                className="relative z-10 rounded-full w-60 h-60 object-cover border-4 border-teal-400 shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Core Skill Areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-transform duration-300 border border-transparent hover:border-teal-400"
              >
                <div className="flex items-center space-x-6">
                  <div
                    className={`${category.color} p-4 rounded-full text-white text-3xl`}
                  >
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {category.skills.join(", ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
