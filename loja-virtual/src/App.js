import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import PageLog from './pages/pageLogin';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLog/>} />
        <Route path="/principal" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
