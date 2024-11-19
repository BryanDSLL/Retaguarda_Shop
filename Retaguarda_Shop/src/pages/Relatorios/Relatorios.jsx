import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import PageFooter from '../components/PageFooter';
import CardRelatorios from '../components/CardRelatorios';

const Relatorios = () => {
  useEffect(() => {
    document.title = "Relatorios"; 
  }, []);
  return (
    <>

    <CardRelatorios />


    <PageFooter />
    </>
  )
};

export default Relatorios;