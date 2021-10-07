import styles from '../Word/Word.module.css'
import {useState} from 'react'

const Word = () => {

    const [word, setWord] = useState("")
    const [meaning, setMeaning] = useState([])
    const [loading, setLoading] = useState(false)

    const handleOnChange = (event) => {
        setWord(event.target.value)
    }

    const handleOnClick = async (event) => {
        setLoading(true)
        const res = await fetch(`/api/word/${word}`)
        const data = await res.json()
        setMeaning(data)
        setLoading(false)
    }

    return (
        <>
        <div className={styles.wrapper}>Word Look Up App</div>
        <input name='word' value={word} onChange={handleOnChange}></input>
        <div><button name='lookup' onClick={handleOnClick}>LookUp</button></div>
        {loading 
        ? <div>loading...</div> 
        :<div>
           <ul>
           {meaning.map(e => <li key={e}>{e}</li>)}
           </ul>
        </div>}
        <br></br>
        <div>

        </div>
        </>
    )

}

export default Word