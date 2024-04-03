import { useState } from "react"
import Variable from "./Variable"

const Variables = ({variables, addVariable, deleteVariable, changeVariableValue}) => {
    const [variableName, setVariableName] = useState("")

    const variablesItems = variables.map(item => <Variable key={item.id} name={item.name} id={item.id} deleteVariable={deleteVariable} changeVariableValue={changeVariableValue} value={item.value}/>)

    return (
        <div className='variables-container'>
            <h2>Переменные:</h2>
            <div className='variable-add'>
                <input onChange={event => setVariableName(event.currentTarget.value)} value={variableName}/>
                <button onClick={() => {
                    addVariable(variableName)
                    setVariableName("")
                    }}>Добавить переменную</button>
            </div>
            <ul className='variables-list'>
                {variablesItems}
            </ul>
        </div>
    )
}

export default Variables