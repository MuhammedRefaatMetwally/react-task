import { DEFAULT_COMPANIES } from '@/lib/constants';
import type { Company , CompaniesLogoProps } from '@/lib/types';
import React , { memo } from 'react';


const LOGO_STYLES = `
  h-10 w-auto object-contain 
  filter grayscale brightness-0 opacity-60 
  hover:opacity-80 hover:scale-105 
  transition-all duration-300 
  flex-shrink-0 cursor-pointer
`.replace(/\s+/g, ' ').trim();

const CompanyLogo: React.FC<{ company: Company }> = ({ company }) => (
  <img
    src={company.logo}
    alt={company.alt}
    className={LOGO_STYLES}
    loading="lazy"
    onError={(e) => {
      console.warn(`Failed to load logo for ${company.name}`);
      e.currentTarget.style.display = 'none';
    }}
  />
);

const CompaniesLogo: React.FC<CompaniesLogoProps> = ({ 
  className = '',
  companies = DEFAULT_COMPANIES 
}) => {
  if (!companies.length) {
    return null;
  }

  return (
    <section 
      className={`max-w-7xl mx-auto px-6 py-20 ${className}`}
      aria-label="Companies that trust us"
    >
      <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12 xl:gap-16">
        {companies.map((company) => (
          <CompanyLogo 
            key={company.name} 
            company={company} 
          />
        ))}
      </div>
    </section>
  );
};

export default memo(CompaniesLogo);
