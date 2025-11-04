import Header from './components/Header';
import Hero from './components/Hero';
import Collection from './components/Collection';
import CreateScent from './components/CreateScent';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Collection />
      <CreateScent />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
