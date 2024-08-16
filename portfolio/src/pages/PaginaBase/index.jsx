import Header from "../../componentes/Header";
import Container from "../../componentes/cONTAINER";
import Footer from "../../componentes/Footer";
import { Outlet } from "react-router-dom";

function PageBase() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet/>
      </Container>
      <Footer />
    </main>
  );
}

export default PageBase;
