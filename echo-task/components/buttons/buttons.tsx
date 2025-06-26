'use client';
import { useRouter } from 'next/navigation';
import style from './buttons.module.css'

interface ButtonsProps{
    texto:string;
    rota:string;
}

export default function Buttons({texto,rota}:ButtonsProps){
    const router = useRouter();

    const caminho = () =>{
        router.push(rota);
    }

    return(
        <div>
            <button onClick={caminho} className={style.buttons}>
                {texto}
            </button>
        </div>
    )
}