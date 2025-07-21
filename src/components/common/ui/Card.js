import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-xl shadow-lg';
  
  const variantClasses = {
    default: 'bg-white',
    info: 'bg-blue-50 border border-blue-200',
    product: 'bg-white border border-gray-200',
    stat: 'bg-gradient-to-br from-blue-50 to-indigo-50',
  };
  
  const hoverClasses = hover ? 'pump-card' : '';
  
  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;