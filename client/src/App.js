import { Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/funerals" element={<Funerals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
