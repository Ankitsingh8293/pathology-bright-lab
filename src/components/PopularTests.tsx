import { Button } from "@/components/ui/button";
import { Activity, Heart, Droplet, Pill, Stethoscope } from "lucide-react";

const tests = [
  {
    icon: Droplet,
    name: "Blood Test",
    description: "Complete blood count and analysis for overall health assessment",
    price: "₹299",
  },
  {
    icon: Heart,
    name: "Thyroid Test",
    description: "TSH, T3, and T4 levels to monitor thyroid function",
    price: "₹499",
  },
  {
    icon: Activity,
    name: "Diabetes Test",
    description: "Fasting and post-meal glucose levels, HbA1c testing",
    price: "₹399",
  },
  {
    icon: Pill,
    name: "Vitamin Test",
    description: "Comprehensive vitamin D, B12, and essential nutrient screening",
    price: "₹599",
  },
  {
    icon: Stethoscope,
    name: "Full Body Checkup",
    description: "Complete health screening with 50+ parameters covered",
    price: "₹1,999",
  },
];

const PopularTests = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Tests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our most frequently booked diagnostic tests
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tests.map((test, index) => {
            const Icon = test.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {test.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {test.description}
                </p>
                <div className="mt-auto">
                  <p className="text-2xl font-bold text-primary mb-3">
                    {test.price}
                  </p>
                  <Button 
                    onClick={scrollToAppointment}
                    className="w-full"
                    size="sm"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularTests;
