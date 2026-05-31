/* ===================================================================
   HOMEPAGE v2 — composição das seções.
   Cada bloco é um componente isolado em components/home/.
   =================================================================== */

import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Digital from "@/components/home/Digital";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCta from "@/components/home/FinalCta";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Digital />
      <BlogPreview />
      <FinalCta />
      <Footer />
    </>
  );
}
