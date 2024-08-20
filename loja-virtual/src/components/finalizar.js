import React, { useState, useCallback, useMemo} from 'react'

function Finalizar(props) {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {setCount(count + 1);}, [count]);
    return (
        <div className='finalizador'>
            <p>Total a pagar: {props.total}</p>
            <div className='finalB'>
            <button onClick={handleClick}>Comprar</button>
            </div>
        </div>
    );
}
export default Finalizar;