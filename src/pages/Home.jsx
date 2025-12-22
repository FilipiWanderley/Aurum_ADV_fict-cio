import React from 'react';
import { Scale, Shield, Users, Briefcase, ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <>
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Defendendo Seus Direitos com Integridade</h1>
            <p className="hero-slogan">Excelência e tradição na defesa dos seus direitos.</p>
            <p>Somos um escritório de advocacia dedicado a proteger os direitos dos nossos clientes e oferecer consultoria jurídica especializada para indivíduos e empresas.</p>
            <button className="btn-light" onClick={handleAction}>Consultoria Gratuita</button>
            
            <div className="hero-stat-card">
              <div className="stat-icon-box"></div>
              <div className="stat-text">
                <span className="stat-number">45+</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Escritório de Advocacia" 
              className="hero-image"
            />
            <div className="trust-badge">
              <div className="avatars">
                <span></span><span></span><span></span><span></span>
              </div>
              <p>Confiado por <strong>15k+</strong> clientes</p>
            </div>
          </div>
        </div>
      </header>

      {/* Services Preview Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Serviços Jurídicos</h2>
            <p>Oferecemos uma ampla gama de serviços jurídicos adaptados às suas necessidades.</p>
            <Link to="/services"><button className="btn-outline">Ver Todos os Serviços</button></Link>
          </div>
          
          <div className="services-grid">
            <div className="service-card active">
              <div className="service-icon"><Scale /></div>
              <h3>Direito Civil</h3>
              <p>Orientação especializada para disputas civis e questões legais.</p>
              <button className="btn-circle" onClick={handleAction}><ArrowRight size={16} /></button>
            </div>
            <div className="service-card">
              <div className="service-icon"><Shield /></div>
              <h3>Direito Penal</h3>
              <p>Estratégias de defesa para acusações criminais e litígios.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Users /></div>
              <h3>Direito de Família</h3>
              <p>Apoio compassivo para questões legais familiares.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Briefcase /></div>
              <h3>Direito Empresarial</h3>
              <p>Soluções jurídicas para empresas e corporações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="track-record">
        <div className="container track-container">
          <div className="track-text">
            <h2>Um Histórico Comprovado de Excelência em Serviços Jurídicos</h2>
            <p>Nossos resultados falam por si. Estamos comprometidos com a excelência em cada caso que assumimos.</p>
          </div>
          <div className="track-stats">
            <div className="stat-box dark">
              <span className="stat-num">1,500+</span>
              <span className="stat-desc">Casos Vencidos</span>
            </div>
            <div className="stat-box light">
              <span className="stat-num">3,200+</span>
              <span className="stat-desc">Clientes Atendidos</span>
            </div>
            <div className="stat-box white">
              <span className="stat-num">99%</span>
              <span className="stat-desc">Taxa de Sucesso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Confiado por Centenas, Comprovado pelos Resultados</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="client-header">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Jéssica Souza" 
                  className="client-img"
                />
                <div>
                  <h4>Jéssica Souza</h4>
                  <span>Dona de Casa</span>
                </div>
              </div>
              <p>"Passar por uma disputa de guarda foi estressante, mas a Aurum Advocacia me deu um apoio excepcional. Graças à expertise deles, consegui a guarda total dos meus filhos. Não tenho como agradecer o suficiente!"</p>
              <div className="testimonial-footer">
                <button className="btn-text" onClick={handleAction}>Ler Caso</button>
                <span className="date">há 2 dias</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="client-header">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Marcos Roberto" 
                  className="client-img"
                />
                <div>
                  <h4>Marcos Roberto</h4>
                  <span>Engenheiro</span>
                </div>
              </div>
              <p>"A Aurum Advocacia nos ajudou a resolver uma disputa contratual complexa com profissionalismo e eficiência. A equipe jurídica garantiu um acordo favorável, economizando milhares para nossa empresa. Altamente recomendado!"</p>
              <div className="testimonial-footer">
                <button className="btn-text" onClick={handleAction}>Ler Caso</button>
                <span className="date">há 5 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>Precisa de Assistência Jurídica Especializada?</h2>
            <p>Nossos advogados estão prontos para ajudá-lo a resolver suas questões legais com confiança.</p>
          </div>
          <div className="cta-actions">
            <button className="btn-white" onClick={handleAction}>Contate-nos</button>
            <button className="btn-outline-white" onClick={handleAction}>Vamos Conversar</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;