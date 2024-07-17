import React, { createContext, useState } from 'react';

export const context = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = (nomeUsuario, senha) => {
    setUsuario({ nomeUsuario });
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <div className='App'>
      <p id='p'>Login</p>
      <context.Provider value={{ usuario, login, logout }}>
        {children}
      </context.Provider>
    </div>
  );
};
 