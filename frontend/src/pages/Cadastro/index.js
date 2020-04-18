import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../global.css';
import './styles.css';
import api from '../../services/api';

export default function Cadastro(){

    const history = useHistory();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    async function handleCadastro(e){
        e.preventDefault();

        const data = {
            name,
            lastname,
            telefone,
            email
        };

        console.log(data);

        /**TODO Conexão com a API */
        try{
            await api.post('cadastro', data)
        
            alert(`Funcionario ${data.name} Inserido com Sucesso!!`);
            history.push('/');
        } catch (err) {
            alert('Não foi possível cadastrar');
        }
    }

    return(
        <div className="newcadastro-container">
            <div className="content">
                <h1>Cadastrar novo funcionário</h1>

                <form onSubmit={handleCadastro}>
                    <input
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input
                    placeholder="Sobrenome"
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                    />
                    <input
                    placeholder="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    />
                    <input
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
            
        </div>
    );
}