import React, { useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import PageFooter from '../components/PageFooter';
import CardRtm from '../components/CardRtm';

const Rtm = () => {
  useEffect(() => {
    document.title = "RTM"; 
  }, []);
  return (
    <>

    <CardRtm />


    <PageFooter />
    </>
  )
};

export default Rtm;