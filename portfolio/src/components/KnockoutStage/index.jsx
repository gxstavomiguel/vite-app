import styles from ".KnockoutStage.module.css";
import { useEffect, useState } from "react";

function KnockoutStage() {
  const [jogos, setJogos] = useState("");
  const url = `https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/oitavas-copa-2023.json`;

  useEffect(() => {
    const buscarJogos = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setJogos(data);
    };
  }, [url]);

  return (
    <section className={styles.jogos}>
      {jogos.map((jogo) => (
        <div key={jogo.jogo}>
          <h2>
            Oitavas {jogo.jogo} - chave {jogo.chave}
          </h2>
        </div>
      ))}
    </section>
  );
}

export default KnockoutStage;
