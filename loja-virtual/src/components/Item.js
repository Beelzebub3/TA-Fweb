import React, { useState, useCallback, useMemo} from 'react'

function Item(props){
    function teste(){
        alert("Adicionado ao Carrinho!");

    };
    return(
        
        <div className='paineis'>
            <section className='painel'>
                <ul>
                    <h2>{props.nome}</h2>
                    <h2>${props.valor}</h2>
                </ul>
            <div className='buton'>
                <button onClick={teste}>Comprar</button>
            </div>
            </section>
        </div>
    )
}
export default Item;