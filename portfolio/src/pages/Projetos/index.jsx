import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/gxstavomiguel/repos"
      );
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, []);

  return (
    <section className={styles.projeto}>
      <h2>Sobre</h2>
      {repositories.legnth > 0 ? (
        <section className={styles.lista}>
          <Card />
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Projetos;
