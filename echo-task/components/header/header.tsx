import Image from "next/image"
import Link from "next/link"
import style from './header.module.css'


export default function Header(){
    return(
        <>
            <header className={style.header}>
                <div id="logo">
                    <Image src="/imagens/logo.png" alt="logo" width={80} height={80}/>
                </div>

                <div className={style.btn_login_cadastro}>
                    <Link href={'/login'}>
                        <button className={style.botao}>Login</button>
                    </Link>
                    <Link href={'/cadastro'}>
                        <button className={style.botao}>Cadastro</button>
                    </Link>
                </div>

            </header>
            <div className={style.body}></div>
        </>
    )
}