import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/?scrollTo=${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-black text-white tracking-tighter mb-8 block">
              Pen Technology
            </Link>
            <p className="text-white/40 leading-relaxed font-medium mb-10">
              Transforming ambitious ideas into world-class digital realities through 
              strategic design and high-performance engineering.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "Services", id: "services" },
                { label: "About Us", id: "AboutUs" },
                { label: "Process", id: "process" },
                { label: "Contact", to: "/Contact" }
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => link.id ? handleScrollNavigation(link.id) : navigate(link.to)}
                    className="text-white/40 font-medium hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4">
              {[
                "Web Development",
                "Brand Identity",
                "Software Consulting",
                "Digital Marketing",
                "Business Automation",
                "Cloud Solutions"
              ].map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => handleScrollNavigation("services")}
                    className="text-white/40 font-medium hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Get in Touch</h4>
            <div className="space-y-6">
              <div>
                <span className="text-white/20 block text-[10px] uppercase font-bold tracking-widest mb-1">Direct Line</span>
                <p className="text-white font-medium text-lg">+92 321 2427626</p>
              </div>
              <div>
                <span className="text-white/20 block text-[10px] uppercase font-bold tracking-widest mb-1">Inquiries</span>
                <p className="text-white font-medium text-lg">infoclix@gmail.com</p>
              </div>
              <button 
                onClick={() => navigate("/Contact")}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm font-medium">
            © {new Date().getFullYear()} Pen Technology. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-xs font-bold hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-white/20 text-xs font-bold hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
