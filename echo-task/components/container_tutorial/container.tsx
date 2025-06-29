// components/container.tsx
import styles from './container.module.css';
import Image from 'next/image';
import Cards from '../cards/card';
import Buttons from '../buttons/buttons'; 

export default function ContainerTutorial() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tutorial: uma apresentação</h1>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          Essa é a barra de tarefas, onde você pode acessar as missões, perfil e mais
        </div>

        <div className={styles.card}>
          Aqui é a área de missões/tarefas.
          <Image src="/imagens/mission.png" alt="mission" width={20} height={20} />
          Ao completar, você ganha pontos.
        </div>

        <div className={styles.card}>
          Aqui é uma missão de teste. Ao apertar nela você verá os detalhes dela
          <div>
            <Cards titulo="Misão de coleta" linhas={["Coletar 10 garrafas plasticas", "Coletar 2L de oléo de cozinha usado"]} pontos="10" />
          </div>
        </div>

        <div className={styles.card}>
          <h2>Missão de Teste</h2>
          <p>Verifique as informações dela</p>
          <p className={styles.small}>Submissões: 10 Pontos</p>
        </div>

        <div className={styles.card}>
          <h2>Tarefa Exemplo</h2>
          <p>Descrição da tarefa</p>
          <div className={styles.infoLine}>
            <span>10 Pontos</span>
            <span>10 Bônus</span>
          </div>
          <button className={styles.btn}>Abrir</button>
        </div>

        <div className={styles.card}>
          <p>Esse é o EcoTask, esperamos que se divirta com nosso site!</p>
          <Buttons texto="Iniciar" rota="/home  "></Buttons>
        </div>
        

      </div>
      
    </div>
   
  );
}
