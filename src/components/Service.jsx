import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const services = [
  {
    id: "web",
    title: "Web Platforms & Ecosystems",
    shortDesc: "Scalable, high-performance digital experiences.",
    longDesc: "We craft responsive and visually stunning websites with user-friendly interfaces. Using modern technologies like React, Next.js, and Tailwind CSS, we ensure your web presence stands out and performs seamlessly across all devices. We focus on scalability, security, and exceptional performance.",
    accent: "#e11d48",
  },
  {
    id: "brand",
    title: "Brand Identity & Strategy",
    shortDesc: "Compelling visual narratives for modern brands.",
    longDesc: "We create unique and memorable logos and brand systems that represent the essence of your brand. Our design team works closely with you to understand your business and develop a visual identity that reflects your values and resonates with your target audience.",
    accent: "#7c3aed",
  },
  {
    id: "soft",
    title: "Software Consultancy",
    shortDesc: "Strategic technical guidance and architecture.",
    longDesc: "Our software consultants provide expert guidance to help you navigate the complex world of technology solutions. We help you optimize your software infrastructure, select the right tech stack, and implement best practices to drive efficiency and innovation.",
    accent: "#3b82f6",
  },
  {
    id: "mktg",
    title: "Digital Growth & Marketing",
    shortDesc: "Data-driven strategies for global reach.",
    longDesc: "We offer comprehensive digital marketing solutions to help you reach and interact with your audience. We combine strategy, creativity, and tech to grow your brand online through SEO, performance marketing, and social strategy.",
    accent: "#10b981",
  },
  {
    id: "biz",
    title: "Business Automation",
    shortDesc: "Streamlining operations through technology.",
    longDesc: "We offer expert account and business consultancy to streamline your financial and operational processes, improve profitability, and ensure compliance with sound technical advice and intelligent automation strategy.",
    accent: "#f59e0b",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Accent Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10 blur-[150px] rounded-full transition-colors duration-1000"
        style={{ backgroundColor: services[hoveredIndex].accent }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Expertise</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Strategic Solutions <br />
              <span className="text-white/20 italic">for Complex Challenges</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              We provide a full spectrum of digital solutions designed to accelerate 
              your growth and streamline your operations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Services List */}
          <div className="flex flex-col border-t border-white/10">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`py-10 border-b border-white/10 cursor-pointer group relative overflow-hidden`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-8">
                     <span className={`text-sm font-bold transition-colors duration-300 ${hoveredIndex === idx ? 'text-primary' : 'text-white/20'}`}>
                        {String(idx + 1).padStart(2, "0")}
                     </span>
                     <h3 className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${hoveredIndex === idx ? 'text-white translate-x-2' : 'text-white/40'}`}>
                        {service.title}
                     </h3>
                  </div>
                  <div className={`transition-all duration-300 ${hoveredIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      <FaChevronRight className="text-primary text-xl" />
                  </div>
                </div>

                {/* Hover Background Accent */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Service Description */}
          <div className="sticky top-32 h-fit bg-white/[0.02] border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="w-16 h-1 mb-8"
                  style={{ backgroundColor: services[hoveredIndex].accent }}
                ></div>
                <h4 className="text-3xl font-bold text-white mb-6">
                  {services[hoveredIndex].shortDesc}
                </h4>
                <p className="text-lg text-white/50 leading-relaxed mb-10">
                  {services[hoveredIndex].longDesc}
                </p>
                <button
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                    else window.location.href = "/Contact";
                  }}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                   Discussion Call
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
