/**
 * Modern CTA Button Component with Primary and Secondary variants
 */

const CTAButton = ({ 
  text, 
  variant = "primary", 
  icon = null, 
  href = "#", 
  onClick = null,
  target = null,
  className = ""
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-0.5",
    secondary: "bg-transparent border-2 border-gray-400 text-gray-300 hover:border-white hover:text-white hover:bg-white/5"
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span>{text}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </a>
  );
};

export default CTAButton;
