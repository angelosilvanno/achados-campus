import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const displayUser = user || {
    name: "Entrar no Sistema",
    id: "Clique para acessar",
    initials: "?"
  };

  return (
    <header className="bg-white/80 backdrop-blur-md text-slate-900 py-3 shadow-xs border-b border-slate-200 sticky top-0 z-50"> 
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/home" className="text-2xl font-black tracking-tighter hover:text-blue-600 transition-colors duration-300">
          Achados<span className="text-blue-600">Campus</span>
        </Link>

        {/* Lado Direito: Início + Perfil */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:block"> 
            <ul className="flex items-center">
              <li>
                <Link to="/home" className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm font-bold uppercase tracking-widest">
                  Início
                </Link>
              </li>
            </ul>
          </nav>

          {/* Componente de Perfil do Usuário */}
          <div className="flex items-center gap-3 pl-8 border-l border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-slate-900 leading-none mb-1">{displayUser.name}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{displayUser.id}</p>
            </div>
            
            <Link 
              to="/" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200 hover:scale-105 transition-all duration-300 group"
              title="Acessar Perfil"
            >
              <span className="text-xs font-black tracking-tighter group-hover:hidden">{displayUser.initials}</span>
              {/* Ícone que aparece no hover para sugerir saída/configuração */}
              <svg className="w-5 h-5 hidden group-hover:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburguer */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-4 space-y-1">
            <li className="p-4 bg-slate-50 rounded-xl mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">{displayUser.initials}</div>
              <div>
                <p className="text-sm font-black text-slate-900">{displayUser.name}</p>
                <p className="text-[10px] font-bold text-slate-400">{displayUser.id}</p>
              </div>
            </li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/home" className="block py-3 px-4 text-slate-700 hover:bg-slate-50 rounded-xl font-bold uppercase text-xs tracking-widest">Início</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/" className="block py-3 px-4 text-rose-600 hover:bg-rose-50 rounded-xl font-bold uppercase text-xs tracking-widest text-right">Sair do Sistema</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;