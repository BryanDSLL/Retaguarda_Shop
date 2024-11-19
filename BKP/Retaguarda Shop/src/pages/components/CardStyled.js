import styled from 'styled-components';

const CardStyled = styled.div`

.ag-format-container {
  width: 960px; /* Reduzido de 1052px */
  margin: 0 auto;
}

body {
  background-color: #000;
}

.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 40px 0; /* Reduzido de 46px */
  justify-content: center; /* Centraliza os cards */
}

.ag-courses_item {
  -ms-flex-preferred-size: calc(28.5% - 24px); /* Reduzido de 30.67% */
  flex-basis: calc(28.5% - 24px);
  margin: 0 12px 24px; /* Reduzido de 13.8px e 27.6px */
  overflow: hidden;
  border-radius: 24px; /* Reduzido de 26px */
}

.ag-courses-item_link {
  display: block;
  padding: 24px 16px; /* Reduzido de 27.6px e 18.4px */
  background-color: #121212;
  overflow: hidden;
  position: relative;
}

.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}

.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(6); /* Reduzido de 8 */
  -ms-transform: scale(6); /* Reduzido de 8 */
  transform: scale(6); /* Reduzido de 8 */
}

.ag-courses-item_title {
  min-height: 40px; /* Reduzido de 46px */
  margin: 0 0 20px; /* Reduzido de 23px */
  font-size: 24px; /* Reduzido de 27.6px */
  color: #FFF;
  font-weight: bold;
  z-index: 2;
  position: relative;
}

.ag-courses-item_date-box {
  font-size: 14px; /* Reduzido de 16.6px */
  color: #FFF;
  z-index: 2;
  position: relative;
}

.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234; /* Cor amarela */
  margin-left: 8px; /* Espaçamento à esquerda */
}

.ag-courses-item_bg {
  height: 96px; /* Reduzido de 105.8px */
  width: 96px;
  background-color: #f9b234;
  z-index: 1;
  position: absolute;
  top: -65px; /* Reduzido de 69px */
  right: -65px; /* Reduzido de 69px */
  border-radius: 50%;
  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

/* Cores de fundo diferentes para os cards */
.ag-courses_item:nth-child(2n) .ag-courses-item_bg { background-color: #3ecd5e; }
.ag-courses_item:nth-child(3n) .ag-courses-item_bg { background-color: #e44002; }
.ag-courses_item:nth-child(4n) .ag-courses-item_bg { background-color: #952aff; }
.ag-courses_item:nth-child(5n) .ag-courses-item_bg { background-color: #cd3e94; }
.ag-courses_item:nth-child(6n) .ag-courses-item_bg { background-color: #4c49ea; }

/* Ajustes para telas menores */
@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(45% - 24px); /* Reduzido de 46% */
    flex-basis: calc(45% - 24px);
  }
  .ag-courses-item_title {
    font-size: 20px; /* Ajuste de fonte */
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 85%; /* Reduzido de 88% */
  }
}

@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 90%; /* Reduzido de 92% */
    flex-basis: 90%;
  }
  .ag-courses-item_title {
    min-height: 60px; /* Reduzido de 66px */
    font-size: 20px; /* Ajuste de fonte */
  }
  .ag-courses-item_link {
    padding: 18px 35px; /* Reduzido de 20px e 37px */
  }
  .ag-courses-item_date-box {
    font-size: 13px; /* Reduzido de 14.7px */
  }
}

`;

export default CardStyled;
