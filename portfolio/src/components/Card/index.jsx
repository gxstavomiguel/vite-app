import styles from "./Card.module.css";

function Card() {
  return (
    <section className={styles.card}>
      <h3>Título do projeto</h3>
      <p>Texto descritivo do projeto</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>html</div>
        <button className={styles.botao}>Seta</button>
      </div>
    </section>
  );
}

export default Card;
