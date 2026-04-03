import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        
        <section className="container mx-auto px-6 pt-12 pb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Localize e devolva objetos <span className="text-blue-600">no Campus.</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            O sistema oficial para gestão inteligente de achados e perdidos da nossa comunidade acadêmica.
          </p>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Link to="/lost" className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Registrar Perda</h3>
              <p className="text-slate-500 text-sm mb-4">Perdeu um item? Inicie o rastreamento no sistema agora.</p>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2">Abrir Chamado →</span>
            </Link>

            <Link to="/found" className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Registrar Achado</h3>
              <p className="text-slate-500 text-sm mb-4">Encontrou algo? Cadastre os detalhes para devolver ao dono.</p>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2">Entregar Item →</span>
            </Link>

            <Link to="/objects" className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mural de Itens</h3>
              <p className="text-slate-500 text-sm mb-4">Veja a galeria completa de itens achados e perdidos.</p>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2">Ver Mural →</span>
            </Link>

          </div>
        </section>

        <div className="container mx-auto px-6 border-t border-slate-50 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="flex h-3 w-3 rounded-full bg-blue-600 animate-pulse"></span>
            <p className="text-sm font-semibold text-slate-700">Sistema de Match Inteligente Ativo</p>
          </div>
          <p className="text-xs text-slate-400 max-w-md md:text-right">
            Nossa IA analisa descrições em tempo real para conectar automaticamente quem perdeu com quem encontrou.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;