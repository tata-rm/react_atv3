import React, { useContext } from 'react';
import { context } from '../Context/useContext';

const ButLogout = () => {
  const { logout } = useContext(context);

  return <button className='but' onClick={logout}>Logout</button>
};

export default ButLogout;
