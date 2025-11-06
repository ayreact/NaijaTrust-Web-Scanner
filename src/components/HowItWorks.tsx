import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Website URL",
      description: "Simply paste the URL of any website you want to check into our scanner.",
    },
    {
      number: "02",
      title: "We Analyze the Site",
      description: "Our AI scans the privacy policy, cookies, trackers, and data collection forms.",
    },
    {
      number: "03",
      title: "Get Clear Results",
      description: "Receive a simple privacy summary, risk score, and detailed breakdown in seconds.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-2 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 px-2">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Three simple steps to understand any website's privacy practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-primary/30 transition-all hover:shadow-lg relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground text-center">{step.description}</p>
              </div>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-20 z-20 w-8 h-8 items-center justify-center bg-background rounded-full border-2 border-primary">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
