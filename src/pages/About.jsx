import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

function About() {
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-aurum-navy text-white pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-aurum-gold">Sobre Nós</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Conheça a história, a missão e a equipe por trás da Aurum Advocacia.</p>
        </div>
      </div>

      {/* Trusted Partner Section */}
      <section className="py-20 bg-gray-900 text-white" id="about">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Seu Parceiro Jurídico de Confiança para Justiça e Proteção</h2>
            <p className="text-gray-400 leading-relaxed mb-4">Seja enfrentando uma disputa legal, buscando aconselhamento jurídico ou precisando de uma defesa dedicada, nossa equipe está aqui para apoiá-lo em cada etapa. Fundada com o princípio de que a justiça deve ser acessível e clara, a Aurum Advocacia tem orgulho de servir a comunidade há mais de 45 anos.</p>
            <p className="text-gray-400 leading-relaxed">Nossa abordagem combina profundo conhecimento jurídico com um atendimento humanizado, garantindo que cada cliente se sinta ouvido e protegido.</p>
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Reunião Jurídica" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border-2 border-aurum-gold p-0.5">
                   <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="CEO" className="w-full h-full rounded-full object-cover" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg leading-tight">João Silva</h3>
                    <span className="text-aurum-gold text-sm font-medium">Sócio-Diretor</span>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold max-w-md">Protegendo Seus Direitos,<br/>Garantindo Seu Futuro</h3>
                <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full hover:bg-aurum-gold hover:text-aurum-navy hover:border-aurum-gold transition-all duration-300" onClick={handleAction}>
                  <Play size={18} fill="currentColor" /> 
                  <span className="font-semibold text-sm">Vídeo de 1 min</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20 bg-aurum-navy text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center md:text-left">Conheça os Especialistas</h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-aurum-gold hover:text-aurum-navy hover:border-aurum-gold transition-all" onClick={handleAction}><ChevronLeft /></button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-aurum-gold hover:text-aurum-navy hover:border-aurum-gold transition-all" onClick={handleAction}><ChevronRight /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <div className="h-[320px] mb-4 overflow-hidden rounded-xl bg-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="João Silva" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold">João Silva</h3>
              <p className="text-aurum-gold text-sm">Advogado Sênior</p>
            </div>
            <div className="group">
              <div className="h-[320px] mb-4 overflow-hidden rounded-xl bg-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Ana Costa" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold">Ana Costa</h3>
              <p className="text-aurum-gold text-sm">Especialista em Família</p>
            </div>
            <div className="group">
              <div className="h-[320px] mb-4 overflow-hidden rounded-xl bg-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Carlos Oliveira" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold">Carlos Oliveira</h3>
              <p className="text-aurum-gold text-sm">Advogado Empresarial</p>
            </div>
            <div className="bg-aurum-gold p-8 rounded-xl flex flex-col justify-center text-aurum-navy h-[320px] md:h-auto lg:h-[320px] lg:mt-0 mt-6">
              <h3 className="text-2xl font-bold mb-4">Equipe Especializada</h3>
              <p className="text-sm font-medium mb-8 leading-relaxed opacity-90">Nossa equipe de profissionais dedicados está aqui para lutar pelos seus direitos e fornecer a melhor representação legal.</p>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-aurum-navy/20 pb-2">
                   <span className="font-bold text-2xl">20+</span>
                   <span className="text-sm self-end font-medium opacity-80">Anos de Exp.</span>
                </li>
                <li className="flex justify-between border-b border-aurum-navy/20 pb-2">
                   <span className="font-bold text-2xl">50+</span>
                   <span className="text-sm self-end font-medium opacity-80">Especialistas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;