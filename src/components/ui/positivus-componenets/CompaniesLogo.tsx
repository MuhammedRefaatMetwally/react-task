const CompaniesLogo = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12 xl:gap-16">
        {/* Amazon */}
        <img 
          src="/images/amazon.svg" 
          alt="Amazon" 
          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
        />
        
        {/* Dribbble */}
        <img 
          src="/images/dribbble.svg" 
          alt="Dribbble" 
          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
        />
        
        {/* HubSpot */}
        <img 
          src="/images/hubspot.svg" 
          alt="HubSpot" 
          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
        />
        
        {/* Notion */}
        <img 
          src="/images/notion.svg" 
          alt="Notion" 
          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
        />
        
        {/* Netflix */}
        <img 
          src="/images/netflix.svg" 
          alt="Netflix" 
          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
        />
        
        {/* Zoom */}
        <img 
          src="/images/zoom.svg" 
          alt="Zoom" 
          className="h-10 w-auto object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 flex-shrink-0 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default CompaniesLogo;