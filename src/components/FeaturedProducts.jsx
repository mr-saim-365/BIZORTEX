import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaRocket,
  FaLayerGroup,
  FaCode,
  FaChartBar,
} from "react-icons/fa";

const valueProps = [
  {
    id: "scalable-web-platforms",
    title: "Scalable Web Platforms",
    desc: "We build robust, high-performance web applications designed to grow with your business, ensuring seamless user experiences at any scale.",
    icon: FaRocket,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Automation",
    desc: "Streamline your operations with custom AI-driven automation solutions that reduce manual effort and maximize efficiency.",
    icon: FaLayerGroup,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "secure-architecture",
    title: "Secure Architecture",
    desc: "Security is at the core of our development. We implement enterprise-grade protection to keep your data and users safe.",
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-400"
  },
  {
    id: "brand-driven-design",
    title: "Brand-Driven Design",
    desc: "Our design philosophy merges aesthetics with strategy, creating visual identities that resonate and digital products that delight.",
    icon: FaCode,
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: "performance-insights",
    title: "Performance Insights",
    desc: "Leverage data-driven strategies and advanced analytics to optimize your digital presence and drive measurable growth.",
    icon: FaChartBar,
    color: "from-amber-500 to-yellow-400"
  },
  {
    id: "modern-tech-stack",
    title: "Modern Tech Stack",
    desc: "We utilize the latest technologies to ensure your solutions are future-proof, maintainable, and highly efficient.",
    icon: FaLayerGroup,
    color: "from-indigo-500 to-blue-400"
  },
];

const ProductFeatures = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden bg-[#050505]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
              Exceptional Results <br />
              <span className="text-primary italic">Through Innovation</span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed font-medium">
              We combine strategy, design, and engineering to build digital products 
              that help modern companies scale and succeed.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link to={`/blog/${prop.id}`} className="block h-full">
                <div className="p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                  {/* Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${prop.color} shadow-lg relative z-10`}>
                    <prop.icon className="text-3xl text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10">
                    {prop.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed font-medium mb-8 relative z-10 flex-grow">
                    {prop.desc}
                  </p>

                  <div className="flex items-center gap-2 group/btn relative z-10">
                    <span className="text-sm font-bold tracking-wider uppercase text-white/20 group-hover:text-white transition-colors">Read Case Study</span>
                    <FaArrowRight className="text-xs text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
