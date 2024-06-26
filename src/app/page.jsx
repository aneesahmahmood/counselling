import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/Navbar";
import Services from "../../components/services/Services";
import Main from "../../components/main/Main";
import Intro from "../../components/intro/Intro";
import ContactSection from "../../components/contactSection/ContactSession";

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Main />
      <Services />
      <ContactSection />
      <Footer />
    </>
  );
}
