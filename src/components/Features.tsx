import { Shield, Search, FileText, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Instant Scanning",
      description: "Enter any website URL and get results in seconds. No registration required.",
    },
    {
      icon: Shield,
      title: "Privacy Risk Score",
      description: "Clear 1-5 rating showing how much risk your data faces on each website.",
    },
    {
      icon: FileText,
      title: "Plain English Summaries",
      description: "No legal jargon. We translate complex privacy policies into simple language.",
    },
    {
      icon: Zap,
      title: "Data Collection Insights",
      description: "See exactly what personal information websites collect and how they use it.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-2 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 px-2">
            Why Choose NaijaTrust?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Empowering Nigerians with the knowledge to protect their personal data online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
