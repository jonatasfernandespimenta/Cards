import React, { useState } from 'react';
import api from '../services/api';
import './card.css';

export default function CreateCard({ history }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function createCard(e) {
    e.preventDefault();
    api.post('/create', { name, description });
    history.push({
      pathname: '/',
    });
  }

  return (
    <div className="cardCreate">
        <form>
            <input placeholder="Nome do card" value={name} onChange={event => setName(event.target.value)} />
            <br />
            <input className="desc" placeholder="Descrição do card" value={description} onChange={event => setDescription(event.target.value)} />
            <br /><br />
            <button type="submit" className="ripple" onClick={createCard}>Criar</button>
        </form>
    </div>
  );
}
