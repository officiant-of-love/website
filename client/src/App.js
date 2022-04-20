import './App.css';
import Footer from './components/Footer';

import Weddings from './pages/Weddings';
import About from './pages/About';
import Funerals from './pages/Funerals';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <main>
        {/* <Weddings /> */}
        {/* <About /> */}
        {/* <Funerals /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
