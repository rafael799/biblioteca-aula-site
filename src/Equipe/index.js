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
                <a href="#" class="btn btn-verde btn-sm">
                  <i class="fa fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center mt-4">
                <h4 class="card-title">{props.nome}</h4>
                <p style={{fontSize:14}} class="card-text">{props.descricao}</p>
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
                  nome="Mariah"
                  titulo=""
                  descricao="A Mariah gosta de encantar as pessoas, levando o propósito da Biblioteca de
                  Aulas sempre a frente. Em sala de aula se sente em casa e consegue testar novos Planos
                  de Aulas, ouvindo sempre os alunos e a direção da escola."
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Cleyson"
                  titulo=""
                  descricao="A gestão ousada e resiliente do Cleyson alçou o projeto a incríveis voos!
                  Além da sua atuação em sala de aula, Cleyson imprime inovação no dia a dia do projeto,
                  sendo peça chave no planejamento e na excelência das entregas."
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Thamires"
                  titulo=""
                  descricao="Além de uma super voluntária, que não foge de nenhum assunto proposto
                  pelos jovens, Thamires também possui aptidão em treinar e encantar novos voluntários.
                  Uma voluntária completa!"
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Shayane"
                  titulo=""
                  descricao="A Shay tem aquele jogo de cintura que poucos têm, e por isso seus temas são
                  tão inovadores. Ela leva de Empreendedorismo a Neurociência, deixando os jovens
                  vidrados e curiosos por saber mais. Está na Biblioteca de Aulas desde o início e temos
                  muito orgulho dessa trajetória."
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Isabelle"
                  titulo=""
                  descricao="Graduanda de História, Isabelle cria vínculos com cada turma, na base da
                  transparência e do respeito. Suas aulas são lúdicas, divertidas e empoderam os jovens,
                  que saem cheios de gás."
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Juliana"
                  titulo=""
                  descricao="Graduanda de Pedagogia, Juliana têm a sensibilidade aguçada, promovendo
                  debates e reflexões que impactam os jovens a fundo. Desde o início ela se desafiou em
                  sala de aula e todos têm ganhado com a experiência."
                />
                <Card
                  imagem="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                  nome="Maria"
                  titulo=""
                  descricao="Graduanda de História, Maria é aquela voluntária que adora levar curiosidades
                  e assuntos intrigantes, prendendo a atenção dos alunos como ninguém. Ela também ama
                  adquirir experiência de sala de aula!"
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
