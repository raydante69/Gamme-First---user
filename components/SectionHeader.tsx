
import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, badge }) => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4 py-16 md:py-24">
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-bold mb-6 animate-fade-in uppercase tracking-widest text-gray-500">
          <span className="text-yellow-400">✨</span> {badge}
        </div>
      )}
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-none">
        {title}
      </h1>
      {description && (
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto text-balanced">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
