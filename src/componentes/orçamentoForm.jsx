import React, { useState, useContext } from 'react';
import { DespesasContext } from '../Context/despesasContext';

const FormDespesa = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const { adicionarDespesa } = useContext(DespesasContext);

  const enviarForm = () => {
    adicionarDespesa(descricao, parseFloat(valor));
    setDescricao('');
    setValor(0);
  };

  return (
    <form onSubmit={enviarForm}>
      <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
      <input type="number" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
      <button className='but' type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default FormDespesa;
