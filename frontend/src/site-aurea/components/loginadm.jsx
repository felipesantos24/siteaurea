import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './loginadm.scss';
import Cabecarioadm from './cabecarioadm';
import Rodape from './rodape';

const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function entrar(e) {
        e.preventDefault();

        const usuario = {
            nome: nome.trim(),
            senha: senha.trim(),
        };

        const url = 'http://localhost:5010/entrar/';
        try {
            const resp = await axios.post(url, usuario);
            
            if (resp.data.erro) {
                toast.error(resp.data.erro);
            } else {
                localStorage.setItem('USUARIO', JSON.stringify(resp.data.usuario));
                localStorage.setItem('TOKEN', resp.data.token);

                navigate('/admin', { state: { usuario: resp.data.usuario } });
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            toast.error('Erro ao fazer login, por favor tente novamente.');
        }
    }

    return (
        <div className='sitetodoss'>
            <div className='cabecario'>
                <Cabecarioadm />
            </div>
        <div className='sitesssss'>
            <form onSubmit={entrar}>
                <div>
                    <label >Login:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
                <div>
                    <label >Senha:</label>
                    <input 
                        type="password" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
            <div className='rodapens'>
                <Rodape />
            </div>
        </div>
    );
};

export default Login;
