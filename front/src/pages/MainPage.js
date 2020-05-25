import React from 'react';

import { MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom'

export default function MainPage({ children }) {
  return (
    <div className="main">
      {children}
      <Link to="/cardcreate" className="iconLink">
        <MdAddCircleOutline className="icon" size="80" />
      </Link>
    </div>
  );
}
