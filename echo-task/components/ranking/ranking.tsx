'use client';
import { useState } from 'react';
import styles from './ranking.module.css';

interface Usuario {
  nome: string;
  missoesCompletas: number[];
  pontuacao: number;
}

export default function Ranking() {
  const [usuarios] = useState<Usuario[]>([
    { nome: 'Lucas', missoesCompletas: [1, 2, 3], pontuacao: 450 },
    { nome: 'Joana', missoesCompletas: [1, 2], pontuacao: 250 },
    { nome: 'Carlos', missoesCompletas: [2], pontuacao: 150 },
    { nome: 'Maria', missoesCompletas: [], pontuacao: 0 },
  ]);

  const ranking = [...usuarios].sort((a, b) => b.pontuacao - a.pontuacao);

  return (
    <div className={styles.rankingContainer}>
      <h2 className={styles.titulo}>🏆 Ranking de Missões</h2>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontos</th>
            <th>Missões Completas</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((usuario, index) => (
            <tr key={index}>
              <td>{index + 1}º</td>
              <td>{usuario.nome}</td>
              <td>{usuario.pontuacao}</td>
              <td>{usuario.missoesCompletas.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
