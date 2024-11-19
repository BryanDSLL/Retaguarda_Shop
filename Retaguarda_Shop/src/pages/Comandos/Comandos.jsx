import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import PageFooter from '../components/PageFooter';
import CardComandos from '../components/CardComandos';

const Comandos = () => {
  useEffect(() => {
    document.title = "Comandos"; 
  }, []);
  return (
    <>

    <CardComandos />


    <PageFooter />
    </>
  )
};

export default Comandos;