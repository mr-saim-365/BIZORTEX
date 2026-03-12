import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaLightbulb, FaShieldAlt } from "react-icons/fa";

const coreValues = [
  {
    icon: <FaLightbulb className="text-primary" />,
    title: "Innovative Approach",
    desc: "We don't follow trends; we set them by combining experimental tech with proven strategies."
  },
  {
    icon: <FaAward className="text-primary" />,
    title: "Premium Quality",
    desc: "Every pixel, line of code, and strategic decision is crafted with meticulous attention to detail."
  },
  {
    icon: <FaShieldAlt className="text-primary" />,
    title: "Absolute Reliability",
    desc: "We build secure, scalable solutions that you can trust to power your business 24/7."
  }
];

const About = () => {
  return (
    <section id="AboutUs" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              Redefining the <br />
              <span className="text-primary italic">Digital Frontier</span>
            </h2>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Pen Technology is a premier digital solutions agency dedicated to transforming 
              ambitious ideas into world-class software and brand experiences. 
              We bridge the gap between imagination and technical execution.
            </p>
            <p className="text-lg text-white/40 mb-12 leading-relaxed">
              Founded on the principles of innovation and excellence, we help startups 
              and global enterprises navigate the complexities of the digital age. 
              Our approach is strategic, our designs are intentional, and our engineering is robust.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl" />
                  <span className="text-white/80 font-bold">Strategic Partnership</span>
               </div>
               <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl" />
                  <span className="text-white/80 font-bold">Human-Centric Design</span>
               </div>
               <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl" />
                  <span className="text-white/80 font-bold">Cutting-Edge Tech</span>
               </div>
               <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl" />
                  <span className="text-white/80 font-bold">Performance Mapping</span>
               </div>
            </div>
          </motion.div>

          {/* Visual/Cards Right */}
          <div className="grid grid-cols-1 gap-6 relative">
            {/* Absolute element for depth */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-[3rem]"></div>
            
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex gap-6 items-start">
                   <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {value.icon}
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                      <p className="text-white/40 leading-relaxed">{value.desc}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
