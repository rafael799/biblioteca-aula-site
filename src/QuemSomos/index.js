import React from "react";
import logoDisciplina from '../images/sistema.png';
import logo from '../images/network.png';
import logo2 from '../images/network.png';
import ScrollAnimation from "react-animate-on-scroll";

const QuemSomos = () => {
  return (
    <div>
      <section class="ftco-section " id="abountContainer">
        <div class="container">
          <div class="row slider-text align-items-center justify-content-center">
            <div class="col-md-10 text-center">
              <ScrollAnimation animateIn="fadeIn" duration={2}>
                <span class="subheading">Um pouco de quem somos</span>
                <h2 class="title-about-us">Quem somos</h2>
                <p class="subTitle-about-us">
                Somos feitos por pessoas que acreditam que escola não é lugar de tempo vago. 
                Ainda mais escola pública, onde a maioria dos alunos tem acesso limitado a conteúdos bacanas, 
                onde não há estímulos customizados às suas potências e sobra escassez de afeto. A razão da nossa
                existência é fomentar que chegue até a escola pública conteúdos importantes para a
                vida escolar de qualquer aluno, mas que devido à desigualdade social brasileira só 
                chegam até escolas particulares.
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div class="row" style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
              <div class="media block-6 services d-block text-center">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <div class="d-flex justify-content-center">
                    <div class="icon color-1 d-flex justify-content-center mb-3">
                      <img src={logoDisciplina} width="50" height="25" />
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Justiça</h3>
                    <p class="text-about">
                      Justiça à qualidade de seguir com firmeza apesar das
                      circunstâncias adversas.{" "}
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
              <div class="media block-6 services d-block text-center">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <div class="d-flex justify-content-center">
                    <div class="icon color-2 d-flex justify-content-center mb-3">
                      <img src={logo} width="50" height="25" />
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Equidade </h3>
                    <p class="text-about">
                      Qualquer ponto para o qual converge, ou do qual diverge,
                      um feixe de ondas eletromagnéticas ou sonoras ou um feixe
                      de raios luminosos.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
              <div class="media block-6 services d-block text-center">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <div class="d-flex justify-content-center">
                    <div class="icon color-3 d-flex justify-content-center mb-3">
                      <img src={logo2} width="50" height="25" />
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Liberdade </h3>
                    <p class="text-about">
                      Que demonstra decisão ou resolução; decidido: um sujeito
                      determinado..
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;