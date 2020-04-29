import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const calendario = () => {
  return (
    <div>
      <section class="ftco-section-parallax" id="calendarioContainer">
        <div class="parallax-img d-flex align-items-center">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-md-10 text-center heading-section heading-section-white">
                <ScrollAnimation animateIn="fadeIn" duration={2}>
                  <h2 class="h1 font-weight-bold">Atuação</h2>
                  <div class="row justify-content-center mb-5 pb-5">
                  <div class="col-md-7 text-center heading-section heading-section-white ">
                    <div style={{color:"#fff"}}>Atuamos em uma escola de grande porte, que recebe nos turnos
                     manhã e tarde, alunos de sexto a nono ano do ensino Fundamental. Temos professores 
                     voluntários aptos a entrar em sala levando a nossa proposta. Na gestão, são 7 feras 
                     cuidando de tudo: operação, editais, divulgação, acolhimento. </div>
                  </div>
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

export default calendario;
