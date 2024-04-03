import { useState } from "react"
import Formule from "./Formule"

const Formules = ({formules, addFormule, deleteFormule, variables}) => {
    const [newFormule, setNewFormule] = useState("")

    let formulesItems = formules.map(item => <Formule key={item.id} formule={item.formule} id={item.id} deleteFormule={deleteFormule} variables={variables}/>)

    return (
        <div className='formules-container'>
        <h2>Формулы:</h2>
        <div className='formule-add'>
          <input value={newFormule} onChange={event => setNewFormule(event.currentTarget.value)}/>
          <button onClick={() => {
            addFormule(newFormule)
            setNewFormule("")}}>Добавить формулу</button>
        </div>
        <ul className='formules-list'>
          {formulesItems}
        </ul>
      </div>
    )
}

export default Formules