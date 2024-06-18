import Footer from "../components/Footer";
import NavBar from "../components/navbar/Navbar";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import photo from "../photos/plantimage.jpeg";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <main className="main">
        <section className="intro">
          <div className="intro-text">
            <h1>Welcome</h1>
            <p>
              I'm Ghazala Aziz, a licensed mental health counsellor with a
              passion for supporting individuals through tough times.
              Specialising in anxiety, depression, and trauma, I offer a
              supportive, evidence-based approach. My aim is to guide clients
              through personal growth, providing empathetic and client-centred
              care.
            </p>
          </div>
          <Image className="intro-image" src={photo} alt="Plant" />
        </section>
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
