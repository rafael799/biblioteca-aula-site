import React from "react";
import logoUFF from "../images/UFF.png";
import logoFazimento from "../images/fazimento.png";
import logoAldeia from "../images/aldeia.png";
import logoNaprocult from "../images/naprocult.png";
import logoUFRJ from "../images/UFRJ.png";
import ScrollAnimation from "react-animate-on-scroll";

const Card = (props) => {
  return (
    <div>
      <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
        <div class="media block-6 services d-block text-center">
          <div class="d-flex justify-content-center">
            <div
              class="icon-parceiros color-1 d-flex justify-content-center mb-3"
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={logoUFF} width="130" height="100" />
            </div>
          </div>
          <div class="media-body p-2">
            <h3 class="heading">UFF</h3>
            <p class="text-about">
              {props.mensagem}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Parceiros = () => {
  return (
    <div>
      <section
        class="ftco-section testimony-section ftco-degree-bg"
        id="parceirosContainer"
      >
        <div class="container">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <div class="row slider-text align-items-center justify-content-center">
              <div class="col-md-10 text-center">
                <h2 class="title-about-us">Nossos Parceiros</h2>
                <p class="subTitle-about-us">
                  A trajetória da Biblioteca de Aulas só é possível graças a
                  pessoas e empresas que encontramos pelo caminho e desejam
                  fazer parte de alguma forma do projeto. De todas as parceiras
                  estendemos o relacionamento por entender que uma rede de
                  pessoas inconformadas e com gana de mudar só deve aumentar.
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
                    <div
                      class="icon-parceiros color-1 d-flex justify-content-center mb-3"
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={logoUFF} width="130" height="100" />
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">UFF</h3>
                    <p class="text-about">
                      A Universidade Federal Fluminense é uma instituição
                      pública de ensino superior com sede em Niterói, no Estado
                      do Rio de Janeiro.{" "}
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
                  <div class="d-flex justify-content-center">
                    <div
                      class="icon-parceiros color-5 d-flex justify-content-center mb-3"
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={logoAldeia} width="150" height="110" />
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
                    <div
                      class="icon-parceiros color-7 d-flex justify-content-center mb-3"
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={logoUFRJ} width="200" height="150" />
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">UFRJ </h3>
                    <p class="text-about">
                      Em 2018 fomos vencedores do Prêmio Ações Locais de
                      Niterói, o que nos propiciou aperfeiçoar nossa operação e
                      alçar voos ainda maiores.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
                  <div class="d-flex justify-content-center">
                    <div
                      class="icon-parceiros color-3 d-flex justify-content-center mb-3"
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <img src={logoNaprocult} width="200" height="150" />
                      </div>
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Naprocult </h3>
                    <p class="text-about">
                      O Núcleo de apoio à Produção Cultural da UFRJ presta
                      orientações e consultorias gratuitas sobre elaboração de
                      projetos, produção executiva, captação de recursos e
                      prestação de contas.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 d-flex align-self-stretch">
                <div class="media block-6 services d-block text-center">
                  <div class="d-flex justify-content-center">
                    <div
                      class="icon-parceiros color-6 d-flex justify-content-center mb-3"
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <img src={logoFazimento} width="200" height="150" />
                      </div>
                    </div>
                  </div>
                  <div class="media-body p-2">
                    <h3 class="heading">Fazimento Studio </h3>
                    <p class="text-about">
                      Fazimento Studio desempenha o papel gráfico dos nossos
                      materiais e redes sociais.
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
