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
            <button
              onClick={() => {
                const element = document.getElementById("appointment");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl h-11 px-8 text-base"
            >
              Book Your Test Now
            </button>
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
