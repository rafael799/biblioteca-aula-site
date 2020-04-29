import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Beneficiados = () => {
  return (
    <div>
      <section
        class="ftco-section ftco-counter ftco-degree-bg"
        id="section-counter"
      >
        <div class="container">
          <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
            <div class="row justify-content-center mb-5 pb-5">
              <div class="col-md-7 text-center heading-section heading-section-white ">
                <h2>Beneficiados</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                <div class="block-18 text-center">
                  <div class="text">
                    <strong class="titleNumber" >
                      1.100
                    </strong>
                    <span>Alunos</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                <div class="block-18 text-center">
                  <div class="text">
                    <strong class="titleNumber" >
                    7
                    </strong>
                    <span>Escolas</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
                <div class="block-18 text-center">
                  <div class="text">
                    <strong class="titleNumber">
                    25
                    </strong>
                    <span>Profissionais</span>
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

export default Beneficiados;
