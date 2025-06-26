'use client'
import Header from "../../components/header/header"
import Cards from "@/components/cards/card"
import styles from "@/components/cards/card.module.css"

export default function Tutorial() {
    return (
        <main>
            <Header />           
            <div className={styles.gridContainer}>
                <Cards titulo="A" linhas={["linha 1", "linha 2"]} pontos="10" />
                <Cards titulo="B" linhas={["linha 1", "linha 2"]} pontos="20" />
                <Cards titulo="C" linhas={["linha 1", "linha 2"]} pontos="30" />
                <Cards titulo="D" linhas={["linha 1", "linha 2"]} pontos="40" />
            </div>
        </main>
    )
}
