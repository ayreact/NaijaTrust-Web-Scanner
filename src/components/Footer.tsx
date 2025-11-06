import logo from "@/assets/naijatrust-logo.png";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-2 md:px-6 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src={logo} alt="NaijaTrust logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" loading="lazy" />
              <span className="text-lg sm:text-xl font-bold text-primary">NaijaTrust</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Helping Nigerians understand how websites use their personal data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">About</h3>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>How It Works</li>
              <li>Our Mission</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Terms of Service</li>
              <li>Disclaimer</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NaijaTrust. All rights reserved.</p>
          <p className="mt-2 px-4">
            This tool provides automated analysis and is not legal advice. For specific privacy concerns, 
            consult the website's privacy policy or seek professional guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};
