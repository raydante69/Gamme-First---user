
import React from 'react';

interface HeaderProps {
  onHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHome }) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-start">
        <div 
          onClick={onHome}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <span className="text-3xl font-[900] tracking-tighter text-black">
            Guide MyU<span className="text-myu-teal">.</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
