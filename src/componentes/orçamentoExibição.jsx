import React, { useContext } from 'react';
import { DespesasContext } from '../Context/despesasContext';

const ExibirDespesa = () => {
  const { despesas } = useContext(DespesasContext);

  return (
    <div>
      <h3>Despesas:</h3>
      <ul>
        {despesas.map((despesa, index) => (
          <li key={index}>
            {despesa.descricao} - {despesa.valor} reais
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExibirDespesa;
