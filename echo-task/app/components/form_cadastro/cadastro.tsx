import style from "./cadastro.module.css"

export default function Form_cadastro(){
    return(
        <>
            <body className={style.body}>
                <div className={style.container}>
                    <form action="" className={style.form}>
                        <h1>Cadastro</h1>
                        <div className={style.div}>
                            <input 
                                className={style.input}
                                type="text" 
                                placeholder="Nome" 
                                id="name">
                            </input>
                        </div>
                        <div className={style.div}>
                            <input 
                                className={style.input}
                                type="email" 
                                placeholder="Gmail" 
                                id="gmail">
                            </input>   
                        </div>
                        <div className={style.div}>
                            <input 
                                className={style.input}
                                type="email" 
                                placeholder="Confirmar Gmail" 
                                id="gmal_confirm">
                            </input>
                        </div>
                        <div className={style.div}>
                            <input 
                                className={style.input}
                                type="password" 
                                placeholder="Senha" 
                                id="senha">
                            </input>
                        </div>
                        <div className={style.div}>
                            <input 
                                className={style.input}
                                type="password" 
                                placeholder="Confirmar Senha" 
                                id="password_confirm">
                            </input>
                        </div>
                        <div className={style.div}>
                            <input 
                                className={style.input}
                                type="number" 
                                placeholder="Idade" 
                                id="years" 
                                min="0">
                            </input>
                        </div>
                        <div className={style.div}>
                            <button className={style.button} type="submit">Cadastrar-se</button>
                        </div>
                        <div className={style.a}>
                            <a href="#">Já possuo conta</a>
                        </div>
                    </form>
             </div>
            </body>
        </>
    )
}