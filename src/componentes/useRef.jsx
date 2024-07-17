import React, {useRef, useState} from 'react';

function Entrada() {
  const botao = useRef(null);

  const limparEntrada = () => {
    botao.current.value = '';
    botao.current.focus();
  };

  return (
    <div className="App">
      <p id='p'>Entrada</p>
      <input type="text" ref={botao} placeholder='Adicione um texto'/>
      <button onClick={limparEntrada} id="but">Limpar</button>        
    </div>
  );
}
export default Entrada;