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
        <div className="container">
            <h1>Login</h1>
                <div className="texto">
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
                <div className="boton">
                    <button onClick={clicaEnter}>Entrar</button>
                </div>
            </div>
            <div className="mensager">
                    <p>{mensagem}</p>
            </div>
            <Link to={"/home"}>linkage</Link>
        </div>
    )}
    export default Form;