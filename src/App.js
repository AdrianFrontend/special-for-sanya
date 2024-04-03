import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Variables from './Component/Variables/Variables';
import Formules from './Component/Formules/Formules';

function App() {
  const [variables, setVariables] = useState([
    {name: "a", value: '', id: 0}
  ])

  const addVariable = (name) => {
    setVariables([...variables, {name: name, id: variables.length > 0 ? variables[variables.length - 1].id + 1 : 0, value: ''}])
  }

  const deleteVariable = (id) => {
    setVariables(variables.filter(item => item.id != id))
  }

  const changeVariableValue = (id, value) => {
    if (/^\d+$/.test(value) || value.length === 0) {
      let idx = variables.findIndex(item => item.id == id)
      setVariables([...variables.filter(item => id != item.id), {...variables[idx], value: value}])
    }
  }


  const [formules, setFormules] = useState([
    {formule: "a + b", value: '', id: 0}
  ])

  const addFormule = (formule) => {
    setFormules([...formules, {formule: formule, id: formules.length > 0 ? formules[formules.length - 1].id + 1 : 0, value: ''}])
  }

  const deleteFormule = (id) => {
    setFormules(formules.filter(item => item.id != id))
  }

  return (
    <div className="App">
      <Variables variables={variables} addVariable={addVariable} deleteVariable={deleteVariable} changeVariableValue={changeVariableValue}/>
      <Formules formules={formules} addFormule={addFormule} deleteFormule={deleteFormule} variables={variables}/>
    </div>
  );
}

export default App;
