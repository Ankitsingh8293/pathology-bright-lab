import { Clock, CheckCircle, Home, Award } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Same-Day Report",
    description: "Get your test results within 24 hours for most standard tests",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CheckCircle,
    title: "Accurate Results",
    description: "State-of-the-art equipment ensuring precision and reliability",
    color: "bg-success/10 text-success",
  },
  {
    icon: Home,
    title: "Home Sample Collection",
    description: "Convenient sample collection service at your doorstep",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Award,
    title: "Trusted by Doctors",
    description: "Preferred by healthcare professionals across the region",
    color: "bg-secondary text-secondary-foreground",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience excellence in diagnostic services with our comprehensive range of features
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
