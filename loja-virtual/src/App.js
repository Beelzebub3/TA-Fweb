import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import PageLog from './pages/pageLogin';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
