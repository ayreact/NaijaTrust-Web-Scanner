import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ScanResults } from "@/components/ScanResults";
import { LoadingState } from "@/components/LoadingState";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

export interface ScanResult {
  url: string;
  status: string;
  code: number;
  safe_check: {
    url: string;
    safe: boolean;
    message: string;
  };
  hidden_fields: Array<any>;
  cookies: Array<string | null>;
  privacy_link: string | null;
  privacy_text: string;
  ai_summary: {
    summary: string;
    risk_score: string;
    data_collected: string[];
  };
}

const Index = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const handleScan = async (url: string) => {
    const startedAt = performance.now();
    console.info("[Scan] Starting scan", {
      url,
      endpoint: "https://naijatrust-webscanner.onrender.com/api/scan",
    });
    setIsScanning(true);
    setScanResult(null);

    try {
      const payload = { url };
      console.debug("[Scan] Sending request with payload:", payload);
      
      const response = await fetch("https://naijatrust-webscanner.onrender.com/api/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.debug("[Scan] Response received", {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "<no body>");
        console.error("[Scan] Non-OK HTTP response", {
          status: response.status,
          statusText: response.statusText,
          body: text,
        });
        throw new Error(`Scan failed with status ${response.status}`);
      }

      const data = await response.json();
      console.info("[Scan] Parsed JSON", { keys: Object.keys(data || {}) });
      setScanResult(data);
      toast.success("Scan completed successfully!");
    } catch (error: any) {
      const duration = Math.round(performance.now() - startedAt);
      console.error("[Scan] Error during scan", {
        error,
        durationMs: duration,
        online: navigator.onLine,
      });
      const message = error?.message?.includes("Failed to fetch")
        ? "Network/CORS error contacting scanner."
        : "Failed to scan website. Please try again.";
      toast.error(message);
    } finally {
      const duration = Math.round(performance.now() - startedAt);
      console.log("[Scan] Finished", { durationMs: duration });
      setIsScanning(false);
    }
  };

  const handleNewScan = () => {
    console.info("[Scan] Starting a new scan session");
    setScanResult(null);
  };

  if (isScanning) {
    return (
      <div className="min-h-screen bg-background">
        <LoadingState />
      </div>
    );
  }

  if (scanResult) {
    return (
      <div className="min-h-screen bg-background">
        <ScanResults result={scanResult} onNewScan={handleNewScan} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero onScan={handleScan} />
      <Features />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
