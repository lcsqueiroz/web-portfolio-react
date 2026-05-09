import Navbar from '../../components/organisms/Navbar';
import HeroSection from '../../components/organisms/HeroSection';
import ProjectsSection from '../../components/organisms/ProjectsSection';
import Footer from '../../components/organisms/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
