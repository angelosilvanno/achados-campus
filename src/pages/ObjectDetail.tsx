import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BackButton from '../components/BackButton';
import type { Item } from '../types';

const dummyObjects: Item[] = [
  {
    id: '1',
    title: 'Mochila Preta',
    category: 'Acessório',
    description: 'Mochila preta da marca X, com um chaveiro de pato de borracha na lateral, zíper principal quebrado.',
    location: 'Próximo à biblioteca, perto dos armários.',
    date: '2023-10-26',
    contact: 'joao@email.com | (11) 98765-4321',
    imageUrl: 'https://via.placeholder.com/600x400/c7d2fe/4f46e5?text=Mochila+Preta',
    type: 'lost'
  },
  {
    id: '2',
    title: 'Carteira Marrom',
    category: 'Documento',
    description: 'Carteira de couro marrom, contém CNH e cartão universitário em nome de Maria Silva.',
    location: 'Cantina Central, em cima de uma mesa próxima à janela.',
    date: '2023-10-25',
    contact: 'maria@email.com | (11) 91234-5678',
    imageUrl: 'https://via.placeholder.com/600x400/bfdbfe/2563eb?text=Carteira+Marrom',
    type: 'found'
  },
];

const ObjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const object = dummyObjects.find((obj) => obj.id === id);

  if (!object) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <BackButton />
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-8 text-center">
            <p className="text-xl font-semibold text-rose-700">Objeto não encontrado.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <BackButton />
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transform transition-all">
            <div className="relative">
              <img
                src={object.imageUrl || 'https://via.placeholder.com/600x400/cccccc/ffffff?text=Sem+Imagem'}
                alt={object.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                 <span className={`${object.type === 'lost' ? 'bg-rose-500' : 'bg-emerald-500'} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg`}>
                  {object.type === 'lost' ? 'Perdido' : 'Encontrado'}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                {object.title}
              </h2>
              
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="bg-blue-50 text-blue-700 border border-blue-100 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-lg">
                  Categoria: {object.category}
                </span>
                <span className={`border text-xs md:text-sm font-semibold px-4 py-1.5 rounded-lg ${
                  object.type === 'lost' 
                  ? 'bg-rose-50 text-rose-700 border-rose-100' 
                  : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                }`}>
                  Status: {object.type === 'lost' ? 'Perdido' : 'Encontrado'}
                </span>
              </div>

              <div className="space-y-6">
                <p className="text-slate-700 text-base md:text-lg leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <span className="font-bold text-slate-900 block mb-1">Descrição do Item</span> 
                  {object.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-900 block text-sm uppercase tracking-wider mb-1">
                      Local {object.type === 'lost' ? 'da Perda' : 'do Encontro'}
                    </span> 
                    {object.location}
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="font-bold text-slate-900 block text-sm uppercase tracking-wider mb-1">
                      Data do Registro
                    </span> 
                    {new Date(object.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </div>
                </div>

                <div className="bg-blue-600 p-6 md:p-8 rounded-2xl shadow-inner relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10 flex items-center">
                    Informações de Contato
                  </h3>
                  <p className="text-blue-50 text-xl font-semibold mb-2 relative z-10">{object.contact}</p>
                  <p className="text-sm text-blue-100 mt-2 relative z-10 font-medium">
                    Por favor, utilize os meios de contato acima para coordenar a devolução deste item de forma segura dentro do campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ObjectDetail;