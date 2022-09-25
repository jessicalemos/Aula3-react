import React, { useEffect, useState } from 'react';
import './App.css';
import FormularioTarefa from './FormularioTarefa';

function Numero() {
    const [tarefas, setTarefas] = useState(['passar ferro','lavar louça'])

    function removerTarefa(){
      let tarefasTemp = tarefas
      tarefasTemp.pop()
      setTarefas(tarefasTemp)
    }

    return (
      <div className="App">
        <ul>
          {
            tarefas.map(
              (tarefa, key)=> <li key={key}>{tarefa}</li>
            )
          }
        </ul>
        <FormularioTarefa onTarefaAdicionada={()=>setTarefas([...tarefas,'lavar roupa'])}
          onTarefaRemovida={()=>removerTarefa()}
        />
      </div>
    );
}

export default Numero;