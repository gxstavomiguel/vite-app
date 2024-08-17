import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

function Card({ name, description, html_url }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}></div>
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <a href={html_url} target="_blank" rel="nopenner norefferer" className={styles.botao}>
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
