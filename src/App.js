import Banner from "./components/Banner";
import Card from "./components/Card";
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
        <Card />
      </Container>
      <Footer />
    </>
  );
}

export default App;
