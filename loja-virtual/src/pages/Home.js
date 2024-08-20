import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './Home.css';
import MyHeader from '../components/header';
import Items from '../components/items';
import Item from '../components/Item';
import Finalizar from '../components/finalizar';
import ItemKart from '../components/ItemKart';

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
                <Item nome='Tekketsu Vol 1' valor='35'/>
                <Item nome='Nekketsu Vol 2' valor='20'/>
                <Item nome='Reiketsu Vol 3' valor='75'/>
            </div>
        </div>
        <div className='buyKart'>
            <div className='itemKart'>
                <ItemKart valor='100'/>
                <ItemKart valor='200'/>
                <ItemKart valor='500'/>
                <Finalizar total={900}/>
            </div>
        </div>
     </main>   
    );
};

export default Home;