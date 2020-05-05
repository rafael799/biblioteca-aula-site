import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Card = (props) => {
  return (
    <div>
      <div class="block-3 d-md-flex">
        <a href="portfolio.html" class={props.imagem}></a>
        <div class={props.classe}>
          <h2 class="heading">
            <a href="portfolio.html">{props.titulo}</a>
          </h2>
          <div>{props.mensagem}</div>
        </div>
      </div>
    </div>
  );
};

const Trabalhos = () => {
  return (
    <div>
      <section class="ftco-section" id="trabalhoContainer">
        <div class="container-fluid">
          <div class="row no-gutters justify-content-center mb-5 pb-5">
            <div class="col-md-7 text-center heading-section">
              <span class="subheading">Dedicando nosso tempo</span>
              <h2>Trabalhos Recentes</h2>
            </div>
          </div>
          <div class="row no-gutters">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <Card
                imagem="image imageWork1"
                titulo="Secretaria de Educação"
                classe="text"
                mensagem="Evento Manhã do Futuro, onde 600 alunos do 9º ano de 12 escolas
                  compareceram para pensar e ampliar suas oportunidades
                  educacionais na fase de transição do Ensino Fundamental para
                  o Ensino Médio. A partir da nossa experiência em sala de
                  aula percebemos as turmas de 9º ano muito ansiosas com as
                  incertezas dos anos de ensino médio que estão por vir, para
                  qual escola irão, as novas amizades que farão. Com essa
                  valiosa informação em mãos, criamos oficinas voltadas para a
                  realidade que essas turmas estão vivendo e somos sempre
                  muito bem recebidos. "
              />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <Card
                imagem="image order-2 imageWork2"
                titulo="Voluntarias em Ação"
                classe="text order-1"
                mensagem="Graduandas de História na UFF, Isabelle e Maria levam
              diversas propostas para as turmas e escolhem junto com os
              alunos qual oficina seguirão. Elas já falaram de passagens
              curiosas da história medieval, de feminismo, ENEM,
              ansiedade. Com a identificação imediata dos alunos com os
              temas, tudo flui em sala de aula, e todos saem ganhando: os
              alunos com uma troca rica num tempo que seria ocioso e as
              voluntárias com a experiência de sala de aula."
              />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <Card
                imagem="image imageWork1"
                classe="text"
                titulo=" XIX Bienal do Livro"
                mensagem="Este convite muito orgulhou a Biblioteca de Aulas! Levamos
              nossos voluntários para debater os rumos da educação neste
              super evento que é Bienal do Livro. Pudemos apresentar
              nossas ideias no estande da Prefeitura de Niterói -
              Secretaria Municipal de Educação, Ciência e Tecnologia e
              trocar impressões com outros projetos sociais de Niterói."
              />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <Card
                imagem="image order-2 imageWork4"
                titulo="Turma EJA"
                classe="text order-1"
                mensagem="um dos grande assuntos de 2019 foi o Clube de Regatas
              Flamengo ter chegado à final da Libertadores, após 38 anos
              sem alcançar tal feito. Criamos então o debate O Flamengo
              ganha ou não a Libertadores?” Com esse debate trabalha-se,
              além do poder de argumentação e rapidez de raciocínio, a
              valorização dos alunos, pois partimos de um tema o qual a
              turma se reconhece. Essa aula fez tanto sucesso que fomos
              convidados a aplica-la com as turmas de EJA do Colégio
              Estadual Melchíades Picanço. Combatendo Fake News –
              Pensamento em nossas aulas também de forma a combater fake
              news. Foi assim que criamos uma atividade lúdica utilizando
              como tema a vida de Marielle Franco. Apresentamos cards que
              contam passagens da vida da vereadora e os alunos são
              desafiados a organizar esses cards cronologicamente. Com a
              proposta podemos conhecer sua trajetória e ainda combater as
              notícias duvidosas."
              />
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <Card
                imagem="image imageWork5"
                classe="text"
                titulo="Escola Marielle Franco"
                mensagem=" Alunos do sexto ano após aula sobre Marielle Franco.
              Apresentamos cards que contam passagens da vida da vereadora
              e os alunos são desafiados a organizar esses cards
              cronologicamente,. Assim conhecemos sua trajetória e ainda
              combatemos as fakes news."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trabalhos;
