// src/pages/Home.jsx
import React from 'react';
import Hero from "../components/Hero";
import Service from "../components/Service";
import About from "../components/About";
import Process from "../components/Process";
import ScrollTop from "../components/ScrollTop";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import '@fontsource/rubik';
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100); 

        navigate("/", { replace: true });
      }
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Service />
      <Process />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Home;
