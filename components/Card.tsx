
import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CardProps } from '../types';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  className = "", 
  linkText, 
  isMain = false,
  badge,
  onClick
}) => {
  const baseClasses = "relative rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-1 cursor-pointer group overflow-hidden bento-shadow bento-shadow-hover border border-transparent hover:border-black/5";
  
  // Custom mapping for our brand colors if passed as hex or classes
  const bgColor = color.startsWith('#') ? { backgroundColor: color } : {};
  const bgClass = color.startsWith('#') ? "" : color;

  if (isMain) {
    return (
      <div 
        onClick={onClick}
        style={bgColor}
        className={`${baseClasses} ${bgClass} flex flex-col md:flex-row items-center justify-between gap-10 min-h-[350px] ${className}`}
      >
        <div className="flex-1 space-y-6 z-10">
          {badge && (
            <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest bg-black text-white rounded-full">
              {badge}
            </span>
          )}
          <h2 className="text-4xl md:text-6xl font-black text-black leading-[1.1] tracking-tighter">
            {title}
          </h2>
          {description && <p className="text-xl text-black/70 font-medium max-w-xl leading-relaxed">{description}</p>}
          {linkText && (
            <div className="flex items-center gap-3 font-bold text-black border-b-2 border-black w-fit pb-1 group-hover:gap-5 transition-all">
              {linkText} <ArrowRight size={20} />
            </div>
          )}
        </div>
        <div className="flex-shrink-0 z-10">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-black rounded-[2rem] flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-2xl">
            <ArrowRight size={48} strokeWidth={2.5} />
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      style={bgColor}
      className={`${baseClasses} ${bgClass} flex flex-col justify-between min-h-[300px] ${className}`}
    >
      <div className="flex justify-between items-start z-10">
        <div className="p-5 rounded-2xl bg-white text-black inline-flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={24} />
        </div>
      </div>
      
      <div className="mt-8 z-10">
        <h3 className="text-2xl font-extrabold text-black mb-3 leading-tight tracking-tight">{title}</h3>
        {description && <p className="text-sm font-medium text-black/60 mb-6 leading-relaxed line-clamp-3">{description}</p>}
        
        {linkText && (
          <div className="flex items-center gap-2 text-xs font-black text-black/40 uppercase tracking-widest group-hover:text-black transition-colors">
            {linkText} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
      
      {/* Visual touch: Subtle circle decor */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/5 rounded-full blur-xl group-hover:bg-black/10 transition-colors"></div>
    </div>
  );
};

export default Card;
