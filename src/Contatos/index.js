import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";
import emailjs from "emailjs-com";

const Contatos = () => {
  const sendEmail = (e) => {
    emailjs.init("user_R9bVTLabKtY5OzfZCIiG0");
    e.preventDefault();

    emailjs
      .sendForm("gmail123", "contatos", e.target, "user_R9bVTLabKtY5OzfZCIiG0")
      .then(
        (result) => {
          alert("Email Enviado");
        },
        (error) => {
          alert("Erro ao Enviar Email");
        }
      );
  };

  return (
    <div>
      <section
        class="ftco-section contact-section ftco-degree-bg"
        id="contatoContainer"
      >
        <ScrollAnimation animateIn="fadeIn" duration={2}>
          <div class="container bg-light">
            <div
              class="row d-flex mb-5 contact-info"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class="col-md-12 mb-4">
                <h2 class="h4">Contatos</h2>
              </div>
              <div class="w-100"></div>
              <div class="col-md-3">
                <p>
                  <span>Endereço:</span> Rua Rio de Janeiro
                </p>
              </div>
              <div class="col-md-3">
                <p>
                  <span>Telefone:</span>{" "}
                  <a href="tel://21-97902-7458">21-97902-7458</a>
                </p>
              </div>
              <div class="col-md-3">
                <p>
                  <span>Celular:</span>{" "}
                  <a href="tel://21-97902-7458">21-97902-7458</a>
                </p>
              </div>
            </div>
            <div
              class="row block-9"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class="col-md-6 pr-md-5">
                <form onSubmit={sendEmail}>
                  <div class="form-group">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      class="form-control"
                      placeholder="Nome"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="telefone"
                      id="telefone"
                      class="form-control"
                      placeholder="Telefone"
                    />
                  </div>
                  <div class="form-group">
                    <select
                      className="browser-default custom-select"
                      name="atuacao"
                      id="atuacao  "
                    >
                      <option>Desejo Atuar Como</option>
                      <option value="voluntariado">Voluntário</option>
                      <option value="patrocinio">Patrocínio</option>
                      <option value="doacao-pontual">Doação Pontual</option>
                      <option value="doacao-recorrente">
                        Doação Recorrente
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <textarea
                      id="message_html"
                      name="message_html"
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Mensagem"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Enviar"
                      class="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <ScrollAnimation
            animateIn="bounce"
            initiallyVisible={true}
            animateOnce={true}
          >
            <Link
              activeClass="active"
              to="homeContainer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Clique para Voltar ao Topo
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Contatos;
