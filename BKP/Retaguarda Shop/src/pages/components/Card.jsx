import React, { useState, useEffect } from 'react';
import CardStyled from './CardStyled';

const Card = () => {
  const [cards, setCards] = useState([]);

  // Função para buscar os dados da API
  const fetchCards = async () => {
    try {
      const response = await fetch('https://672e4eeb229a881691efaeb3.mockapi.io/API/retaguardashop/Retaguardashop');
      if (response.ok) {
        const data = await response.json();
        setCards(data); // Atualiza o estado com os dados da API
      } else {
        console.error('Erro ao buscar os dados da API');
      }
    } catch (error) {
      console.error('Erro ao enviar a requisição', error);
    }
  };

  // useEffect para fazer a requisição quando o componente é montado
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <CardStyled> {}
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {cards.map((item) => (
            <div key={item.id} className="ag-courses_item">
              <a href={item.link} className="ag-courses-item_link" target="_blank">
                <div className="ag-courses-item_bg"></div>

                <div className="ag-courses-item_title">
                  {item.descricao}
                </div>

                <div className="ag-courses-item_date-box">
                  Start:
                  <span className="ag-courses-item_date">
                    {new Date(item.dtcriacao).toLocaleDateString()}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
