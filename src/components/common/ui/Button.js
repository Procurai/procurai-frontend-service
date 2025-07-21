import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white hover:from-green-700 hover:via-blue-700 hover:to-purple-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="flex items-center justify-center space-x-2">
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;