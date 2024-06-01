import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from './json/videos.json'

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h1>Hello word, by @deCosta</h1>
        <section className="cards">
          { videos.map(video => <Card id={video.id} key={video.id} /> )}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
