import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

function Contatos() {
  return (
    <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>
        <div className={styles.icones}>
          <a
            href="mailto:gustavomiguelsilvafc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMail className={styles.icone} />
          </a>

          <a
            href="https://www.instagram.com/gxstavo_miguel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={styles.icone} />
          </a>

          <a
            href="https://www.youtube.com/@zgxstavo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube className={styles.icone} />{" "}
          </a>

          <a
            href="https://github.com/gxstavomiguel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icone} />{" "}
          </a>

          <BsLinkedin className={styles.icone} />
        </div>
      </section>
    </>
  );
}

export default Contatos;
