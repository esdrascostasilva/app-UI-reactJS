import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from './json/videos.json'

const categories = 
[
  "Professional", "Kids", "Planet", "Football", "Nature"
]

function filterCategories(id)
{
  return videos.filter( video => video.category === categories[id] )
}

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>

        {/* <h1>Hello word, by @deCosta</h1>
        <section className="cards">
          { videos.map(video => <Card id={video.id} key={video.id} /> )}
        </section> */}

        <Category category={categories[0]}>
          { filterCategories(0).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>

        <Category category={categories[1]}>
          { filterCategories(1).map((video) => <Card id={video.id} key={video.id} /> )}
        </Category>

      </Container>
      <Footer />
    </>
  );
}

export default App;
