import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FlaskConical } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="bg-primary p-2 rounded-lg">
              <FlaskConical className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">HealthPath Labs</h1>
              <p className="text-xs text-muted-foreground">Trusted Diagnostics</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("appointment")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Book Appointment
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact Us
            </button>
            <Button variant="hero" size="sm" onClick={() => scrollToSection("appointment")}>
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection("hero")} className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2">
                Services
              </button>
              <button onClick={() => scrollToSection("appointment")} className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2">
                Book Appointment
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left py-2">
                Contact Us
              </button>
              <Button variant="hero" size="sm" onClick={() => scrollToSection("appointment")} className="w-full">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
