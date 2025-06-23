'user client'
import React from "react"
import style from "./login.module.css"
import Link from "next/link";



type InputType = {
    type: string;
    placeholder: string;
    style?: React.CSSProperties;
};
const inputs: InputType[]= [
    {type: 'text',placeholder: 'Username'},
    {type: 'password',placeholder: 'Password'},
]

export default function Form_login(){
    return(
        <>
            <div className={style.body}>
                <div className={style.container}>
                    <form action="" className={style.form}>
                        <h1>Login</h1>
                        {/* E aqui */}
                            {inputs.map((item, id) => {
                               return( <div key={id} className={style.div}>
                                    <input key={id}
                                        className={style.input}
                                        type={item?.type || 'text'} 
                                        placeholder={item?.placeholder || 'placeholder'} 
                                        id={item?.placeholder}
                                    >
                                    </input>
                                </div>)
                            })}
                        <div className={style.div}>
                            <Link href={'/tutorial'}>
                                <button className={style.button} type="submit">Entrar</button>
                            </Link>
                        </div>
                    </form>
             </div>
            </div>
        </>
    )
}