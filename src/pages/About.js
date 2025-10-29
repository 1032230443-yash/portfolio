import React from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaLightbulb, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Me
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Passionate IoT Engineer | Innovating with Creative Solutions
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-2/3 text-center md:text-left"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Hello! I'm{" "}
              <span className="font-semibold text-teal-500">Yash Parab</span>,
              an enthusiastic IoT Engineer dedicated to solving problems through
              innovative and creative solutions. With a strong foundation in
              Internet of Things technologies, I specialize in designing and
              implementing smart systems that enhance everyday life.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My passion lies in exploring new ideas, experimenting with
              sensors, automation, and intelligent systems, and pushing the
              boundaries of what technology can achieve. I thrive in
              collaborative environments that challenge me to learn, adapt, and
              create impactful results.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I’m not working on IoT prototypes or coding in Unity, you’ll
              probably find me exploring emerging tech trends, gaming, or
              learning new creative tools to bring my ideas to life.
            </p>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://picsum.photos/300"
                alt="Yash Parab"
                className="relative z-10 rounded-full w-56 h-56 object-cover border-4 border-teal-400 shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            {
              icon: <FaUserGraduate />,
              title: "Education",
              desc: "B.E. in Internet of Things — Thakur College of Engineering & Technology",
            },
            {
              icon: <FaMicrochip />,
              title: "Expertise",
              desc: "Embedded Systems, Sensors, IoT Networks, Automation",
            },
            {
              icon: <FaLaptopCode />,
              title: "Tech Stack",
              desc: "C, C++, C#, Python, Unity, React, Arduino, ESP32",
            },
            {
              icon: <FaLightbulb />,
              title: "Interests",
              desc: "AI in IoT, Game Development, VR, and Creative Technology",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-teal-400"
            >
              <div className="text-3xl text-teal-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
