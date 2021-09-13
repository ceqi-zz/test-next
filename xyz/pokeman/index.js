import {useState} from "react"
import styles from './pokeman.module.css'

const external_data = () =>{
    const [result, setResult]= useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        let result = event.target.input.value + 2
        setResult(result)
    }

    return (
    <>
    <div className={styles.wrapper}>
    <form onSubmit={handleSubmit}>
        <h1>How About Them Apples</h1>
        <fieldset>
            <label>
                <p>Amount</p>
                <input name="amount" />
            </label>
            <label>
                <p>Sth else</p>
                <input name="sth" />
            </label>
        </fieldset>
        <button type="submit">Submit</button>
    </form>
    </div>
    {result}
    </>

    )
    
}



export default external_data