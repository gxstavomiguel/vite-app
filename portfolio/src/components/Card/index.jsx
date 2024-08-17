import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <Link to={html_url} className={styles.botao}>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default Card;
