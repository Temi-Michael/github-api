import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='404' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
