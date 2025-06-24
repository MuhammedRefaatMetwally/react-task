import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Facebook, Twitter } from "lucide-react";
import Navbar from "@/components/ui/positivus-componenets/Narbar";
import HeroSection from "@/components/ui/positivus-componenets/HeroSection";

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

      gsap.from(".service-card", {
        duration: 0.6,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        delay: 1.4,
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

      <HeroSection/>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20" ref={servicesRef}>
        {/* Services Header */}
        <div className="services-title mb-16">
          <div className="inline-block bg-[#B6F09C] px-3 py-2 rounded-lg text-2xl font-bold mb-6">
            Services
          </div>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Search Engine Optimization */}
          <div className="service-card bg-gray-100 rounded-[50px] p-16 border-2 border-black shadow-lg">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <div className="inline-block bg-[#B6F09C] px-3 py-2 rounded-lg text-3xl font-bold mb-8 leading-tight">
                  Search engine
                  <br />
                  optimization
                </div>
                <button className="flex items-center gap-4 text-black hover:gap-6 transition-all duration-300">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold">Learn more</span>
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <path d="M60 60 L140 140" stroke="#000" strokeWidth="3" />
                  <circle cx="100" cy="100" r="25" fill="#000" />
                  <circle cx="70" cy="130" r="10" fill="#000" />
                  <circle cx="130" cy="70" r="10" fill="#000" />
                  <circle cx="150" cy="150" r="8" fill="#B6F09C" />
                </svg>
              </div>
            </div>
          </div>

          {/* Pay-per-click Advertising */}
          <div className="service-card bg-[#B6F09C] rounded-[50px] p-16 border-2 border-black shadow-lg">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <div className="inline-block bg-white px-3 py-2 rounded-lg text-3xl font-bold mb-8 leading-tight">
                  Pay-per-click
                  <br />
                  advertising
                </div>
                <button className="flex items-center gap-4 text-black hover:gap-6 transition-all duration-300">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold">Learn more</span>
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  <rect
                    x="30"
                    y="50"
                    width="140"
                    height="100"
                    rx="15"
                    fill="white"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <circle cx="170" cy="100" r="20" fill="#000" />
                  <path d="M155 90 L185 100 L155 110 Z" fill="white" />
                  <rect x="50" y="70" width="80" height="8" fill="#000" />
                  <rect x="50" y="85" width="60" height="6" fill="#000" />
                  <rect x="50" y="100" width="70" height="6" fill="#000" />
                </svg>
              </div>
            </div>
          </div>

          {/* Social Media Marketing */}
          <div className="service-card bg-black rounded-[50px] p-16 border-2 border-black shadow-lg">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <div className="inline-block bg-white px-3 py-2 rounded-lg text-3xl font-bold mb-8 text-black leading-tight">
                  Social Media
                  <br />
                  Marketing
                </div>
                <button className="flex items-center gap-4 text-white hover:gap-6 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-xl font-semibold">Learn more</span>
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  <rect
                    x="50"
                    y="50"
                    width="100"
                    height="80"
                    rx="15"
                    fill="white"
                    stroke="none"
                  />
                  <circle cx="100" cy="90" r="12" fill="#000" />
                  <rect x="70" y="120" width="60" height="6" fill="#000" />
                  <rect x="80" y="135" width="40" height="6" fill="#000" />
                  <circle cx="60" cy="30" r="8" fill="white" />
                  <circle cx="140" cy="30" r="8" fill="white" />
                  <circle cx="170" cy="160" r="8" fill="white" />
                </svg>
              </div>
            </div>
          </div>

          {/* Email Marketing */}
          <div className="service-card bg-gray-100 rounded-[50px] p-16 border-2 border-black shadow-lg">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <div className="inline-block bg-[#B6F09C] px-3 py-2 rounded-lg text-3xl font-bold mb-8 leading-tight">
                  Email
                  <br />
                  Marketing
                </div>
                <button className="flex items-center gap-4 text-black hover:gap-6 transition-all duration-300">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold">Learn more</span>
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  <rect
                    x="30"
                    y="70"
                    width="140"
                    height="100"
                    rx="8"
                    fill="white"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <path
                    d="M30 70 L100 120 L170 70"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle cx="40" cy="40" r="8" fill="#B6F09C" />
                  <circle cx="160" cy="40" r="6" fill="#FFE492" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Creation */}
          <div className="service-card bg-[#B6F09C] rounded-[50px] p-16 border-2 border-black shadow-lg">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <div className="inline-block bg-white px-3 py-2 rounded-lg text-3xl font-bold mb-8 leading-tight">
                  Content
                  <br />
                  Creation
                </div>
                <button className="flex items-center gap-4 text-black hover:gap-6 transition-all duration-300">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold">Learn more</span>
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  <rect
                    x="40"
                    y="30"
                    width="120"
                    height="140"
                    rx="8"
                    fill="white"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <rect x="55" y="55" width="90" height="12" fill="#B6F09C" />
                  <rect x="55" y="80" width="70" height="6" fill="#000" />
                  <rect x="55" y="95" width="80" height="6" fill="#000" />
                  <rect x="55" y="110" width="60" height="6" fill="#000" />
                  <rect x="55" y="125" width="75" height="6" fill="#000" />
                  <circle cx="180" cy="20" r="8" fill="#FFE492" />
                </svg>
              </div>
            </div>
          </div>

          {/* Analytics and Tracking */}
          <div className="service-card bg-black rounded-[50px] p-16 border-2 border-black shadow-lg">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <div className="inline-block bg-[#B6F09C] px-3 py-2 rounded-lg text-3xl font-bold mb-8 text-black leading-tight">
                  Analytics and
                  <br />
                  Tracking
                </div>
                <button className="flex items-center gap-4 text-white hover:gap-6 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-xl font-semibold">Learn more</span>
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  <rect
                    x="30"
                    y="30"
                    width="140"
                    height="120"
                    rx="8"
                    fill="white"
                    stroke="none"
                  />
                  <rect x="50" y="60" width="12" height="60" fill="#000" />
                  <rect x="75" y="75" width="12" height="45" fill="#000" />
                  <rect x="100" y="50" width="12" height="70" fill="#000" />
                  <rect x="125" y="70" width="12" height="50" fill="#000" />
                  <circle
                    cx="160"
                    cy="60"
                    r="25"
                    fill="white"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <path
                    d="M150 60 L170 60 M160 50 L160 70"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20" ref={ctaRef}>
        <div className="bg-gray-100 rounded-[50px] p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content */}
            <div className="cta-content">
              <h2 className="text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-8">
                Let's make things happen
              </h2>
              <p className="text-xl text-black mb-10 max-w-lg leading-relaxed">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-2xl px-10 py-4 text-xl font-medium">
                Get your free proposal
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="cta-illustration flex justify-center">
              <div className="relative w-full max-w-lg">
                <svg viewBox="0 0 350 300" className="w-full h-auto">
                  {/* Star bursts */}
                  <g stroke="#000" strokeWidth="3" fill="none">
                    <path d="M280 70 L295 45 L310 70 L335 55 L320 85 L295 70 L270 85 L280 55 Z" />
                    <path d="M40 50 L55 25 L70 50 L95 35 L80 65 L55 50 L30 65 L40 35 Z" />
                    <path d="M300 220 L315 195 L330 220 L355 205 L340 235 L315 220 L290 235 L300 205 Z" />
                  </g>

                  {/* Central black circle with face */}
                  <circle cx="175" cy="150" r="50" fill="#000" />
                  <circle cx="155" cy="135" r="10" fill="white" />
                  <circle cx="195" cy="135" r="10" fill="white" />
                  <path
                    d="M150 170 Q175 190 200 170"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                  />

                  {/* Orbital rings */}
                  <ellipse
                    cx="175"
                    cy="150"
                    rx="100"
                    ry="25"
                    fill="none"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <ellipse
                    cx="175"
                    cy="150"
                    rx="125"
                    ry="38"
                    fill="none"
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <ellipse
                    cx="175"
                    cy="150"
                    rx="150"
                    ry="50"
                    fill="none"
                    stroke="#000"
                    strokeWidth="3"
                  />

                  {/* Green diamond */}
                  <path
                    d="M175 230 L195 250 L175 270 L155 250 Z"
                    fill="#B6F09C"
                  />

                  {/* Additional decorative elements */}
                  <circle cx="80" cy="120" r="12" fill="#FFE492" />
                  <circle cx="270" cy="180" r="10" fill="#B6F09C" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191A23] text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="footer-content">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Left Side - Logo and Contact */}
              <div>
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-10">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-lg font-bold">P</span>
                  </div>
                  <span className="text-3xl font-medium">Positivus</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap gap-10 mb-10">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors underline text-lg"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors text-lg"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors text-lg"
                  >
                    Use Cases
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors text-lg"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors text-lg"
                  >
                    Blog
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-5">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <Linkedin className="w-6 h-6 text-black" />
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <Facebook className="w-6 h-6 text-black" />
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                    <Twitter className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Info and Newsletter */}
              <div>
                {/* Contact Section */}
                <div className="mb-10">
                  <div className="inline-block bg-[#B6F09C] text-black px-3 py-2 rounded-lg text-xl font-bold mb-8">
                    Contact us:
                  </div>
                  <div className="space-y-4 text-lg">
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p>
                      Address: 1234 Main St
                      <br />
                      Moonstone City, Stardust State 12345
                    </p>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="flex gap-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-6 py-4 bg-[#292A32] border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6F09C] text-lg"
                  />
                  <Button className="bg-[#B6F09C] text-black hover:bg-[#9CE184] transition-colors rounded-2xl px-8 py-4 text-lg font-medium">
                    Subscribe to news
                  </Button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600 pt-10">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-lg">
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <a
                  href="#"
                  className="hover:text-white transition-colors underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
