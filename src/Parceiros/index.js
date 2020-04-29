import React from "react";
import logoUFF from "../images/UFF.jpg";
import logoFazimento from "../images/fazimento.png";
import logoAldeia from "../images/aldeia.png";
import logoNaprocult from "../images/naprocult.png";
import logoUFRJ from "../images/UFRJ.png";
import ScrollAnimation from "react-animate-on-scroll";

const Parceiros = () => {
  return (
    <div>
      <section class="ftco-section testimony-section ftco-degree-bg">
        <div class="container">
        <ScrollAnimation
        animateIn="bounceInRight"
        animateOut="bounceOutLeft"
      >
            <div class="row slider-text align-items-center justify-content-center">
              <div class="col-md-10 text-center">
                
                  <h2 class="title-about-us">Nossos Parceiros</h2>
                  <p class="subTitle-about-us">
                    Uma parceria estratégica é uma ligação estabelecida entre
                    duas partes, sendo que existe entre elas uma troca mútua de
                    benefícios e em que, o objetivo final, é que o resultado de
                    ligação entre as duas seja maior ou melhor do que o
                    conseguido individualmente
                  </p>
               
              </div>
            </div>
            <div
              class="row"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
                
                    <div class="d-flex justify-content-center">
                      <div class="icon color-1 d-flex justify-content-center mb-3">
                        <img src={logoUFF} width="50" height="25" />
                      </div>
                    </div>
                    <div class="media-body p-2">
                      <h3 class="heading">UFF</h3>
                      <p class="text-about">
                        A Universidade Federal Fluminense é uma instituição
                        pública de ensino superior com sede em Niterói, no
                        Estado do Rio de Janeiro.{" "}
                      </p>
                    </div>
                  
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
               
                    <div class="d-flex justify-content-center">
                      <div class="icon color-5 d-flex justify-content-center mb-3">
                        <img src={logoAldeia} width="50" height="25" />
                      </div>
                    </div>
                    <div class="media-body p-2">
                      <h3 class="heading">Instituto Aldeia </h3>
                      <p class="text-about">
                        O Instituto Aldeia é o 1º hub educacional da cidade de
                        Niterói. Somos uma empresa de consultoria educacional no
                        formato de hub educacional colaborativo
                      </p>
                    </div>
                  
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
             
                    <div class="d-flex justify-content-center">
                      <div class="icon color-2 d-flex justify-content-center mb-3">
                        <img src={logoUFRJ} width="50" height="25" />
                      </div>
                    </div>
                    <div class="media-body p-2">
                      <h3 class="heading">UFRJ </h3>
                      <p class="text-about">
                        A Universidade Federal do Rio de Janeiro, também
                        denominada Universidade do Brasil, é uma universidade
                        federal do Brasil e um centro de excelência em ensino e
                        pesquisa no país e na América
                      </p>
                    </div>
                 
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
      
                    <div class="d-flex justify-content-center">
                      <div class="icon color-3 d-flex justify-content-center mb-3">
                        <img src={logoNaprocult} width="50" height="25" />
                      </div>
                    </div>
                    <div class="media-body p-2">
                      <h3 class="heading">Naprocult </h3>
                      <p class="text-about">
                        Núcleo de apoio à Produção Cultural da UFRJ
                      </p>
                    </div>
                  
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
         
                    <div class="d-flex justify-content-center">
                      <div class="icon color-3 d-flex justify-content-center mb-3">
                        <img src={logoFazimento} width="50" height="25" />
                      </div>
                    </div>
                    <div class="media-body p-2">
                      <h3 class="heading">Fazimento Studio </h3>
                      <p class="text-about">
                        Fazimento Studio desempenha o papel grafico
                      </p>
                    </div>

                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Parceiros;
