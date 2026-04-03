import { createContext, useContext, useState, type ReactNode } from 'react';

interface UserData {
  name: string;
  id: string;
  initials: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: (data: UserData) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Esse comentário abaixo desativa o aviso do ESLint para permitir exportar o Hook no mesmo arquivo do Provider
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser deve ser usado dentro de um UserProvider");
  return context;
};