import Footer from "./components/footer";
import Header from "./components/header";
import Image from "next/image";
import photo from "../photos/plantimage.jpeg";

export default function Home() {
  return (
    <main class="flex">
      <p>
        I'm Ghazala Aziz, a licensed mental health counsellor with a passion for
        supporting individuals through tough times. Specialising in anxiety,
        depression, and trauma, I offer a supportive, evidence-based approach.
        My aim is to guide clients through personal growth, providing empathetic
        and client-centred care.
      </p>
      <Image src={photo} alt="" />
    </main>
  );
}
