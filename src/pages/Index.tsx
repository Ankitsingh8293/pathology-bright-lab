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
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
            <p className="text-muted-foreground mb-6">Fill in the details below and we'll get back to you shortly</p>
          </div>
        </section>
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
