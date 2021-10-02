import {useReducer, useState} from 'react'

const calcReducer = (state, action) => {
 switch (action.type ) {
     case '+': {
         state = Number(state) + Number(action.value)
         return state
     }
     case '-': {
         state = Number(state)-Number(action.value)
         return state
     }
     case '*':{
        state = Number(state) * Number(action.value)
        return state
     }
     case '/': {
        state = Number(state) / Number(action.value)
        return state
     }
     default: {
         return state
     }
     
 }

}


const Calculator = () => {

const [result, setValue] = useReducer(calcReducer, 0)
const [number, setNumber] = useState(0)

const handleChange = (event) => {
 setNumber(event.target.value)
}

return (
    <>
    <p> {result} </p>

    <input value={number} onChange={handleChange}></input>
    
    <div>
        <button onClick={() => setValue({type: '+', value: number})}>+</button>
        <button onClick={() => setValue({type: '-', value: number})}>-</button>
        <button onClick={() => setValue({type: '*', value: number})}>*</button>
        <button onClick={() => setValue({type: '/', value: number})}>/</button>
    </div>
    </>
)


}

export default Calculator