import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import PageFooter from '../components/PageFooter';
import Card from '../components/Card';

const Relatorios = () => {
  useEffect(() => {
    document.title = "Relatorios"; 
  }, []);
  return (
    <>

    <Card />


    <PageFooter />
    </>
  )
};

export default Relatorios;