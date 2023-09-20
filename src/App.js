import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
