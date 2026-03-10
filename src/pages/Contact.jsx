"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      setStatus("error");
      return;
    }

    const serviceId = "service_rmw1h2s";
    const templateId = "template_ff2x5wo";
    const publicKey = "1T9xbZKxb37vbLUVd";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("emailError");
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Connection</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                Let's Build Your <br />
                <span className="text-primary italic">Digital Legacy</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed font-medium">
                Ready to transform your vision into a high-performance digital reality? 
                Reach out today and let's start the journey.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-10 text-white">Contact Information</h2>
                
                <div className="space-y-8">
                  {[
                    { icon: <FaPhoneAlt />, title: "Call Us", details: "+92 321 2427626", sub: "Mon-Fri from 9am to 6pm" },
                    { icon: <FaEnvelope />, title: "Email Us", details: "infoclix@gmail.com", sub: "We'll respond within 24 hours" },
                    { icon: <FaMapMarkerAlt />, title: "Visit Us", details: "Digital Plaza, Tech District", sub: "Schedule an appointment first" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-white font-medium">{item.details}</p>
                        <p className="text-white/30 text-sm">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Accent */}
              <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent border border-white/5 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Strategic Partnership</h4>
                  <p className="text-white/50 leading-relaxed">
                    We don't just take orders. We become your technical partners, 
                    deeply invested in your project's long-term success.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-0"></div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-3xl relative"
              >
                {/* Form Glow */}
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
                
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/30 ml-4">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/30 ml-4">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-medium"
                        />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/30 ml-4">Phone Number</label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/30 ml-4">Tell us about your project</label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your vision..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-all h-40 resize-none font-medium"
                    />
                  </div>

                  {status === "success" && (
                    <p className="text-green-400 font-bold text-center">Message sent successfully! We'll reach out soon.</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400 font-bold text-center">Please fill all fields to proceed.</p>
                  )}
                  {status === "emailError" && (
                    <p className="text-red-400 font-bold text-center">Service temporarily unavailable. Please email us directly.</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-primary/80 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group uppercase tracking-widest"
                  >
                    Transmit Message
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
