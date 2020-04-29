import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import logoInstagram from '../images/instagram.png';

const Footer = () => {
  return (
    <div>
      <footer class="ftco-footer ftco-bg-dark ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
               <h2>Nos siga nas redes sociais</h2>
                <p>
                 <img src={logoInstagram} width="50" height="25" />
                </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
