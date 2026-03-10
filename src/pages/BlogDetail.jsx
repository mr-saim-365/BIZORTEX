import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogs } from "../data/blogData";
import { FaArrowLeft, FaClock, FaCalendarAlt, FaUser } from "react-icons/fa";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all"
            >
              <FaArrowLeft /> Back to Home
            </Link>
            <span className="block text-primary font-black uppercase tracking-[0.3em] text-sm mb-6">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/40 font-medium text-sm">
              <div className="flex items-center gap-2">
                <FaUser className="text-primary" />
                {blog.author}
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                {blog.date}
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-primary" />
                {blog.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full -z-10"></div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-crimson max-w-none"
            >
              <div 
                className="blog-content text-white/70 leading-[1.8] text-lg font-medium space-y-8"
                dangerouslySetInnerHTML={{ __html: blog.content }} 
              />
            </motion.div>

            {/* Share / Footer of Article */}
            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                 <div className={`w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20`}>
                   <blog.icon size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-white uppercase tracking-widest text-xs">Category</h4>
                   <p className="text-white/40 text-sm">{blog.category}</p>
                 </div>
              </div>
              
              <button 
                onClick={() => navigate("/Contact")}
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-xl"
              >
                Inquire about {blog.category}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
