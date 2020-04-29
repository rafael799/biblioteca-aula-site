import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Trabalhos = () => {
  return (
    <div>
      <section class="ftco-section">
        <div class="container-fluid">
            <div class="row no-gutters justify-content-center mb-5 pb-5">
              <div class="col-md-7 text-center heading-section">
                <span class="subheading">Trabalhos</span>
                <h2>Trabalhos Recentes</h2>
              </div>
            </div>
            <div class="row no-gutters">
            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
              <div class="block-3 d-md-flex">
                <a href="portfolio.html" class="image imageWork1"></a>
                <div class="text">
                  
                  <h2 class="heading">
                    <a href="portfolio.html">
                     Secretaria de Educação
                    </a>
                  </h2>
                  <div>
                  Voluntários Cleyson e Mariah após mediação feita à convite da Secretaria de Educação
                  Voluntários Cleyson e Mariah após mediação feita à convite da Secretaria de Educação
                  Voluntários Cleyson e Mariah após mediação feita à convite da Secretaria de Educação
                  </div>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
              <div class="block-3 d-md-flex">
                <a href="portfolio.html" class="image order-2 imageWork2"></a>
                <div class="text order-1">
                <h2 class="heading">
                    <a href="portfolio.html">
                    Ensino Fundamental
                    </a>
                  </h2>
                  <p>
                  Voluntárias graduandas de História na UFF Isabelle e Maria com turma de nono ano.
                   Essas turmas são particularmente mais ansiosas e curiosas,uma vez que se despedirão 
                   do Ensino Fundamental, da escola e dos amigos.
                  </p>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
              <div class="block-3 d-md-flex">
                <a href="portfolio.html" class="image imageWork3"></a>
                <div class="text">
       
                  <h2 class="heading">
                    <a href="portfolio.html">
                    XIX Bienal no Livro
                    </a>
                  </h2>
                  <p>
                  Voluntários Cleyson, Mariah, Juliana, Isabelle e Matheus, convidados para um debate sobre 
                  educação na XIX Bienal no Livro.
                  Voluntários Cleyson, Mariah, Juliana, Isabelle e Matheus, convidados para um debate sobre educação na
                   XIX Bienal no Livro.
                  </p>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
              <div class="block-3 d-md-flex">
              <a href="portfolio.html" class="image order-2 imageWork4"></a>
              <div class="text order-1">
                
                <h2 class="heading">
                  <a href="portfolio.html">
                    Turma EJA
                  </a>
                </h2>
                <p>
                Voluntária Mariah mediando a discussão "O Flamengo ganha ou não a Libertadores? com uma turma EJA. Com esse debate trabalha-se, entre poder de argumentação e rapidez de raciocínio, a valorização dos alunos, pois partimos de um tema o qual a turma se reconhece
                </p>
              </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <div class="block-3 d-md-flex">
            <a href="portfolio.html" class="image imageWork5"></a>
            <div class="text">
              
              <h2 class="heading">
                <a href="portfolio.html">
                  Escola Marielle Franco
                </a>
              </h2>
              <p>
              Alunos do sexto ano após aula sobre Marielle Franco. Apresentamos cards que contam passagens da vida da vereadora e os alunos são desafiados a organizar esses cards cronologicamente,. Assim conhecemos sua trajetória e ainda combatemos as fakes news. 
              </p>
            </div>
          </div>
          </ScrollAnimation>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Trabalhos;
