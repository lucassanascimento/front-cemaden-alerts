import React, { useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../Services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, number, city, uf };
    console.log('data', data);
    try {
      await api.post('user', data);
      history.push('/thankyou');
    } catch (err) {
      alert('Erro ao cadastar Usuário');
    }
  }

  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <h1>Cadastre-se Agora ;)</h1>
          <p>
            Faça seu cadastro e receba notificações de alertas de desastres
            naturais
          </p>
          <a className='back-link' href='https://www.gov.br/cemaden/pt-br'>
            <FiArrowRight size={16} color='#E02041' />
            Saber mais sobre CEMADEN
          </a>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder='Nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder='WhatsApp'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>

          <div className='input-group'>
            <input
              placeholder='Cidade'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder='UF'
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
