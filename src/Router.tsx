import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipa from './pages/Equipa';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipa" element={<Equipa />} />
    </Routes>
  );
}

export default App;




