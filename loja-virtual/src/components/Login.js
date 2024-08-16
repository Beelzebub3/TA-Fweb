import React, {useState, useMemo} from "react";
import{ Link } from 'react-router-dom';

function Form() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
    const mudaNome = (event) => {
        setNome(event.target.value);
    }
    const mudaSenha = (event) => {
        setSenha(event.target.value)
    }
    const clicaEnter = (event) => {
        event.preventDefault();
        setMensagem(`Bem vindo, ${nome}; sua senha é: ${senha}`)
    }
    return (
        <div>
            <form onSubmit={clicaEnter}>
                <input
                    type="text"
                    value={nome}
                    placeholder="Digite seu nome"
                    onChange={mudaNome}
                />
                <input
                    type="password"
                    value={senha}
                    placeholder="Digite sua senha"
                    onChange={mudaSenha}
                />
            </form>
            <button onClick={clicaEnter}>Entrar</button>
            <p>{mensagem}</p>
        </div>
    )}
    export default Form;