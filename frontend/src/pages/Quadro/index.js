import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function Quadro(){

    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        api.get('quadro')
        .then(response => {
            setFuncionarios(response.data)
        })
    }, []);

    async function handleDeleteFuncionario(id){
        try{
            await api.delete('cadastro', {
                headers:{
                    Authorization: id,
                }
            });
            setFuncionarios(funcionarios.filter(funcionario => funcionario.id !== id));

            alert("Deletado com sucesso!");
        } catch {
            alert("Erro ao deletar!");
        }
    }
    
    return(
        <div className="quadro-container">
            <header>
                <span>Bem-Vindo!</span>

                <Link  className="button" to="/cadastro">
                   Cadastrar novo funcionário
                </Link>

            </header>

            <h1>Quadro de Funcionários</h1>
            
            <ul>
                {funcionarios.map(funcionario => (
                    <li key={funcionario.id}>
                        <strong>NOME:</strong>
                        <p>{funcionario.name}</p>

                        <strong>SOBRENOME:</strong>
                        <p>{funcionario.lastname}</p>

                        <strong>TELEFONE:</strong>
                        <p>{funcionario.telefone}</p>

                        <strong>EMAIL:</strong>
                        <p>{funcionario.email}</p>

                        <button type="button" onClick={() => handleDeleteFuncionario(funcionario.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};