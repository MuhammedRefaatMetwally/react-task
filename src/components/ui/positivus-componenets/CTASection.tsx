const CTASection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gray-100 rounded-[50px] px-8 py-12 lg:px-16 lg:py-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl	 lg:text-5xl xl:text-6xl font-medium text-black leading-tight whitespace-nowrap">
              Let's make things happen
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Contact us today to learn more about how our digital marketing services can help your business grow and
              succeed online.
            </p>    
            <button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-xl px-6 py-6 text-base font-medium inline-flex items-center gap-2 hover:scale-105 mt-4">
              Get your free proposal
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <img src="/images/cta.svg" alt="cta-img" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
