import Image from "next/image"
import style from './header.module.css'
import { ReactNode } from "react"

interface Headerprops{
    children:ReactNode;
}


export default function Header({children}: {children?: React.ReactNode}){
    return(
        <>
            <header className={style.header}>
                <div id="logo">
                    
                </div>
                {children}
            </header>
            <div className={style.body}></div>
        </>
    )
}