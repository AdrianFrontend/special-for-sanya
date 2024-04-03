const Formule = ({formule, id, deleteFormule, variables}) => {
    let result = 0

    let resultFormule = formule

    let variablesArr = []
    for (let item of variables) {
        variablesArr.push({name: item.name, value: item.value})
    }

    for (let item of resultFormule) {
        for (let item1 of variablesArr) {
            if (item == item1.name) {
                resultFormule = resultFormule.split("").map(item2 => item2 == item ? item1.value : item2).join("")
            }
        }
    }

    try {
        result = eval(resultFormule)
    } catch (err) {
    }

    return (
        <li className='formule'><span>{formule} = {result ? result : "н/д"}</span><button onClick={() => deleteFormule(id)}>удалить</button></li>
    )
}

export default Formule