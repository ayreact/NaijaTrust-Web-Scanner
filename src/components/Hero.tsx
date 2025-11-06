import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import logo from "@/assets/naijatrust-logo.png";

interface HeroProps {
  onScan: (url: string) => void;
}

export const Hero = ({ onScan }: HeroProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.info("[Hero] Submit scan clicked", { url });
    if (url.trim()) {
      onScan(url.trim());
    } else {
      console.warn("[Hero] Empty URL submitted");
    }
  };

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] px-2 md:px-6 overflow-hidden flex items-center pt-4 sm:pt-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-[32rem] sm:h-[32rem] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto py-8 sm:py-12">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <img src={logo} alt="NaijaTrust logo" className="w-12 h-12 sm:w-16 sm:h-16" loading="eager" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">NaijaTrust</h1>
          </div>
          <p className="text-lg md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-medium px-2">
            Understand How Websites Use Your Data
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Scan any website to see what personal information it collects, how it's used, 
            and get a simple privacy risk rating in seconds.
          </p>

          {/* Scan */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto animate-slide-up">
            <div className="bg-card p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-border">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                  <Input
                    type="url"
                    placeholder="Enter website URL (e.g., https://example.com)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-10 sm:pl-12 h-12 sm:h-14 border-0 bg-background focus-visible:ring-2 focus-visible:ring-primary text-sm sm:text-base"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg sm:rounded-xl font-medium transition-all hover:scale-105 whitespace-nowrap text-sm sm:text-base"
                >
                  Scan Website
                </Button>
              </div>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground px-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Free to Use
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              No Registration
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Privacy Protected
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
