import React, { useState } from "react";
import TextLoop from "react-text-loop";
import ScrollAnimation from "react-animate-on-scroll";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import logoBiblioteca from "../images/Biblioteca.png";
import { Link } from "react-scroll";

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
        <div class="container" id="homeContainer">
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
                <a class="nav-link">
                  <Link
                    activeClass="active"
                    to="abountContainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Quem somos
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    activeClass="active"
                    to="timeContainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Time
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    activeClass="active"
                    to="trabalhoContainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Trabalhos
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    activeClass="active"
                    to="parceirosContainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Parceiros
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link
                    activeClass="active"
                    to="contatoContainer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Contato
                  </Link>
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

        <div  class="botaoModal">
          <p
           
          >
            <a class="btn btn-light btn.btn-outline-white-background px-4 py-3 popup-vimeo">
              <span class="ion-ios-play mr-2"></span>
              <Link
                activeClass="active"
                to="contatoContainer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onClick={closeModal}
              >
                Quero Fazer Parte
              </Link>
            </a>
          </p>

          <p
          >
            <a
              onClick={closeModal}
              class="btn btn-light btn.btn-outline-white-background px-4 py-3 popup-vimeo"
            >
              <span class="ion-ios-play mr-2"></span> Fechar Video
            </a>
          </p>
        </div>
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
