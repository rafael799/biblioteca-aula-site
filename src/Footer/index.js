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
                <a href="https://www.facebook.com/bibliotecadeaulas/?ref=bookmarks" target="_blank">
                  <img src={logoFacebook} width="50" height="50" />
                </a>
                   
                <a href="https://www.instagram.com/bibliotecadeaulas/" target="_blank">
                   <img src={logoInstagram} width="50" height="50" />
                </a>

                
                <a href="https://www.google.com/search?q=%40AulasBiblioteca&rlz=1C1CHBD_pt-PTBR904BR904&oq=%40AulasBiblioteca&aqs=chrome.0.69i59j69i60.424j0j7&sourceid=chrome&ie=UTF-8" target="_blank">
                   <img src={twitter} width="50" height="50" />
                </a>

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
