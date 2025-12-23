import React, { useState, useEffect } from 'react';
import { Scale, Search, Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-aurum-navy/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="logo flex items-center gap-2 text-white relative z-50">
          <Scale className="text-aurum-gold" size={32} />
          <span className="font-serif text-2xl font-bold tracking-tight">Aurum Advocacia</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="nav-links hidden md:flex gap-8 items-center">
          {[
            { path: '/', label: 'Início' },
            { path: '/about', label: 'Sobre Nós' },
            { path: '/services', label: 'Serviços' }
          ].map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-aurum-gold ${location.pathname === link.path ? 'text-aurum-gold' : 'text-gray-300'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions hidden md:flex items-center gap-6 text-white">
          <Search className="cursor-pointer hover:text-aurum-gold transition-colors" size={20} />
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Phone size={14} className="text-aurum-gold" />
            </div>
            <span>+55 11 99999-9999</span>
          </div>
          <button 
            className="bg-aurum-gold text-aurum-navy px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300" 
            onClick={handleAction}
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-aurum-navy/98 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <ul className="flex flex-col gap-8 text-center">
            {[
              { path: '/', label: 'Início' },
              { path: '/about', label: 'Sobre Nós' },
              { path: '/services', label: 'Serviços' }
            ].map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`text-2xl font-serif font-bold tracking-wide transition-colors duration-300 ${location.pathname === link.path ? 'text-aurum-gold' : 'text-white'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 flex flex-col gap-6 items-center">
            <button 
              className="bg-aurum-gold text-aurum-navy px-8 py-3 rounded-full font-bold text-lg w-full max-w-xs" 
              onClick={handleAction}
            >
              Fale Conosco
            </button>
            <div className="flex items-center gap-3 text-white/80">
              <Phone size={18} className="text-aurum-gold" />
              <span>+55 11 99999-9999</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;