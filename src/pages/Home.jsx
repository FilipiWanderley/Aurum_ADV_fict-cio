import React from 'react';
import { Scale, Shield, Users, Briefcase, ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundOrbs from '../components/BackgroundOrbs';
import Reveal, { FadeIn } from '../components/Reveal';

function Home() {
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <>
      {/* Hero Section */}
      <header className="hero relative overflow-hidden min-h-screen flex items-center pt-20 md:pt-0 bg-aurum-navy" id="home">
        <BackgroundOrbs />
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content text-center lg:text-left order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-aurum-gold-light to-white leading-tight">
                Defendendo Seus Direitos com Integridade
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-aurum-gold mb-4 font-medium tracking-wide">Excelência e tradição na defesa dos seus direitos.</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm md:text-base">Somos um escritório de advocacia dedicado a proteger os direitos dos nossos clientes e oferecer consultoria jurídica especializada para indivíduos e empresas.</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <button 
                  className="btn-light bg-aurum-gold text-aurum-navy px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 w-full sm:w-auto" 
                  onClick={handleAction}
                >
                  Consultoria Gratuita
                </button>
                <div className="flex items-center gap-3 sm:ml-4 cursor-pointer group" onClick={handleAction}>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                     <Play size={20} fill="white" className="ml-1" />
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-aurum-gold transition-colors">Ver Vídeo</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl inline-flex items-center gap-4 mx-auto lg:mx-0">
                <div className="w-12 h-12 bg-aurum-gold rounded-full flex items-center justify-center shrink-0">
                  <Scale size={24} className="text-aurum-navy" />
                </div>
                <div className="text-left">
                  <span className="block text-2xl font-bold text-white">45+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Anos de Experiência</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="hero-image-wrapper relative order-1 lg:order-2">
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-aurum-navy via-transparent to-transparent z-10 opacity-60 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Escritório de Advocacia" 
                  className="rounded-2xl shadow-2xl shadow-aurum-navy/50 w-full object-cover h-[400px] md:h-[600px]"
                />
                
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-aurum-navy bg-gray-300 bg-cover" style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`}}></div>
                    ))}
                  </div>
                  <p className="text-white text-sm font-medium text-center sm:text-right">Confiado por <strong className="text-aurum-gold block sm:inline">15k+ clientes</strong></p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Services Preview Section */}
      <section className="services py-24 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          <div className="section-header text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-serif font-bold text-aurum-navy mb-4">Nossos Serviços Jurídicos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">Oferecemos uma ampla gama de serviços jurídicos adaptados às suas necessidades, com foco em resultados e excelência.</p>
              <Link to="/services">
                <button className="btn-outline border-2 border-aurum-navy text-aurum-navy px-6 py-2 rounded-full hover:bg-aurum-navy hover:text-white hover:scale-105 transition-all duration-300 font-medium">
                  Ver Todos os Serviços
                </button>
              </Link>
            </FadeIn>
          </div>
          
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Scale size={24} />, title: "Direito Civil", desc: "Orientação especializada para disputas civis e questões legais." },
              { icon: <Shield size={24} />, title: "Direito Penal", desc: "Estratégias de defesa para acusações criminais e litígios." },
              { icon: <Users size={24} />, title: "Direito de Família", desc: "Apoio compassivo para questões legais familiares." },
              { icon: <Briefcase size={24} />, title: "Direito Empresarial", desc: "Soluções jurídicas para empresas e corporações." }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} fullWidth>
                <div className={`service-card p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full ${index === 0 ? 'border-aurum-gold/30 ring-1 ring-aurum-gold/20' : ''}`}>
                  <div className="service-icon w-14 h-14 bg-aurum-navy/5 text-aurum-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-aurum-navy group-hover:text-aurum-gold transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  {index === 0 && (
                    <button className="w-10 h-10 rounded-full bg-aurum-gold text-aurum-navy flex items-center justify-center hover:scale-110 transition-transform" onClick={handleAction}>
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="track-record bg-aurum-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom-left"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="track-text flex-1">
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Um Histórico Comprovado de <span className="text-aurum-gold">Excelência</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">Nossos resultados falam por si. Estamos comprometidos com a excelência em cada caso que assumimos, garantindo a melhor defesa possível para seus interesses.</p>
              <button className="text-aurum-gold font-medium flex items-center gap-2 hover:gap-4 transition-all">Conheça nossa metodologia <ArrowRight size={16}/></button>
            </FadeIn>
          </div>
          <div className="track-stats flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {[
              { num: "1,500+", desc: "Casos Vencidos", bg: "bg-white/10" },
              { num: "3,200+", desc: "Clientes Atendidos", bg: "bg-aurum-gold text-aurum-navy" },
              { num: "99%", desc: "Taxa de Sucesso", bg: "bg-white text-aurum-navy" }
            ].map((stat, index) => (
              <FadeIn key={index} delay={0.2 + (index * 0.1)}>
                <div className={`stat-box p-6 rounded-2xl text-center backdrop-blur-sm ${stat.bg} hover:scale-105 transition-transform duration-300`}>
                  <span className="stat-num block text-3xl font-bold mb-2">{stat.num}</span>
                  <span className="stat-desc text-sm font-medium opacity-90">{stat.desc}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-24 bg-white" id="testimonials">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center text-aurum-navy mb-16">Confiado por Centenas, <span className="text-aurum-gold">Comprovado pelos Resultados</span></h2>
          </FadeIn>
          
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Jéssica Souza", role: "Dona de Casa", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", text: "Passar por uma disputa de guarda foi estressante, mas a Aurum Advocacia me deu um apoio excepcional. Graças à expertise deles, consegui a guarda total dos meus filhos.", days: 2 },
              { name: "Marcos Roberto", role: "Engenheiro", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", text: "A Aurum Advocacia nos ajudou a resolver uma disputa contratual complexa com profissionalismo e eficiência. A equipe jurídica garantiu um acordo favorável, economizando milhares.", days: 5 }
            ].map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="testimonial-card p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="client-header flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className="client-img w-14 h-14 rounded-full object-cover ring-2 ring-aurum-gold/50"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 font-serif">{testimonial.name}</h4>
                      <span className="text-sm text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="testimonial-footer flex justify-between items-center border-t border-gray-200 pt-4">
                    <button className="btn-text text-aurum-navy font-semibold text-sm hover:text-aurum-gold transition-colors" onClick={handleAction}>Ler Caso Completo</button>
                    <span className="date text-xs text-gray-400">há {testimonial.days} dias</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-24 bg-aurum-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="cta-content max-w-3xl mx-auto mb-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Precisa de Assistência Jurídica Especializada?</h2>
              <p className="text-xl text-gray-300">Nossos advogados estão prontos para ajudá-lo a resolver suas questões legais com confiança e agilidade.</p>
            </div>
            <div className="cta-actions flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-white bg-white text-aurum-navy px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300" onClick={handleAction}>Contate-nos Agora</button>
              <button className="btn-outline-white border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-aurum-navy hover:scale-105 transition-all duration-300" onClick={handleAction}>Agendar Reunião</button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default Home;