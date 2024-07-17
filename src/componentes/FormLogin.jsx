import React, { useState, useContext } from 'react';
import { context } from '../Context/useContext';

const FormLogin = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(context);

  const fazerLogin = () => {
    login(nomeUsuario, senha);
    setNomeUsuario('');
    setSenha('');
  };

  return (
    <form onSubmit={fazerLogin}>
      <input type="text" value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)} placeholder="Nome de usuário"/>
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha"/>
      <button type='submit' id='but'>Login</button>
    </form>
  );
};

export default FormLogin;
