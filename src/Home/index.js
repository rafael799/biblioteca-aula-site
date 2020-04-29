import React from "react";
import Head from "./../Head/index";
import QuemSomos from "./../QuemSomos/index";
import Calendario from "./../Calendario/index";
import Trabalhos from "./../Trabalhos/index";
import Beneficiados from "./../Beneficiados/index";
import Parceiros from "./../Parceiros/index";
import PlanoAulas from "./../PlanoAulas/index";
import Contatos from "./../Contatos/index";
import Footer from "./../Footer/index";

const Home = () => {
  return (
    <div>
      <Head />
      <QuemSomos />
      <Calendario />
      <Trabalhos />
      <Beneficiados />
      <Parceiros />
      <PlanoAulas />
      <Contatos />
      <Footer />
    </div>
  );
};

export default Home;
