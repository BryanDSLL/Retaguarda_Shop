import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import PageFooter from '../components/PageFooter';
import CardFerramentas from '../components/CardFerramentas';

const Ferramentas = () => {
  useEffect(() => {
    document.title = "Ferramentas"; 
  }, []);
  return (
    <>

    <CardFerramentas />


    <PageFooter />
    </>
  )
};

export default Ferramentas;