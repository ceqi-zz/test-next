import {useState} from "react"


const external_data = () =>{
    const [btnTxt, setBtnTxt]= useState("click me!")

    const handleBtnClick = () => {
        setBtnTxt("Thanks")
    }

    return (
    <>
    <form>
        <input type="text"></input>
    </form>

    <button onClick={handleBtnClick}>{btnTxt}</button>
    </>

    )
    
}



export default external_data