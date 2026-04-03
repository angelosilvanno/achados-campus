import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LostItemForm from './pages/LostItemForm';
import FoundItemForm from './pages/FoundItemForm';
import ObjectList from './pages/ObjectList';
import ObjectDetail from './pages/ObjectDetail';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rota raiz agora é o Login */}
      <Route path="/" element={<Login />} /> 
      
      {/* Home movida para /home */}
      <Route path="/home" element={<Home />} /> 
      
      <Route path="/lost" element={<LostItemForm />} />
      <Route path="/found" element={<FoundItemForm />} />
      <Route path="/objects" element={<ObjectList />} />
      <Route path="/objects/:id" element={<ObjectDetail />} />
      <Route path="/register" element={<Register />} />
      
      {/* Redirecionamento de segurança para login se a rota não existir */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;