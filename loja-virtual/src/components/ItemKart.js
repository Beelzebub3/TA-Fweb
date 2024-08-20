import React, { useState, useCallback, useMemo} from 'react'

function ItemKart(props){

    return(
        <div className='paineis'>
            <section className='painel'>
                <ul>
                    <h2>Item</h2>
                    <h2>${props.valor}</h2>
                </ul>
                
            <div className='buton'>
                <button>Remover</button>
            </div>
            </section>
        </div>

    )
}
export default ItemKart;