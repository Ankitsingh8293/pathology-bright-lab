import { useState, useEffect } from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'd like to book a test", "_blank");
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-float"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Sticky Mobile Appointment Button */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card border-t border-border p-3 shadow-lg animate-slide-in">
          <Button
            onClick={scrollToAppointment}
            variant="hero"
            className="w-full"
            size="lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
          </Button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
