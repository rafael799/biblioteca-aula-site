import React from "react";
import logoInstagram from '../images/instagram.png';
import logoFacebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";



const Footer = () => {
  return (
    <div>
      <footer class="ftco-footer ftco-bg-dark ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center heading-section heading-section-white">
               <h2>Nos siga nas redes sociais</h2>

                <div>
                   <img src={logoFacebook} width="50" height="50" />

                   <img src={logoInstagram} width="50" height="50" />

                   <img src={twitter} width="50" height="50" />

                   <img src={youtube} width="50" height="50" />
                </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
