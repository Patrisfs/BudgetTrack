import styles from './Message.module.css'
import { useState, useEffect } from "react"


function Message({type,msg}){
//criação do timer e visibilidade da msg por setvisible
    const [visible, setvisible]= useState(false)

    useEffect(()=>{

        if(!msg){
            setvisible(false)
            return
        }

        setvisible(true)

        const timer = setTimeout(() => {
            setvisible(false)
        }, 3000)

        return()=> clearTimeout(timer)
    }, [msg])

    return(
        <>
        {visible &&(
            <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
        )}
        </>
    ) 
}

export default Message