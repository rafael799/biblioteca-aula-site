import React, { useState } from "react";
import TextLoop from "react-text-loop";
import ScrollAnimation from "react-animate-on-scroll";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import logoBiblioteca from "../images/Biblioteca.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#66000000",
    border: "none",
  },
};

const Head = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div class="container">
          <a class="navbar-brand" href="index.html">
            Biblioteca de Aulas
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="index.html" class="nav-link">
                  Principal{" "}
                </a>
              </li>
              <li class="nav-item">
                <a href="#abountContainer" class="nav-link">
                  Quem somos
                </a>
              </li>
              <li class="nav-item">
                <a href="#calendarioContainer" class="nav-link">
                  Calendário
                </a>
              </li>
              <li class="nav-item">
                <a href="#trabalhoContainer" class="nav-link">
                  Trabalhos
                </a>
              </li>
              <li class="nav-item">
                <a href="#parceirosContainer" class="nav-link">
                  Parceiros
                </a>
              </li>
              <li class="nav-item">
                <a href="#contatoContainer" class="nav-link">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=cEczlv669Oo"
            playing
            class="react-player"
          />
        </form>

        <p
          style={{
            marginTop: 30,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            onClick={closeModal}
            class="btn btn-light btn.btn-outline-white-background px-4 py-3 popup-vimeo"
          >
            <span class="ion-ios-play mr-2"></span> Quero Fazer Parte
          </a>
        </p>

        <p
          style={{
            marginTop: 30,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            onClick={closeModal}
            class="btn btn-light btn.btn-outline-white-background px-4 py-3 popup-vimeo"
          >
            <span class="ion-ios-play mr-2"></span> Fechar Video
          </a>
        </p>
      </Modal>

      <section class="home-slider ftco-degree-bg">
        <div class="slider-item">
          <div class="overlay"></div>
          <div class="container">
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <div class="row slider-text align-items-center justify-content-center">
                <div class="col-md-10 text-center">
                  <h1 class="mb-4">
                    {" "}
                    <a class="text-fixe">Sempre </a>
                    <TextLoop>
                      <span style={{ fontWeight: "bold" }}> Ajudando</span>
                      <span> Orientando </span>
                      <span> conectando </span>
                      <span> Realizando </span>
                    </TextLoop>
                  </h1>
                  <p>
                    Rede de voluntários que dedicam parte do seu tempo para
                    debates nas escolas públicas. Transformamos o tempo vago em
                    oportunidade de gerar conhecimento
                  </p>
                  <p>
                    <a
                      onClick={openModal}
                      class="btn btn-primary btn-outline-white px-4 py-3 popup-vimeo"
                    >
                      <span class="ion-ios-play mr-2"></span> Assistir Vídeo
                    </a>
                  </p>
                </div>
              </div>

              <div class="logoBiblioteca">
                <img src={logoBiblioteca} width="300" height="250" />
              </div>
              </ScrollAnimation>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
