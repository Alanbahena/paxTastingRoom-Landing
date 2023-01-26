// import { Fragment } from "react";
import Layout from "./UI/Layout";
import Header from "./components/Header/Header";
import Food from "./components/Food/Food";
import History from "./components/History/History";
import Testimonials from "./components/Testimonials/Testimonials";
import Photos from "./components/Photos/Photos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <Food />
      <History />
      <Testimonials />
      <Photos />
      <Contacto />
      <Footer />
    </Layout>
  );
}

export default App;
