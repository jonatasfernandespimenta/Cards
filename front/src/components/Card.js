import React, { useState, useEffect, Fragment } from 'react';

import { showCards } from '../services/api';

import './card.css';

export default function Card() {
  const [cards, setCards] = useState([]);

  useEffect(async() => {
    const { data } = await showCards();
    setCards(data);
  }, []);

  return (
    <>
        {cards.map((card) => (
          <>
          <div className="cardDiv">
            <h3>{card.name}</h3>
            <h3>{card.description}</h3>
          </div>
          </>
        ))}
    </>
  );
}
