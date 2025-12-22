import React from 'react';
import { Scale, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Scale className="logo-icon" size={24} />
            <span>Aurum Advocacia</span>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>O Escritório</h4>
          <Link to="/about">Sobre Nós</Link>
          <a href="#experts">Nossa Equipe</a>
          <a href="#careers">Carreiras</a>
          <a href="#legal">Aviso Legal</a>
        </div>
        <div className="footer-col">
          <h4>Áreas de Atuação</h4>
          <Link to="/services">Direito Civil</Link>
          <Link to="/services">Direito Penal</Link>
          <Link to="/services">Direito de Família</Link>
          <Link to="/services">Direito Empresarial</Link>
        </div>
        <div className="footer-col">
          <h4>Links Úteis</h4>
          <a href="#blog">Blog</a>
          <a href="#contact">Fale Conosco</a>
          <a href="#privacy">Política de Privacidade</a>
        </div>
        
        <div className="footer-social">
          <h4>Siga-nos em</h4>
          <div className="social-icons">
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Aurum Advocacia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;