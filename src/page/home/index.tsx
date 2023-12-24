import { Header } from "../../components/organisms/header";
import { Footer } from "../../components/organisms/footer";
import { Hero } from "../../components/organisms/Hero";
import { Projects } from "../../components/organisms/projects";
import { Experiences } from "../../components/organisms/experiences";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />

      <Projects />

      <Experiences />

      <Footer />
    </>
  );
};
export { Home };
