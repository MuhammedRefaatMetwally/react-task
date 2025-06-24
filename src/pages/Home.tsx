import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Facebook, Twitter } from "lucide-react";
import Navbar from "@/components/ui/positivus-componenets/Narbar";
import HeroSection from "@/components/ui/positivus-componenets/HeroSection";
import ServicesSection from "@/components/ui/positivus-componenets/ServicesSection";
import CTASection from "@/components/ui/positivus-componenets/CTASection";
import Footer from "@/components/ui/positivus-componenets/Footer";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const logoSectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.from(".hero-content", {
        duration: 1,
        x: -50,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out",
      });

      // Illustration animation
      gsap.from(".hero-illustration", {
        duration: 1.2,
        x: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out",
      });

      // Company logos animation
      gsap.from(".company-logo", {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
        ease: "power2.out",
      });

      // Services section animation
      gsap.from(".services-title", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        delay: 1.2,
        ease: "power2.out",
      });

      // CTA section animation
      gsap.from(".cta-content", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        delay: 1.8,
        ease: "power2.out",
      });

      gsap.from(".cta-illustration", {
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 2,
        ease: "power2.out",
      });

      // Footer animation
      gsap.from(".footer-content", {
        duration: 0.6,
        y: 30,
        opacity: 0,
        delay: 2.2,
        ease: "power2.out",
      });

      // Floating animation for illustration
      gsap.to(".hero-illustration", {
        duration: 3,
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Floating animation for CTA illustration
      gsap.to(".cta-illustration", {
        duration: 4,
        y: -15,
        rotation: 5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
