import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const PlanoAulas = () => {
  return (
    <div>
      <section class="ftco-section ftco-counterprop ftco-degree-bg">
        <ScrollAnimation animateIn="fadeIn" duration={2}>
          <div class="container">
            <div class="row justify-content-center mb-5 pb-5">
              <div class="col-md-7 text-center heading-section heading-section-white ">
                <h2>Plano de Aulas</h2>
                <div class="row justify-content-center mb-5 pb-5">
                  <div style={{ color: "#fff" }}>
                    Na seção do plano de aulas, podemos produzir um breve texto
                    explicando resumidamente o que é e como utilizar, se tiver
                    como encaixar lá{" "}
                  </div>
                </div>
                <p>
                  <a
                    href="https://vimeo.com/45830194"
                    class="btn btn-primary btn-outline-white px-4 py-3 popup-vimeo"
                  >
                    <span class="ion-ios-play mr-2"></span> Batalha de
                    Argumentos
                  </a>
                  {"    "}
                  <a
                    href="https://vimeo.com/45830194"
                    class="btn btn-primary btn-outline-white px-4 py-3 popup-vimeo"
                  >
                    <span class="ion-ios-play mr-2"></span> Tretas do Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default PlanoAulas;
