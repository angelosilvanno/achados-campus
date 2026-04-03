import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import BackButton from '../components/BackButton';

const LostItemForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    lostLocation: '',
    lostDate: '',
    contact: '',
    image: null as File | null,
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Objeto perdido a ser cadastrado:', formData);
    setIsSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['Documento', 'Eletrônico', 'Roupa', 'Acessório', 'Livro', 'Outro'];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <BackButton />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Registrar <span className="text-blue-600">Objeto Perdido</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Forneça o máximo de detalhes possível para ajudar na identificação do seu item.
            </p>
          </div>

          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-100">
            {isSent && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center text-emerald-800 animate-in fade-in slide-in-from-top-4 duration-500">
                <svg className="w-6 h-6 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Objeto perdido cadastrado com sucesso no sistema!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Input
                    label="O que você perdeu?"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Ex: Mochila preta, Carteira de couro, Caderno azul"
                    required
                  />
                </div>

                <div>
                  <Select
                    label="Categoria do Objeto"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    options={categories.map(cat => ({ value: cat, label: cat }))}
                    placeholder="Selecione uma categoria..."
                    required
                  />
                </div>

                <div>
                  <Input
                    label="Data Aproximada da Perda"
                    name="lostDate"
                    type="date"
                    value={formData.lostDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label="Local onde possivelmente foi perdido"
                    name="lostLocation"
                    value={formData.lostLocation}
                    onChange={handleChange}
                    placeholder="Ex: Biblioteca Central, Bloco A, Estacionamento Norte"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <Textarea
                    label="Descrição Detalhada"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Descreva características únicas: marcas de uso, conteúdo (se for carteira/bolsa), adesivos, modelo exato..."
                    rows={5}
                    required
                  />
                </div>

                <div className="sm:col-span-2 border-t border-slate-100 pt-6">
                  <label htmlFor="image" className="block text-sm font-semibold text-slate-700 mb-2">
                    Foto do Objeto
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-blue-400 hover:bg-slate-50 transition-colors cursor-pointer relative">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-slate-600 justify-center">
                        <label htmlFor="image" className="relative cursor-pointer bg-transparent rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Faça upload de um arquivo</span>
                          <input id="image" name="image" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                        </label>
                        <p className="pl-1">ou arraste e solte</p>
                      </div>
                      <p className="text-xs text-slate-500">
                        PNG, JPG, GIF até 10MB
                      </p>
                    </div>
                  </div>
                  {formData.image && (
                    <div className="mt-3 flex items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-sm text-blue-700 font-medium truncate">{formData.image.name}</span>
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2 border-t border-slate-100 pt-6">
                  <Input
                    label="Seu Contato (Email ou Telefone)"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Como quem encontrou pode falar com você?"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" size="large" className="w-full flex justify-center py-3 text-lg shadow-md hover:shadow-lg transform transition-all hover:-translate-y-0.5">
                  Registrar Perda
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LostItemForm;