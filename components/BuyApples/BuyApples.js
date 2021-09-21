import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import {useReducer,useState} from 'react'
import styles from '../BuyApples/BuyApples.module.css'



const formReducer = (state, event) => {
    if(event.reset){
        return {
            name: '',
            count: 5,
            'giftWrap?': false,
            apple: '',
        }
    }
    return {...state, [event.name]:event.value,}
}

const BuyApples = () => {
    const [formData, setFormData] = useReducer(formReducer, {
        count: 5,
    })
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)

        setTimeout(() => {
            setSubmitting(false)
            setFormData({reset:true})
        }, 3000)
    }

    const handleChange = (e) => {
        const isCheckbox = e.target.type === 'checkbox'
        
        setFormData({
            name: e.target.name,
            value: isCheckbox? e.target.checked : e.target.value,
        })
    }

    return (
        <>
        <div className={styles.wrapper} onSubmit={handleSubmit}>        
            <div>
                <h1>How About Them Apples </h1>
            </div>
            {submitting 
            && <div>
            You are submitting the following:
            <ul>
              {Object.entries(formData).map(([name, value]) => 
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
              )}
            </ul>
           </div>
            }
            <form>
                <fieldset disabled={submitting}>
                    <label>
                     <p>Name</p>
                     <input name='name' onChange={handleChange} value={formData.name || ""}/>
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Apples</p>
                        <select name="apple" onChange={handleChange} value={formData.apple || ""}>
                            <option value="">-- Please choose an option --</option>
                            <option value="fuji">Fuji</option>
                            <option value="ladypink">Ladypink</option>
                        </select>
                    </label>
                
                
                    <label>
                        <p>Count</p>
                        <input type="number" name="count" onChange={handleChange} value={formData.count || 0} step="1" />
                    </label>
                
                    <label>
                        <p>Giftwrap</p>
                        <input disabled={formData.apple !== 'fuji'} type="checkbox" name="giftWrap?" onChange={handleChange} checked={formData['giftWrap?'] || false} />
                        
                    </label>
                </fieldset>
                <button disabled={submitting} type='submit'>Submit</button>
            </form> 
        </div>

        </>
    )
}

export default BuyApples