import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

function About() {
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <div className="page-about">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <h1>Sobre Nós</h1>
          <p>Conheça a história, a missão e a equipe por trás da Aurum Advocacia.</p>
        </div>
      </div>

      {/* Trusted Partner Section (Moved from Home) */}
      <section className="trusted-partner" id="about">
        <div className="container">
          <div className="partner-content">
            <h2>Seu Parceiro Jurídico de Confiança para Justiça e Proteção</h2>
            <p>Seja enfrentando uma disputa legal, buscando aconselhamento jurídico ou precisando de uma defesa dedicada, nossa equipe está aqui para apoiá-lo em cada etapa. Fundada com o princípio de que a justiça deve ser acessível e clara, a Aurum Advocacia tem orgulho de servir a comunidade há mais de 45 anos.</p>
            <p>Nossa abordagem combina profundo conhecimento jurídico com um atendimento humanizado, garantindo que cada cliente se sinta ouvido e protegido.</p>
          </div>
          
          <div className="video-card-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Reunião Jurídica" 
              className="video-bg-image"
            />
            <div className="video-card-overlay"></div>
            <div className="video-card-content">
              <div className="video-info">
                <h3>João Silva</h3>
                <span>Sócio-Diretor, Aurum Advocacia</span>
              </div>
              <div className="video-play">
                <h3>Protegendo Seus Direitos,<br/>Garantindo Seu Futuro</h3>
                <button className="play-btn" onClick={handleAction}><Play size={20} fill="currentColor" /> Vídeo de 1 min</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section (Moved from Home) */}
      <section className="experts">
        <div className="container">
          <div className="experts-header">
            <h2>Conheça os Especialistas da Aurum Advocacia</h2>
            <div className="slider-nav">
              <button className="nav-btn" onClick={handleAction}><ChevronLeft /></button>
              <button className="nav-btn" onClick={handleAction}><ChevronRight /></button>
            </div>
          </div>
          
          <div className="experts-grid">
            <div className="expert-card">
              <img 
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="João Silva" 
                className="expert-img"
              />
              <h3>João Silva</h3>
              <p>Advogado Sênior</p>
            </div>
            <div className="expert-card">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Ana Costa" 
                className="expert-img"
              />
              <h3>Ana Costa</h3>
              <p>Especialista em Família</p>
            </div>
            <div className="expert-card">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Carlos Oliveira" 
                className="expert-img"
              />
              <h3>Carlos Oliveira</h3>
              <p>Advogado Empresarial</p>
            </div>
            <div className="expert-info-card">
              <h3>Equipe Especializada</h3>
              <p>Nossa equipe de profissionais dedicados está aqui para lutar pelos seus direitos e fornecer a melhor representação legal.</p>
              <ul className="expert-stats-list">
                <li><span>20+</span> Anos de Experiência</li>
                <li><span>50+</span> Especialistas Legais</li>
                <li><span>Top</span> Escritório Bem Avaliado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;