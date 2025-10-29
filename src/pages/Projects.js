import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Home Automation System",
    description:
      "An IoT-based system that automates home appliances using sensors and microcontrollers, controllable through a mobile app and voice commands.",
    tech: ["Arduino", "ESP32", "Blynk", "Sensors"],
    github: "https://github.com/yourusername/smart-home-automation",
    demo: "",
    image: "https://lockly.com/cdn/shop/articles/1f18351be1a17919d522415863c7556c_dbc2e156-6cba-457f-8242-ada4addfd8bf.jpg?v=1754644516&width=1000",
  },
  {
    title: "Endless Flappy Bird 2D Game",
    description:
      "A Unity-based 2D game inspired by Original Flappy bird, featuring power-ups, procedural generation, and smooth controls for a fun experience.",
    tech: ["Unity", "C#", "Blender"],
    github: "https://github.com/yourusername/endless-runner",
    demo: "",
    image: "https://www.cnet.com/a/img/resize/82be9fa334e30e09643f0f91b6af394a172dc3a9/hub/2014/02/11/c61824de-a5c9-11e3-a24e-d4ae52e62bcc/Screen_shot_2014-02-11_at_10.55.15_AM.png?auto=webp&fit=crop&height=675&width=1200",
  },
  {
    title: "Weather Monitoring Dashboard",
    description:
      "A real-time weather data visualization system using IoT sensors and a web dashboard for temperature, humidity, and air quality monitoring.",
    tech: ["React", "Node.js", "MQTT", "IoT"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of my favorite projects that blend{" "}
            <span className="text-teal-500 font-semibold">technology</span> and{" "}
            <span className="text-orange-500 font-semibold">creativity</span>.
            Each project represents my learning journey and problem-solving
            skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-teal-400"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-teal-100 dark:bg-teal-700/30 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-teal-500 transition"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
