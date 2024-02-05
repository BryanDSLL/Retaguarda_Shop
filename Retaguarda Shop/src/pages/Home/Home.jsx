import React from 'react';
import 'bulma/css/bulma.min.css';
import PageFooter from '../components/PageFooter';

const Home = () => {
  return (
    <>
    <div className='corpoHome'>
    <div className='esquerda_home'>
      <h1 className='titulo_home'>
        Bem vindo Suporte!
      </h1>

      <p className='txt_home'>
        Esta página foi cuidadosamente montada<br></br>
        com o objetivo de auxiliar o suporte com<br></br> 
        alguns assuntos relacionados à Retaguarda.<br></br><br></br> 
        Selecione ao lado a página que deseja<br></br> 
        acessar!
      </p>
    </div>

    <div className='direita_home'>
    <a class="btn_home" href="/relatorios"><span class="btn_home_span">Relatorios</span></a>
    <a class="btn_home" href="/rtm"><span class="btn_home_span">RTM</span></a>
    <a class="btn_home" href="/comandos"><span class="btn_home_span">Comandos</span></a>
    <a class="btn_home" href="/ferramentas"><span class="btn_home_span">Ferramentas</span></a>
    </div>
    </div>

    <PageFooter></PageFooter>

    </>
  )
};

export default Home;
