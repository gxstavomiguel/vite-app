import Card from "../../components/Card";
import styles from "./Projeto.module.css";

function Projetos() {
  return (
    <section className={styles.projeto}>
      <h2>Sobre</h2>
      <section className={styles.lista}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}

export default Projetos;
