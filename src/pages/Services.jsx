import React from 'react';
import { Scale, Shield, Users, Briefcase, ArrowRight } from 'lucide-react';

function Services() {
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <div className="page-services">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <h1>Nossos Serviços</h1>
          <p>Soluções jurídicas completas e especializadas para cada necessidade.</p>
        </div>
      </div>

      <section className="services" id="services">
        <div className="container">
          <div className="services-grid services-page-grid">
            <div className="service-card active">
              <div className="service-icon"><Scale /></div>
              <h3>Direito Civil</h3>
              <p>Orientação especializada para disputas civis, contratos, responsabilidade civil e questões legais do cotidiano. Protegemos seus interesses em negociações e litígios.</p>
              <button className="btn-circle" onClick={handleAction}><ArrowRight size={16} /></button>
            </div>
            <div className="service-card">
              <div className="service-icon"><Shield /></div>
              <h3>Direito Penal</h3>
              <p>Estratégias de defesa robustas para acusações criminais, inquéritos e processos judiciais. Atuamos com sigilo e dedicação total à sua liberdade.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Users /></div>
              <h3>Direito de Família</h3>
              <p>Apoio compassivo para divórcios, guarda de filhos, pensão alimentícia e inventários. Buscamos soluções que preservem o bem-estar familiar.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Briefcase /></div>
              <h3>Direito Empresarial</h3>
              <p>Assessoria jurídica para empresas, desde a constituição até fusões e aquisições. Compliance, contratos e defesa em litígios comerciais.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Scale /></div>
              <h3>Direito Trabalhista</h3>
              <p>Defesa dos direitos de trabalhadores e empregadores. Rescisões, acordos e ações trabalhistas com foco na legislação vigente.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Shield /></div>
              <h3>Direito Imobiliário</h3>
              <p>Assessoria em compra e venda de imóveis, locações, regularização fundiária e condomínios. Segurança jurídica para o seu patrimônio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;