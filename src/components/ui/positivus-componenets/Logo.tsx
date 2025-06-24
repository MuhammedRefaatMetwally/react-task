const Logo: React.FC<{ companyName: string; logoSrc: string }> = ({
  companyName,
  logoSrc,
}) => (
  <div className="flex items-center space-x-2 justify-center sm:justify-start">
    <img
      className="logo-style"
      src={logoSrc}
      alt={`${companyName} logo`}
      loading="lazy"
    />
    <span className="text-xl sm:text-2xl font-medium">{companyName}</span>
  </div>
);
export default Logo;