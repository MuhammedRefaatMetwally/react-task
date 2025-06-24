import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/ui/positivus-componenets/Narbar";
import HeroSection from "@/components/ui/positivus-componenets/HeroSection";
import ServicesSection from "@/components/ui/positivus-componenets/ServicesSection";
import CTASection from "@/components/ui/positivus-componenets/CTASection";
import Footer from "@/components/ui/positivus-componenets/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power2.out",
      });

      gsap.from(servicesRef.current, {
        duration: 0.8,
        y: 80,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(ctaRef.current, {
        duration: 0.8,
        y: 80,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(footerRef.current, {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <div ref={ctaRef}>
        <CTASection />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;