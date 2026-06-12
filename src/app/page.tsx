import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Propiedades from "@/components/Propiedades";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import SimuladorHipotecario from "@/components/SimuladorHipotecario";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Propiedades />
        <Nosotros />
        <Servicios />
        <SimuladorHipotecario />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
