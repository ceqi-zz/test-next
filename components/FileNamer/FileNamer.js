import styles from './FileNamer.module.css'
import {useEffect, useState} from 'react'

export default function FileNamer() {
    const [name, setName] = useState('')
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const handleWindowClick = () => setAlert(false)
        if(alert) {
            window.addEventListener('click', handleWindowClick)
        } else {
            window.removeEventListener('click', handleWindowClick)
        }
        return () => window.removeEventListener('click', handleWindowClick)
    }, [alert, setAlert])

    const validate = event => {
        if(/\*/.test(name)) {
            event.preventDefault()
            setAlert(true)
            return 
        }
        setAlert(false)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.preview}>
                <h2>Preview: {name}.js</h2>
                <form>
                <label>
                    <p>Name:</p>
                    <input
                     autoComplete="off" 
                     name="name" 
                     onChange={event => setName(event.target.value)}
                     onFocus={()=> setAlert(true)}
                     onBlur={()=>setAlert(false)}
                    />
                </label>
                <div className={styles.informationWrapper}>
                    <button
                     className={styles.information}
                     onClick={()=> setAlert(true)}
                     type="button"
                    >
                        more information
                    </button>
                {alert && 
                <div className={styles.popup}>
                    <span role="img" aria-label="allowed">✅</span>Alphanumeric Characters
                    <br />
                    <span role="img" aria-label="not allowed">⛔️</span>*
                </div>}
                </div>
                <div>
                    <button onClick={validate}>Save</button>
                </div>
                </form>
            </div>
        </div>
    )
}