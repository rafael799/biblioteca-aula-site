import React from "react";
import logoDisciplina from "../images/sistema.png";
import logo from "../images/network.png";
import logo2 from "../images/network.png";
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
                  Somos feitos por pessoas inconformadas pela desigualdade que
                  assola a vida escolar de alunos de escolas públicas. Um desses
                  problemas são os tempos vagos. Em escolas de grande porte esse
                  problema toma proporções que prejudicam o desempenho do aluno
                  bem como sua vontade de continuar estudando. Pensando em
                  transformar este problema numa solução levamos oficinas e
                  debates para as escolas que mais precisam, entrando em sala
                  nestes tempos que seriam vagos. Trabalhamos com e para os
                  alunos temas relevantes como planejamento pessoal, novo
                  mercado de trabalho e escuta afetiva, temas que objetivam
                  sempre destacar e mostrar aos alunos a sua própria potência.
                </p>

                <p class="subTitle-about-us">
                Infelizmente em muitas escolas públicas do nosso país alunos têm acesso limitado a
                conteúdos diferenciados, não há estímulos customizados às suas potências e o afeto é
                escasso. Mesmo com esforços e dedicação de professores e diretores dessas escolas, o
                sucateamento da educação prejudica e limita a vida de muitos jovens, ano após ano. A
                razão da nossa existência é fomentar que chegue até a escola pública conteúdos
                importantes para a vida escolar de qualquer aluno, mas que devido à desigualdade social
                brasileira só chegam até escolas particulares.
                </p>
              </ScrollAnimation>
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
                    A vida escolar de jovens pobres é injusta. Não romantizar a superação imposta
                    por essa injustiça é a nossa forma de repara-lá, enchendo nossas aulas de afeto, escuta e
                    informação direcionada para aqueles alunos..{" "}
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
                    Jovens, sejam eles pobres ou ricos, possuem potências inimagináveis. A
                    trajetória escolar no Brasil mina a potência dos jovens pobres, ao passo que a dos jovens
                    ricos são hiperestimuladas pelas escolas particulares. Falar abertamente disso em sala de
                    aula é necessário.
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
                    Qualquer jovem pode ser o que quiser, uns com mais dificuldades que outros.
                    Juntos, desbravamos caminhos possíveis e desconstruímos os impossíveis.
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
