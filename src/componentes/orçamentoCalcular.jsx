import React, { useContext } from 'react';
import { DespesasContext } from '../Context/despesasContext';

const Calculadora = () => {
  const { despesas } = useContext(DespesasContext);

  const calcularOrcamento = () => {
    let orcamentoTotal = 0;
    despesas.forEach((despesa) => {
      orcamentoTotal += despesa.valor;
    });
    return orcamentoTotal;
  };

  return (
    <div>
      <h3>Orçamento Total:</h3>
      <p>{calcularOrcamento()} reais</p>
    </div>
  );
};

export default Calculadora;
