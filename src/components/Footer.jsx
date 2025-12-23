import React from 'react';
import { Scale, Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (
    <footer className="bg-aurum-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Scale className="text-aurum-gold" size={32} />
              <span className="font-serif text-2xl font-bold tracking-tight">Aurum Advocacia</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Excelência jurídica com integridade e dedicação. Seu parceiro de confiança para todas as questões legais há mais de 45 anos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aurum-gold hover:text-aurum-navy transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aurum-gold hover:text-aurum-navy transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aurum-gold hover:text-aurum-navy transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aurum-gold hover:text-aurum-navy transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-aurum-gold">O Escritório</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-aurum-gold transition-colors">Sobre Nós</Link></li>
              <li><a href="#experts" className="hover:text-aurum-gold transition-colors">Nossa Equipe</a></li>
              <li><a href="#careers" className="hover:text-aurum-gold transition-colors">Carreiras</a></li>
              <li><a href="#legal" className="hover:text-aurum-gold transition-colors">Aviso Legal</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-aurum-gold">Áreas de Atuação</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-aurum-gold transition-colors">Direito Civil</Link></li>
              <li><Link to="/services" className="hover:text-aurum-gold transition-colors">Direito Penal</Link></li>
              <li><Link to="/services" className="hover:text-aurum-gold transition-colors">Direito de Família</Link></li>
              <li><Link to="/services" className="hover:text-aurum-gold transition-colors">Direito Empresarial</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-aurum-gold">Fale Conosco</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-aurum-gold mt-0.5 shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista,<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-aurum-gold shrink-0" />
                <span>+55 11 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-aurum-gold shrink-0" />
                <span>contato@aurum.adv.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aurum Advocacia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;