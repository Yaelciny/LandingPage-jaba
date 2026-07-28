import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import SolucionesGrid from "@/src/components/SolucionesGrid/SolucionesGrid";
import TrabajosResidenciales from "@/src/components/TrabajosResidenciales/TrabajosResidenciales";
import Filosofia from "@/src/components/Filosofia/Filosofia";
import CalidadISO from "@/src/components/CalidadISO/CalidadISO";
import FormularioCotizacion from "@/src/components/FormularioCotizacion/FormularioCotizacion";
import QuienesSomos from "@/src/components/QuienesSomos/QuienesSomos";
import ProductosGrid from "@/src/components/ProductosGrid/ProductosGrid";
import Carpinteria from "@/src/components/Carpinteria/Carpinteria";
import SolucionesB2B from "@/src/components/SolucionesB2B/SolucionesB2B";
import Contacto from "@/src/components/Contacto/Contacto";
import Footer from "@/src/components/Footer/Footer";

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
