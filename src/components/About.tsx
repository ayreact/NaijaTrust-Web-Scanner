import { Users, Target, Lock } from "lucide-react";
import logo from "@/assets/naijatrust-logo.png";

export const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-2 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <img src={logo} alt="NaijaTrust logo" className="w-12 h-12 sm:w-16 sm:h-16" loading="lazy" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">About NaijaTrust</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              NaijaTrust was created to help everyday Nigerians understand how websites collect, use, 
              and share their personal data. Data breaches and privacy violations are increasing, yet 
              most privacy policies are written in complex legal language that's hard to understand.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We translate these dense policies into plain English, show you what data is being collected, 
              and give you a simple risk rating—so you can make informed decisions about where you share 
              your personal information online.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-slide-up">
            {[
              {
                icon: Users,
                title: "For Everyone",
                description: "Built for regular people, not lawyers or tech experts.",
              },
              {
                icon: Target,
                title: "Nigerian-Focused",
                description: "Designed with Nigerian users and local context in mind.",
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "We don't store your scans or track your browsing habits.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
