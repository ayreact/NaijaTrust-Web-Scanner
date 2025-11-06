import { Loader2 } from "lucide-react";
import logo from "@/assets/naijatrust-logo.png";
import { useEffect } from "react";

export const LoadingState = () => {
  useEffect(() => {
    console.info("[UI] LoadingState mounted");
    return () => console.info("[UI] LoadingState unmounted");
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center animate-fade-in w-full max-w-md mx-auto">
        <div className="relative inline-block mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative bg-primary rounded-full p-6 sm:p-8 shadow-lg">
            <img src={logo} alt="NaijaTrust logo" className="w-12 h-12 sm:w-16 sm:h-16" loading="eager" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1.5 sm:p-2 shadow-md">
            <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-spin" />
          </div>
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-2 sm:mb-3 px-2">
          Scanning Website...
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-4">
          Analyzing privacy policies and data collection practices
        </p>
        
        <div className="flex flex-col gap-2 w-full px-4">
          {[
            "Checking website safety",
            "Extracting privacy policy",
            "Analyzing data collection",
            "Generating summary"
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" style={{ animationDelay: `${idx * 0.2}s` }} />
              <span className="text-left">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
