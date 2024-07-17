import React, { createContext, useState } from 'react';

export const DespesasContext = createContext();

export const ProviderDespesas = ({ children }) => {
  const [despesas, setDespesas] = useState([]);

  const adicionarDespesa = (descricao, valor) => {
    const novaDespesa = {
      descricao,
      valor,
    };
    setDespesas([...despesas, novaDespesa]);
  };

  return (
    <div className='App'>
      <p id='p'>Orçamento</p>
      <DespesasContext.Provider value={{ despesas, adicionarDespesa }}>
        {children}
      </DespesasContext.Provider>
    </div>
  );
};
