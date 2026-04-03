import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="mb-8 text-center">
        <Link to="/" className="text-3xl font-black tracking-tighter text-slate-900">
          Achados<span className="text-blue-600">Campus</span>
        </Link>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Acesse sua conta</h2>
              <p className="text-slate-500 text-sm mt-2">Use suas credenciais institucionais para entrar.</p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <Input label="E-mail ou Matrícula" type="text" placeholder="exemplo@universidade.edu.br" required />
              
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-sm font-semibold text-slate-700">Senha</label>
                  <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700">Esqueceu a senha?</a>
                </div>
                <input 
                  type="password" 
                  className="shadow-xs appearance-none border border-slate-200 rounded-xl w-full py-3 px-4 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="••••••••"
                  required
                />
              </div>

              <Button variant="primary" size="large" className="w-full py-3 mt-2 shadow-lg shadow-blue-200">
                Entrar
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-sm">
                Não possui uma conta? {' '}
                <Link to="/register" className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">
                  Cadastre-se agora
                </Link>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-[10px] uppercase tracking-widest mt-8 font-bold">
          © {new Date().getFullYear()} AchadosCampus • Ambiente Institucional Seguro
        </p>
      </div>
    </div>
  );
};

export default Login;