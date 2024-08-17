import React, { useState, useCallback, useMemo} from 'react'

function Items() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([
        { id: 1, name: 'Produto A', price: 15},
        { id: 2, name: 'Produto B', price: 5},
        { id: 3, name: 'Produto C', price: 20},
        { id: 4, name: 'Produto D', price: 99},
    ]);
    const handleClick = useCallback(() => {setCount(count + 1);}, [count]);
    const filteredItems = useMemo(() => {return items.filter(item => item.price > 10);}, [items]);
    return (
        <div>
            <p>{count}</p>
            <div className='buton'>
            <button onClick={handleClick}>Comprar</button>
            </div>
            <ul>
                {filteredItems.map(item => (<li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
    );
}
export default Items;