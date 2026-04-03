import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-black tracking-tighter text-slate-900">
              Achados<span className="text-blue-600">Campus</span>
            </Link>
            <p className="mt-4 text-slate-500 text-sm max-w-xs leading-relaxed">
              Plataforma oficial para gestão e recuperação de pertences da comunidade acadêmica, auxiliada por tecnologia de cruzamento de dados.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Plataforma</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Início</Link></li>
              <li><Link to="/objects" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Mural de Itens</Link></li>
              <li><Link to="/lost" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Registrar Perda</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Institucional</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Segurança do Campus</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Privacidade</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} AchadosCampus. Sistema de Gestão de Pertences.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">v1.0.0 Stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;