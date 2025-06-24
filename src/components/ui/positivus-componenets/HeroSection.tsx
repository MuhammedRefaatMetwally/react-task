import { memo } from "react";
import CompaniesLogo from "./CompaniesLogo";

const HeroSection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content">
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Navigating the
              <br />
              digital landscape
              <br />
              for success
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-xl px-8 py-6 text-base font-medium">
              Book a consultation
            </button>
          </div>

          <div className="flex justify-center relative">
            <div className="relative w-full max-w-md">
              <img src="/images/hero.svg" alt="hero" />
            </div>
          </div>
        </div>
      </section>

     <CompaniesLogo/>
    </>
  );
};

export default  memo(HeroSection);