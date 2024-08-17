import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Home.css';
import MyHeader from '../components/header';
import Items from '../components/items';

function Home(){
    return(
     <main className='loja'>
        <div>
            <MyHeader/>
        </div>
        <div className='formBusca'>
            <form action="https://www.google.com.br/search">
            <input type='search' name="q" id="inputlupa"/>
            </form>
        </div>
        <div className='prodList'>
            <div className='itemList'>
            <h1>Aqui vai os items</h1>
            </div>
        </div>
        <div className='buyKart'>
            <h1>Me Compre</h1>
        </div>
     </main>   
    );
};

export default Home;