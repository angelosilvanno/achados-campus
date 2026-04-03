import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useUser } from '../context/UserContext';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [matricula, setMatricula] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    value = value.replace(/\D/g, "");
    
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }
    
    setPhone(value.substring(0, 15));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const names = name.trim().split(' ');
    const initials = names.length > 1 
      ? (names[0][0] + names[names.length - 1][0]).toUpperCase()
      : names[0][0].toUpperCase();

    setUser({
      name: name,
      id: matricula,
      initials: initials
    });

    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="mb-4 text-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
          Achados<span className="text-blue-600">Campus</span>
        </Link>
      </div>

      <div className="w-full max-w-xl">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-6 md:p-8">
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Criar Conta</h2>
              <p className="text-slate-500 text-xs mt-1">Gerencie seus achados e perdidos de forma oficial.</p>
            </div>

            <form className="space-y-3" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  label="Nome Completo" 
                  type="text" 
                  placeholder="Seu nome" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
                <Input 
                  label="Matrícula" 
                  type="text" 
                  placeholder="00000000" 
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="E-mail Institucional" type="email" placeholder="voce@universidade.edu.br" required />
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
                  <input 
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(00) 00000-0000"
                    className="shadow-sm appearance-none border border-slate-200 rounded-xl w-full py-3 px-4 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Senha" type="password" placeholder="••••••••" required />
                <Input label="Confirmar" type="password" placeholder="••••••••" required />
              </div>

              <div className="pt-2">
                <Button variant="primary" size="medium" className="w-full py-3 shadow-lg shadow-blue-200 font-bold">
                  Finalizar Cadastro
                </Button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-xs">
                Já possui uma conta? {' '}
                <Link to="/login" className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">
                  Fazer Login
                </Link>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-[9px] uppercase tracking-widest mt-4 font-bold">
          © {new Date().getFullYear()} AchadosCampus • Ambiente Seguro
        </p>
      </div>
    </div>
  );
};

export default Register;