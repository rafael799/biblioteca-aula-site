import React from "react";
import "react-awesome-slider/dist/styles.css";
import "./index.css";
import ScrollAnimation from "react-animate-on-scroll";

const Card = (props) => {
  return (
    <div class="col-xs-12 col-sm-6 col-md-4">
    <ScrollAnimation animateIn="fadeIn" duration={2}>
      <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
          <div class="frontside">
            <div class="card">
              <div class="card-body text-center">
                <p>
                  <img class=" img-fluid" src={props.imagem} alt="card image" />
                </p>
                <h4 class="card-title">{props.nome}</h4>
                <p class="card-text">{props.titulo}</p>
                <a href="#" class="btn btn-primary btn-sm">
                  <i class="fa fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center mt-4">
                <h4 class="card-title">{props.nome}</h4>
                <p class="card-text">{props.descricao}</p>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-skype"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
};

const Equipe = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn" duration={2}>
        <section id="timeContainer" class="pb-5 ftco-section-parallax">
          <div class="parallax-img d-flex align-items-center">
            <div class="container">
              <h5 class="section-title h1">Nosso Time</h5>

              <div class="row justify-content-center mb-5 pb-5"> 
                <div class="col-md-7 text-center heading-section heading-section-white ">
                  <div style={{ color: "#fff" }}>
                    Atuamos em uma escola de grande porte, que recebe nos turnos
                    manhã e tarde, alunos de sexto a nono ano do ensino
                    Fundamental. Temos professores voluntários aptos a entrar em
                    sala levando a nossa proposta. Na gestão, são 7 feras
                    cuidando de tudo: operação, editais, divulgação,
                    acolhimento.{" "}
                  </div>
                </div>
              </div>
              <div class="row">
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Rafael"
                  titulo="Desenvolvedor"
                  descricao="O modo desenvolvedor do Android permite realizar diversas "
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Mariah"
                  titulo="CO"
                  descricao="O modo desenvolvedor do Android permite realizar diversas"
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Jessica"
                  titulo="Professora"
                  descricao="O modo desenvolvedor do Android permite realizar diversas"
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Carla"
                  titulo="Assistente"
                  descricao="O modo desenvolvedor do Android permite realizar diversas"
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="João"
                  titulo="Teste"
                  descricao="O modo desenvolvedor do Android permite realizar diversas"
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Brain"
                  titulo="Analista"
                  descricao="O modo desenvolvedor do Android permite realizar diversas"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Equipe;
