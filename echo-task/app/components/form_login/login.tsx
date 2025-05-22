import style from "./login.module.css"

export default function Form_login(){
    return(
        <>
        <body className={style.body}>
            <div className={style.container}>
                <form action=""className={style.form}>
                    <h1 className={style.h1}>Login</h1>
                    <div className={style.div}>
                        <input
                        className={style.input} 
                        type="email" 
                        placeholder="Gmail" 
                        id="gmail"></input>
                    </div> 
                    <div className={style.div}>
                        <input
                        className={style.input}  
                        type="password" 
                        placeholder="Senha" 
                        id="password"></input>
                    </div >
                    <div className={style.div}>
                        <button className={style.button} >Entrar</button>
                    </div>
                    <div className={style.div}>
                        <a className={style.a}  href="#">Esqueci a senha</a>
                    </div>              
                </form>
            </div>
        </body>
        </>
    )
}