import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h1>Hello word, by @deCosta</h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
