import Link from "next/link"
import {useRouter} from "next/router"



let home = () => {

     const router = useRouter()

     const handleClick = (e) => {
         e.preventDefault()
         router.push("/pokeman")
     }

    return (
        <>
        <div> welcome home</div>
        <Link href="pokeman">
            <a> Go see pokeman</a>
        </Link>
        <button onClick = {handleClick}>
            Click me!
        </button>
        </>
    )
}

export default home