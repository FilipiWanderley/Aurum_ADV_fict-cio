import React from 'react';
import { 
  Search, 
  Phone, 
  ArrowRight, 
  Scale, 
  Shield, 
  Users, 
  Briefcase, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import './App.css';

function App() {
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            <Scale className="logo-icon" size={28} />
            <span>Aurum Advocacia</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className="active">Início</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#services">Serviços</a></li>
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

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Serviços Jurídicos</h2>
            <p>Oferecemos uma ampla gama de serviços jurídicos adaptados às suas necessidades.</p>
            <button className="btn-outline" onClick={handleAction}>Ver Todos os Serviços</button>
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

      {/* Trusted Partner Section */}
      <section className="trusted-partner" id="about">
        <div className="container">
          <div className="partner-content">
            <h2>Seu Parceiro Jurídico de Confiança para Justiça e Proteção</h2>
            <p>Seja enfrentando uma disputa legal, buscando aconselhamento jurídico ou precisando de uma defesa dedicada, nossa equipe está aqui para apoiá-lo em cada etapa.</p>
            <button className="btn-light-outline" onClick={handleAction}>Saiba Mais</button>
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

      {/* Experts Section */}
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
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
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

      {/* Footer */}
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
            <a href="#about">Sobre Nós</a>
            <a href="#experts">Nossa Equipe</a>
            <a href="#careers">Carreiras</a>
            <a href="#legal">Aviso Legal</a>
          </div>
          <div className="footer-col">
            <h4>Áreas de Atuação</h4>
            <a href="#civil">Direito Civil</a>
            <a href="#criminal">Direito Penal</a>
            <a href="#family">Direito de Família</a>
            <a href="#corporate">Direito Empresarial</a>
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
    </div>
  );
}

export default App;
