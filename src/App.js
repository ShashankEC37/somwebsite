
import './App.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services"
import Team from "./components/UI/Team"
import Testmonials from "./components/UI/Testmonials"
import NewsLetter from './components/UI/NewsLetter';
import Footer from './components/UI/Footer';
function App() {
  return <>
  <Header />
  <Hero />
  <Counter />
  <Services />
  <Team />
  <Testmonials />
  <NewsLetter />
  <Footer />
  </>

}

export default App;
