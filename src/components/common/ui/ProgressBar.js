import React from 'react';

const ProgressBar = ({ 
  value = 0, 
  max = 100,
  variant = 'primary',
  color,
  size = 'md',
  showLabel = false,
  className = '',
  height,
  ...props 
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const baseClasses = 'w-full rounded-full overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-blue-200',
    success: 'bg-green-200',
    warning: 'bg-yellow-200',
    danger: 'bg-red-200',
    esg: 'bg-emerald-200',
  };
  
  const barVariantClasses = {
    primary: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600',
    esg: 'bg-emerald-600',
  };
  
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };
  
  // Custom color classes
  const getColorClasses = () => {
    if (!color) return {
      bg: variantClasses[variant],
      bar: barVariantClasses[variant]
    };
    
    return {
      bg: `bg-${color}-200`,
      bar: `bg-${color}-600`
    };
  };
  
  const colorClasses = getColorClasses();
  const heightClass = height || sizeClasses[size];
  
  return (
    <div className={`${className}`}>
      <div className={`${baseClasses} ${colorClasses.bg} ${heightClass}`} {...props}>
        <div 
          className={`${colorClasses.bar} h-full esg-progress`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-xs text-right font-medium">
          {percentage.toFixed(0)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;