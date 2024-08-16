import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import pageLog from './pages/pageLogin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="./pages/pageLogin" element={<pageLog/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
