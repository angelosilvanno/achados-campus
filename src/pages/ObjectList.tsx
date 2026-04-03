import React from 'react';
import Layout from '../components/layout/Layout';
import ObjectCard from '../components/ObjectCard';
import BackButton from '../components/BackButton';
import type { Item } from '../types';

const dummyObjects: Item[] = [
  {
    id: '1',
    title: 'Mochila Dell Preta',
    category: 'Acessório',
    description: 'Mochila preta com detalhes em azul, contendo um notebook.',
    location: 'Biblioteca Central - Piso 2',
    date: '2024-03-15',
    contact: 'contato@exemplo.com',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb94c6a62?q=80&w=300&h=200&fit=crop',
    type: 'lost'
  },
  {
    id: '2',
    title: 'iPhone 13 Branco',
    category: 'Eletrônico',
    description: 'Encontrado perto da cantina.',
    location: 'Área de Convivência - Bloco B',
    date: '2024-03-18',
    contact: 'contato@exemplo.com',
    imageUrl: 'https://images.unsplash.com/photo-1633113088453-1217ce53fd86?q=80&w=300&h=200&fit=crop',
    type: 'found'
  },
  {
    id: '3',
    title: 'Estojo Faber-Castell',
    category: 'Outro',
    description: 'Estojo de metal com vários lápis de cor.',
    location: 'Auditório 1',
    date: '2024-03-19',
    contact: 'contato@exemplo.com',
    imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=300&h=200&fit=crop',
    type: 'found'
  },
  {
    id: '4',
    title: 'Guarda-chuva Azul',
    category: 'Acessório',
    description: 'Guarda-chuva grande, cabo de madeira.',
    location: 'Entrada do Prédio Administrativo',
    date: '2024-03-19',
    contact: 'contato@exemplo.com',
    imageUrl: 'https://images.unsplash.com/photo-1534346506544-672534570081?q=80&w=300&h=200&fit=crop',
    type: 'lost'
  }
];

const ObjectList: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="w-full md:w-auto">
              <BackButton />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Mural de <span className="text-blue-600">Objetos</span>
              </h2>
              <p className="text-slate-500 font-medium mt-1">Consulte os itens registrados na comunidade</p>
            </div>
            <div className="hidden md:block w-32"></div> {/* Espaçador para centralizar o título */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dummyObjects.map((obj) => (
              <ObjectCard key={obj.id} item={obj} />
            ))}
          </div>

          {dummyObjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 mt-10">
              <svg className="mx-auto h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="mt-4 text-slate-500 text-lg font-medium">Nenhum objeto encontrado no mural.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ObjectList;