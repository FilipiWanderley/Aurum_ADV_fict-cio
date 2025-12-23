import React from 'react';
import { Scale, Shield, Users, Briefcase, ArrowRight } from 'lucide-react';

function Services() {
  const handleAction = () => {
    alert("Funcionalidade em desenvolvimento");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-aurum-navy text-white pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-aurum-gold">Nossos Serviços</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Soluções jurídicas completas e especializadas para cada necessidade.</p>
        </div>
      </div>

      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group">
              <div className="text-aurum-navy mb-6 group-hover:text-aurum-gold transition-colors"><Scale size={40} /></div>
              <h3 className="text-xl font-bold mb-3 text-aurum-navy">Direito Civil</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Orientação especializada para disputas civis, contratos, responsabilidade civil e questões legais do cotidiano. Protegemos seus interesses em negociações e litígios.</p>
              <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-aurum-navy group-hover:bg-aurum-gold group-hover:text-white transition-all" onClick={handleAction}><ArrowRight size={18} /></button>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group">
              <div className="text-aurum-navy mb-6 group-hover:text-aurum-gold transition-colors"><Shield size={40} /></div>
              <h3 className="text-xl font-bold mb-3 text-aurum-navy">Direito Penal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Estratégias de defesa robustas para acusações criminais, inquéritos e processos judiciais. Atuamos com sigilo e dedicação total à sua liberdade.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group">
              <div className="text-aurum-navy mb-6 group-hover:text-aurum-gold transition-colors"><Users size={40} /></div>
              <h3 className="text-xl font-bold mb-3 text-aurum-navy">Direito de Família</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Apoio compassivo para divórcios, guarda de filhos, pensão alimentícia e inventários. Buscamos soluções que preservem o bem-estar familiar.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group">
              <div className="text-aurum-navy mb-6 group-hover:text-aurum-gold transition-colors"><Briefcase size={40} /></div>
              <h3 className="text-xl font-bold mb-3 text-aurum-navy">Direito Empresarial</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Assessoria jurídica para empresas, desde a constituição até fusões e aquisições. Compliance, contratos e defesa em litígios comerciais.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group">
              <div className="text-aurum-navy mb-6 group-hover:text-aurum-gold transition-colors"><Scale size={40} /></div>
              <h3 className="text-xl font-bold mb-3 text-aurum-navy">Direito Trabalhista</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Defesa dos direitos de trabalhadores e empregadores. Rescisões, acordos e ações trabalhistas com foco na legislação vigente.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 group">
              <div className="text-aurum-navy mb-6 group-hover:text-aurum-gold transition-colors"><Shield size={40} /></div>
              <h3 className="text-xl font-bold mb-3 text-aurum-navy">Direito Imobiliário</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Assessoria em compra e venda de imóveis, locações, regularização fundiária e condomínios. Segurança jurídica para o seu patrimônio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;