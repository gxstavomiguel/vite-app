import styles from "./Sobre.module.css";
import avatar from "./images/avatar.png";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import react from "./images/icon-react.svg";
import node from "./images/icon-node.svg";
import sql from "./images/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="imagem de perfil" className={styles.avatar} />
        <div>
          <h2>Sobre</h2>

          <p>
            Sou Gustavo Miguel <br />
            Dev Full Stack
          </p>
          <p>Trabalho com desenvolvimento Web desde 2019.</p>

          <p>Sou apaixonado por transformar ideias em realidade digital.</p>

          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas,{" "}
            <br /> com foco na experiência do usuário.
          </p>
        </div>
      </div>
      <div className={styles.tech}>
        <h3>Techs</h3>
        <img src={html} alt="Ícone do html" />
        <img src={css} alt="Ícone do css" />
        <img src={js} alt="Ícone do js" />
        <img src={react} alt="Ícone do react" />
        <img src={node} alt="Ícone do node" />
        <img src={sql} alt="Ícone do sql" />
      </div>
    </section>
  );
}

export default Sobre;
