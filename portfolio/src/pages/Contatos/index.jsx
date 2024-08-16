import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Contatos.module.css";

function Contatos() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.contatos}>
          <h2>Contatos</h2>
          <h3>Entre em contato</h3>
          <p>Para que possamos conversar mais sobre.</p>
          <div className={styles.icones}>ícones</div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Contatos;
