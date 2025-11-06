import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronDown,
  ArrowLeft,
  Cookie,
  Database,
  FileText,
} from "lucide-react";
import logo from "@/assets/naijatrust-logo.png";
import { useState, useEffect } from "react";
import type { ScanResult } from "@/pages/Index";

interface ScanResultsProps {
  result: ScanResult;
  onNewScan: () => void;
}

export const ScanResults = ({ result, onNewScan }: ScanResultsProps) => {
  const [cookiesOpen, setCookiesOpen] = useState(false);

  const getRiskLevel = (score: string): { level: string; color: string; icon: any; bgClass: string; textClass: string } => {
    const numScore = parseInt(score.split("-")[0]);
    if (numScore <= 3) {
      return { 
        level: "Low Risk", 
        color: "success", 
        icon: ShieldCheck,
        bgClass: "bg-success/10",
        textClass: "text-success"
      };
    } else if (numScore <= 7) {
      return { 
        level: "Medium Risk", 
        color: "warning", 
        icon: Shield,
        bgClass: "bg-warning/10",
        textClass: "text-warning"
      };
    } else {
      return { 
        level: "High Risk", 
        color: "destructive", 
        icon: ShieldAlert,
        bgClass: "bg-destructive/10",
        textClass: "text-destructive"
      };
    }
  };

  const risk = getRiskLevel(result.ai_summary.risk_score);
  const RiskIcon = risk.icon;

  useEffect(() => {
    console.info("[Results] Rendering scan results", {
      url: result.url,
      status: result.status,
      code: result.code,
      risk: result.ai_summary.risk_score,
      cookiesCount: result.cookies.filter((c) => c !== null).length,
      privacyLink: result.privacy_link,
    });
  }, [result]);

  return (
    <div className="min-h-screen py-8 sm:py-10 md:py-12 px-4 sm:px-6 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <img src={logo} alt="NaijaTrust logo" className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0" loading="eager" />
          <div className="flex-1 w-full">
            <Button
              variant="ghost"
              onClick={onNewScan}
              className="mb-3 sm:mb-4 hover:bg-accent text-sm sm:text-base"
              size="sm"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Scan Another Website
            </Button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
              Scan Results
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground break-all">{result.url}</p>
          </div>
        </div>

        {/* Safety Status */}
        <Card className="p-4 sm:p-6 mb-4 sm:mb-6 border-2">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ${result.safe_check.safe ? 'bg-success/10' : 'bg-destructive/10'}`}>
              {result.safe_check.safe ? (
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-success" />
              ) : (
                <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-destructive" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold mb-1">
                {result.safe_check.safe ? "Website is Safe" : "Safety Concerns Detected"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">{result.safe_check.message}</p>
            </div>
          </div>
        </Card>

        {/* Risk Score */}
        <Card className="p-4 sm:p-6 mb-4 sm:mb-6 border-2">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ${risk.bgClass}`}>
              <RiskIcon className={`w-6 h-6 sm:w-8 sm:h-8 ${risk.textClass}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h2 className="text-lg sm:text-xl font-semibold">Privacy Risk Score</h2>
                <Badge variant={risk.color as any} className="text-xs sm:text-sm">
                  {risk.level}
                </Badge>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Score: {result.ai_summary.risk_score} out of 10
              </p>
              <div className="flex gap-1 sm:gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                  const maxScore = parseInt(result.ai_summary.risk_score.split("-")[1] || result.ai_summary.risk_score);
                  const minScore = parseInt(result.ai_summary.risk_score.split("-")[0]);
                  const isActive = num <= maxScore;
                  return (
                    <div
                      key={num}
                      className={`flex-1 h-2 rounded-full ${
                        isActive 
                          ? minScore <= 3
                            ? "bg-success" 
                            : minScore <= 7
                            ? "bg-warning" 
                            : "bg-destructive"
                          : "bg-muted"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        {/* AI Summary */}
        <Card className="p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-semibold">Privacy Summary</h2>
          </div>
          <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">
            {result.ai_summary.summary}
          </p>
        </Card>

        {/* Data Collected */}
        <Card className="p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Database className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-semibold">Data Collected</h2>
          </div>
          {result.ai_summary.data_collected.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {result.ai_summary.data_collected.map((item, idx) => (
                <Badge key={idx} variant="secondary" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
                  {item.replace(/_/g, " ")}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm sm:text-base text-muted-foreground">No specific data collection detected</p>
          )}
        </Card>

        {/* Privacy Policy */}
        {result.privacy_link && (
          <Card className="p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold mb-1">Privacy Policy</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">View the full privacy policy</p>
              </div>
              <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                <a href={result.privacy_link} target="_blank" rel="noopener noreferrer">
                  View Policy
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </a>
              </Button>
            </div>
          </Card>
        )}

        {/* Cookies */}
        {result.cookies.filter(c => c !== null).length > 0 && (
          <Card className="p-4 sm:p-6">
            <Collapsible open={cookiesOpen} onOpenChange={setCookiesOpen}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <h3 className="text-base sm:text-lg font-semibold">
                      Cookies Found ({result.cookies.filter(c => c !== null).length})
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      cookiesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Separator className="my-3 sm:my-4" />
                <div className="space-y-2 sm:space-y-3">
                  {result.cookies
                    .filter(c => c !== null)
                    .map((cookie, idx) => (
                      <div
                        key={idx}
                        className="p-2 sm:p-3 rounded-lg bg-muted/50 text-xs sm:text-sm font-mono break-all"
                      >
                        {cookie}
                      </div>
                    ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        )}

        {/* Disclaimer */}
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-xs sm:text-sm text-muted-foreground">
            <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
            This is an automated analysis and not legal advice. For specific privacy concerns, 
            please consult the website's privacy policy or seek professional guidance.
          </p>
        </div>
      </div>
    </div>
  );
};
