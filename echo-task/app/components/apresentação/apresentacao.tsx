'user client'
import style from './apresentacao.module.css'

export default function Apresentacao(){
    return(
        <>
            <div className={style.container}>
                <h1>Vocẽ já pensou no futuro do nosso planeta?</h1>
                <p>Descubra como pequenas atitudes podem mudar o mundo.</p>
                <p>Aprenda a como ajudar o mundo a ser um lugar melhor com pequenas atitudes.</p>
            </div>
        </>
    )
}