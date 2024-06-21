import Footer from "../components/Footer";
import NavBar from "../components/navbar/Navbar";
import Services from "../components/Services";
import ContactForm from "../components/contactForm/ContactForm";
import Main from "../components/main/main";
import Intro from "../components/intro/Intro";

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Main />
      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}
