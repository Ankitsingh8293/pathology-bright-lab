import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Features from "@/components/Features";
import PopularTests from "@/components/PopularTests";
import AppointmentForm from "@/components/AppointmentForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <Features />
        <PopularTests />
        <AppointmentForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
