import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import BackButton from '../components/BackButton';

const FoundItemForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    foundLocation: '',
    foundDate: '',
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
    console.log('Objeto encontrado a ser cadastrado:', formData);
    setIsSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['Documento', 'Eletrônico', 'Roupa', 'Acessório', 'Livro', 'Outro'];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <BackButton />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 text-center tracking-tight">
            Registrar <span className="text-emerald-600">Objeto Encontrado</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-slate-100 transition-all">
            {isSent && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center text-emerald-800 animate-in fade-in slide-in-from-top-4 duration-500">
                <svg className="w-6 h-6 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-sm sm:text-base">Objeto encontrado registrado com sucesso no sistema!</span>
              </div>
            )}

            <div className="mb-6">
              <Input
                label="O que foi encontrado?"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex: Chaves com chaveiro, Caderno azul, Estojo"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <Select
                  label="Categoria do Objeto"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  options={categories.map(cat => ({ value: cat, label: cat }))}
                  placeholder="Selecione uma categoria"
                  required
                />
              </div>
              <div>
                <Input
                  label="Data do Encontro"
                  name="foundDate"
                  type="date"
                  value={formData.foundDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <Textarea
                label="Descrição Detalhada"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descreva o item em detalhes (cor, marca, estado de conservação)"
                rows={4}
                required
              />
            </div>
            <div className="mb-6">
              <Input
                label="Local"
                name="foundLocation"
                value={formData.foundLocation}
                onChange={handleChange}
                placeholder="Ex: Refeitório, Corredor do Bloco B, Estacionamento"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="image" className="block text-slate-700 text-sm font-semibold mb-2">
                Foto do Objeto Encontrado
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-slate-500 border border-slate-200 rounded-xl cursor-pointer bg-slate-50 focus:outline-none file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 transition-all"
              />
              {formData.image && (
                <div className="mt-2 flex items-center text-emerald-700 text-xs font-medium bg-emerald-50 px-3 py-1.5 rounded-lg w-fit">
                   <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                   {formData.image.name}
                </div>
              )}
            </div>
            <div className="mb-8">
              <Input
                label="Seu Contato para Devolução"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Telefone, E-mail ou ramal do setor"
                required
              />
            </div>

            <div className="pt-4 flex justify-center">
              <Button 
                type="submit" 
                variant="primary" 
                size="large" 
                className="w-full sm:w-auto sm:min-w-70 sm:px-12 py-4 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transform transition-all hover:-translate-y-0.5 rounded-xl"
              >
                Finalizar Registro
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default FoundItemForm;