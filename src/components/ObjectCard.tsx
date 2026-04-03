import React from 'react';
import { Link } from 'react-router-dom';
import type { Item } from '../types';

interface ObjectCardProps {
  item: Item;
}

const ObjectCard: React.FC<ObjectCardProps> = ({ item }) => {
  return (
    <Link to={`/objects/${item.id}`} className="group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full transform group-hover:-translate-y-1">
        {/* Imagem com Badge de Status */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.imageUrl || 'https://via.placeholder.com/300x200/cccccc/ffffff?text=Sem+Imagem'}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm ${
              item.type === 'lost' 
              ? 'bg-rose-500 text-white' 
              : 'bg-emerald-500 text-white'
            }`}>
              {item.type === 'lost' ? 'Perdido' : 'Encontrado'}
            </span>
          </div>
        </div>

        {/* Conteúdo do Card */}
        <div className="p-5 flex flex-col grow"> {/* Alterado de flex-grow para grow (v4) */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider border border-blue-100">
              {item.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors line-clamp-1">
            {item.title}
          </h3>
          
          <div className="space-y-2 mt-auto">
            <div className="flex items-start gap-2 text-slate-600">
              <svg className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm line-clamp-1">{item.location}</p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs font-medium">{new Date(item.date).toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </div>

        {/* Botão de Ação do Card */}
        <div className="px-5 pb-5 mt-auto">
          <div className="w-full py-2 bg-slate-50 text-slate-600 text-xs font-bold text-center rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all border border-slate-200 uppercase tracking-widest">
            Ver Detalhes
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ObjectCard;