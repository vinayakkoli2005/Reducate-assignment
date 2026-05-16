import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programmes from "./components/Programmes";
import Strengths from "./components/Strengths";
import Features from "./components/Features";
import Campus from "./components/Campus";
import Partners from "./components/Partners";
import Leadership from "./components/Leadership";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programmes />
        <Strengths />
        <Features />
        <Campus />
        <Partners />
        <Leadership />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
