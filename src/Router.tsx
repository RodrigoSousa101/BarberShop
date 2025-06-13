import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipa from './pages/Equipa';
import Galeria from './pages/Galeria';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipa" element={<Equipa />} />
      <Route path="/galeria" element={<Galeria />} />
    </Routes>
  );
}

export default App;




