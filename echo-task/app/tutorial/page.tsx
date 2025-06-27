'use client'
import Header from "../../components/header/header"
import Cards from "@/components/cards/card"
import styles from "@/components/cards/card.module.css"
import Bstyle from '../styles/body.module.css'
import ContainerTutorial from "@/components/container_tutorial/container"

export default function Tutorial() {
    return (
        <div className={Bstyle.body}>
            <main>
                <Header />
                <ContainerTutorial />           
            </main>
        </div>
    )
}
