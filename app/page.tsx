import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import SolucionesGrid from "@/src/components/SolucionesGrid";
import TrabajosResidenciales from "@/src/components/TrabajosResidenciales";
import Filosofia from "@/src/components/Filosofia";
import CalidadISO from "@/src/components/CalidadISO";
import FormularioCotizacion from "@/src/components/FormularioCotizacion";
import QuienesSomos from "@/src/components/QuienesSomos";
import ProductosGrid from "@/src/components/ProductosGrid";
import Carpinteria from "@/src/components/Carpinteria";
import SolucionesB2B from "@/src/components/SolucionesB2B";
import Contacto from "@/src/components/Contacto";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolucionesGrid />
        <TrabajosResidenciales />
        <Filosofia />
        <CalidadISO />
        <FormularioCotizacion />
        <QuienesSomos />
        <ProductosGrid />
        <Carpinteria />
        <SolucionesB2B />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
