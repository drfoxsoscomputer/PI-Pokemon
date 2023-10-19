import React from 'react';
import './Loading.Styles.css'; // Estilo CSS para el loader

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loading;
