import React from 'react';
import './styles.css';
import { FiArrowRight } from 'react-icons/fi';

export default function ThankYou() {
  return (
    <div className='thankyou-container'>
      <div className='content'>
        <section>
          <h1>Muito Obrigado ;)</h1>
          <p>
            Apartir de agora você receberá todos os alertas para sua cidade.
            Fique de olho.
          </p>
          <a className='back-link' href='https://www.gov.br/cemaden/pt-br'>
            <FiArrowRight size={16} color='#E02041' />
            Saber mais sobre CEMADEN
          </a>
        </section>
      </div>
    </div>
  );
}
