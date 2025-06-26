import Header from "../components/header/header"
import Apresentacao from "../components/apresentação/apresentacao"
import Hstyle from "../components/header/header.module.css"
import Bstyle from "../components/buttons/buttons.module.css"
import Buttons from "@/components/buttons/buttons"
import Gstyle from './styles/body.module.css'



export default function Apresentação(){
    return(
        <div className={Gstyle.body}>
            <Header>
                <main>
                    <div className={Bstyle.buttonsContainer}>
                        <Buttons texto="Login" rota="/login"></Buttons>
                        <Buttons texto="Cadastro" rota="/cadastro"></Buttons>
                    </div>
                </main>
            </Header>
            <Apresentacao></Apresentacao>
        </div>

    )
}