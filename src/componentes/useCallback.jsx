import React, {useState, useCallback} from 'react';

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  const addTarefa = useCallback(() => {
    if (tarefa.trim() !== '') {
      setTarefas((prevTasks) => [...prevTasks, tarefa]);
      setTarefa('');
    }
  }, [tarefa]);

  return (
    <div className="App">
      <p id='p'>To-do List</p>
      <input type="text" value={tarefa} placeholder="Adicionar tarefa" onChange={(e) => setTarefa(e.target.value)} />
      <button className='but' onClick={addTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;