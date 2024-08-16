import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './pageLogin.css';
import MyHeader from '../components/header';
import Form from '../components/Login';

function pageLog() {
  return (
    <div className="content">
      <div>
        <MyHeader/>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
}
export default pageLog;
