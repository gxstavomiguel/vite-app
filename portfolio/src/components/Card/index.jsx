import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

function Card() {
  return (
    <section className={styles.card}>
      <h3>Título do projeto</h3>
      <p>Texto descritivo do projeto</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}></div>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <button className={styles.botao}>
          <BsArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Card;
