import React from 'react';

const PageFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className='footerText'>

          <div className="leftFooterText">
          </div>

          <div className="centerFooterText">
            <ul className="social-icons">
              <li><a className="linkAjuda" target="_blank" href="https://ajuda.alterdata.com.br/suporteexpress"><i className="fab fa-uca"></i></a></li>
              <li><a className="linkUca" target="_blank" href="https://portaluca.alterdata.com.br/login/index.php"><i className="fab fa-uca"></i></a></li>
              <li><a className="linkSpice" target="_blank" href="https://sites.google.com/alterdata.com.br/centraldeajuda-spice/p%C3%A1gina-inicial"><i className="fab fa-uca"></i></a></li>
            </ul>
          </div>

          <div className="rightFooterText">
          </div>
        </div>

      </div>
    </footer>
  );
}

export default PageFooter;
