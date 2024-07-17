import React, { useContext } from 'react';
import { context } from '../Context/useContext';

const PerfilLogin = () => {
  const { usuario, logout } = useContext(context);

  if (!usuario) {
    return <p>Nenhum usuário logado</p>;
  }

  return (
    <div>
      <p>Usuário {usuario.nomeUsuario}</p>
    </div>
  );
};

export default PerfilLogin;
