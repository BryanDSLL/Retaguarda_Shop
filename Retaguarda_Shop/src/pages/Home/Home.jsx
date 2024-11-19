import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import PageFooter from '../components/PageFooter';

const Home = () => {
  useEffect(() => {
    document.title = "Retaguarda.Shop"; 
  }, []);

  return (
    <>
      <div className='corpoHome'>
        <div className='esquerda_home'>
          <h1 className='titulo_home'>
            Bem vindo Suporte!
          </h1>

          <p className='txt_home'>
            Esta página foi cuidadosamente montada<br />
            com o objetivo de auxiliar o suporte com<br /> 
            alguns assuntos relacionados à Retaguarda.<br /><br /> 
            Selecione ao lado a página que deseja<br /> 
            acessar!
          </p>
        </div>

        <div className='direita_home'>
          <a id='btn_home_relatorios' className="btn_home" href="/relatorios">
            <span className="btn_home_span">
              <span className="btn_text">Relatorios</span>
            </span>
          </a>
          <a id='btn_home_rtm' className="btn_home" href="/rtm">
            <span className="btn_home_span">
              <span className="btn_text">RTM</span>
            </span>
          </a>
          <a id='btn_home_comandos' className="btn_home" href="/comandos">
            <span className="btn_home_span">
              <span className="btn_text">Comandos</span>
            </span>
          </a>
          <a id='btn_home_ferramentas' className="btn_home" href="/ferramentas">
            <span className="btn_home_span">
              <span className="btn_text">Ferramentas</span>
            </span>
          </a>
        </div>
      </div>

      <PageFooter />
    </>
  );
};

export default Home;
