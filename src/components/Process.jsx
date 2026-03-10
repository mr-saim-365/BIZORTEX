import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business goals, target audience, and competition to build a solid strategic foundation."
  },
  {
    number: "02",
    title: "Design & Protoyping",
    desc: "Our designers craft immersive visual systems and functional prototypes for early validation."
  },
  {
    number: "03",
    title: "Engineering & Dev",
    desc: "Full-stack experts build your solution using modern, scalable, and secure technologies."
  },
  {
    number: "04",
    title: "Quality Assurance",
    desc: "Meticulous testing across all scenarios ensures a flawless, high-performance launch."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Our <span className="text-primary italic">Workflow</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              We've refined our process to ensure every project is delivered with 
              precision, speed, and strategic impact.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-white/10 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-black text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10 translate-y-1/2"></div>
    </section>
  );
};

export default Process;
