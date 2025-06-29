import { useState } from 'react';
import styles from './card.module.css';

interface CardMissaoProps {
  titulo: string;
  linhas: string[];
  pontos: string;
}

export default function CardMissao({ titulo, linhas, pontos }: CardMissaoProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setAberto(true)}>
        <h2>{titulo}</h2>
        {linhas.slice(0, 2).map((linha, i) => (
          <p key={i} className={styles.small}>{linha}</p>
        ))}
        <div className={styles.infoLine}>
          <span>Pontos: {pontos}</span>
        </div>
        <button className={`${styles.btn} ${styles.start}`}>Ver detalhes</button>
      </div>

      {aberto && (
        <div className={styles.modalOverlay} onClick={() => setAberto(false)}>
          <div className={styles.cardDetalhado} onClick={(e) => e.stopPropagation()}>
            <h2>{titulo}</h2>
            <ul>
              {linhas.map((linha, i) => (
                <li key={i}>{linha}</li>
              ))}
            </ul>
            <p><strong>Pontos:</strong> {pontos}</p>
            <button className={styles.btn} onClick={() => setAberto(false)}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}
