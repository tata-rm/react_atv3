import React, {useState, useCallback} from 'react';

function Tarefas() {
  const botao = useRef(null);

  const limparEntrada = () => {
    botao.current.value = '';
    botao.current.focus();
  };

  return (
    <div className="App">
      <p id='p'>Entrada</p>
      <input type="text" ref={botao}/>
      <button onClick={limparEntrada} id="but">Limpar</button>        
    </div>
  );
}
export default Tarefas;