import styles from './card.module.css';

interface CardsProps {
  titulo: string;
  linhas: string[];
  pontos: string;
}

export default function Cards({ titulo, linhas, pontos }: CardsProps) {
  return (
    <div className={styles.card}>
      <div className={styles.espiral}></div>
      <div className={styles.conteudo}>
        {linhas.map((linha, i) => (
          <p key={i} className={styles.texto}>{linha}</p>
        ))}
      </div>
      <div className={styles.icones}>
        📷 ✏️ 🔍
      </div>
      <div className={styles.pontos}>*{pontos}</div>
    </div>
  );
}
