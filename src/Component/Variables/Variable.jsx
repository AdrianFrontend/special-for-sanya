const Variable = ({name, id, deleteVariable, changeVariableValue, value}) => {
    return (
        <li className='variable'><span>{name} = <input value={value} onChange={event => changeVariableValue(id, event.currentTarget.value)}/></span><button onClick={() => deleteVariable(id)}>удалить</button></li>
    )
}

export default Variable