'user client'
import React from "react"
import style from "./cadastro.module.css"


interface ListaInputs{
    type?:string,
    placeholder?: string,
    style?: React.CSSProperties,
}

const inputs: ListaInputs[] = [
    { type:'text', placeholder:'Nome',},
    { type:'email', placeholder:'Gmail',},
    { type:'password', placeholder:'Senha',},
    { type:'password', placeholder:'Confirmar Senha',},
    { type:'date', placeholder:'Data de nascimento',}
]

export default function Form_cadastro(){
    return(
        <>
            <div className={style.body}>
                <div className={style.container}>
                    <form action="" className={style.form}>
                        <h1>Cadastro</h1>
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
                            <button className={style.button} type="submit" >Cadastrar-se</button>
                        </div>
                        <div className={style.a}>
                            <a href="#">Já possuo conta</a>
                        </div>
                    </form>
             </div>
            </div>
        </>
    )
}