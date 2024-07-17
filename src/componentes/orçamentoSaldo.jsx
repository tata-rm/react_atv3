import React, { useContext } from 'react';
import { DespesasContext } from '../Context/despesasContext';

const Saldo = () => {
  const { despesas } = useContext(DespesasContext);

  const calcularSaldo = () => {
    let saldoTotal = 0;
    despesas.forEach((despesa) => {
      saldoTotal += despesa.valor;
    });
    return saldoTotal;
  };

  return (
    <div>
      <h3>Saldo:</h3>
      <p>{calcularSaldo()} reais</p>
    </div>
  );
};

export default Saldo;
