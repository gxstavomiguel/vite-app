import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Contatos.module.css";
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'





function Contatos() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.contatos}>
          <h2>Contatos</h2>
          <h3>Entre em contato</h3>
          <p>Para que possamos conversar mais sobre.</p>
          <div className={styles.icones}>ícones
            <GoMail />
            <BsInstagram />
            <BsYoutube />
            <BsGithub />
            <BsLinkedin />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Contatos;
