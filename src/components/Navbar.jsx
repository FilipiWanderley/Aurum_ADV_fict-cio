import React from 'react';
import { Scale, Search, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const location = useLocation();
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Scale className="logo-icon" size={28} />
          <span>Aurum Advocacia</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Sobre Nós</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Serviços</Link></li>
        </ul>
        <div className="nav-actions">
          <Search className="icon" size={20} />
          <div className="nav-phone">
            <Phone size={16} />
            <span>+55 11 99999-9999</span>
          </div>
          <button className="btn-primary" onClick={handleAction}>Fale Conosco</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;