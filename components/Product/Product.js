import styles from '../Product/Product.module.css'
import {useReducer} from 'react'

const products = [
    {
      emoji: '🍦',
      name: 'ice cream',
      price: 5
    },
    {
      emoji: '🍩',
      name: 'donuts',
      price: 2.5,
    },
    {
      emoji: '🍉',
      name: 'watermelon',
      price: 4
    }
];

const currencyOptions = {
    minimumFractionDigits: 2,
    maxiumFractionDigits: 2,
}

const getTatal = (cart) => {
    const total = cart.reduce((product1, product2)=>{product1.price + product2.price})
    return total.toLocaleString(undefined, currencyOptions)
}

const cartReducer = (state, action) => {
    switch (action.type){
        case 'add':
            return [...state, action]
        case 'remove':
            const update = [...state]
            const index = update.indexOf(action.product.name)
            if (index < 0) {
                return state
            }
            update.splice(index,1)
            return update
        default:
            return state
    } 
    
}

const Product = () => {

const [cart, setCart] = useReducer(cartReducer, [])

const add = (product) => {
    setCart({product, type: 'add'})
}

const remove = (product) => {
    setCart({product, type: 'remove'})
}

return (
    <>
    <div className={styles.wrapper}>
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: {getTatal(cart)}</div>

            {products.map(product => (
            <div key={product.name}>
            <div className={styles.product}><span role="img" aria-label={product.name}>{product.emoji}</span></div>
            <button onClick={() => add(product)}>Add</button>  <button onClick={()=>remove(product)}>Remove</button>
            </div>
            ))}
            
    </div>
    </>
    )
}

export default Product