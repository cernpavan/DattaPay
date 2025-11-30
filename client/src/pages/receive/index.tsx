import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, ArrowLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, name: "Account Details" },
  { id: 2, name: "Waiting for Funds" },
  { id: 3, name: "Confirmation" },
];

export default function ReceivePayment() {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Account details ready to share.",
    });
  };

  const handleSimulateReceive = () => {
    setIsLoading(true);
    setCurrentStep(2);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(3);
    }, 3000);
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4 pl-0 hover:pl-2 transition-all" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Receive Payment</h1>
          <p className="text-muted-foreground mt-1">
            Share these details with your client to receive USD or EUR.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="relative flex items-center justify-between w-full">
            <div className="absolute left-0 top-1/2 w-full h-1 bg-secondary -z-10" />
            <div 
              className="absolute left-0 top-1/2 h-1 bg-primary transition-all duration-500 -z-10" 
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} 
            />
            
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center bg-background px-2">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                    currentStep >= step.id 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : "bg-background border-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                </div>
                <span className={`text-xs mt-2 font-medium ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Account Details</CardTitle>
                  <CardDescription>Use these details to receive transfers from US or EU clients.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="usd" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="usd">🇺🇸 USD (ACH/Wire)</TabsTrigger>
                      <TabsTrigger value="eur">🇪🇺 EUR (SEPA)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="usd" className="space-y-4">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label>Account Holder</Label>
                          <div className="flex">
                            <Input value="John Doe (Freelance)" readOnly className="rounded-r-none focus-visible:ring-0" />
                            <Button variant="secondary" className="rounded-l-none border-l-0" onClick={() => copyToClipboard("John Doe (Freelance)")}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label>Routing Number (ACH)</Label>
                          <div className="flex">
                            <Input value="021000021" readOnly className="rounded-r-none focus-visible:ring-0" />
                            <Button variant="secondary" className="rounded-l-none border-l-0" onClick={() => copyToClipboard("021000021")}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label>Account Number</Label>
                          <div className="flex">
                            <Input value="987654321098" readOnly className="rounded-r-none focus-visible:ring-0" />
                            <Button variant="secondary" className="rounded-l-none border-l-0" onClick={() => copyToClipboard("987654321098")}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label>Bank Name</Label>
                          <Input value="Partner Bank, NA" readOnly />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="eur">
                      <div className="p-4 text-center text-muted-foreground bg-secondary/30 rounded-lg">
                        EUR details would appear here similar to USD layout.
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between bg-secondary/10 p-6">
                  <div className="text-sm text-muted-foreground">
                    Funds usually arrive in 1-2 business days.
                  </div>
                  <Button onClick={handleSimulateReceive} className="bg-primary hover:bg-primary/90 shadow-md rounded-full px-8">
                    I've sent the invoice
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
                <Loader2 className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Waiting for funds...</h2>
              <p className="text-muted-foreground max-w-md mb-8">
                We're monitoring the network for incoming deposits matching your unique account details. This simulation will finish in a few seconds.
              </p>
              <div className="flex gap-2 text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full">
                <span className="relative flex h-3 w-3 mt-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                Monitoring active
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto"
            >
              <Card className="border-2 border-green-500/20 shadow-xl bg-green-50/50 dark:bg-green-950/10">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-green-700 dark:text-green-400">Payment Received!</CardTitle>
                  <CardDescription>Your funds have been instantly converted.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white dark:bg-card rounded-lg p-4 border shadow-sm">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Received Amount</span>
                      <span className="font-medium">$1,500.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Fee (0.5%)</span>
                      <span className="font-medium text-red-500">-$7.50</span>
                    </div>
                    <div className="h-px bg-border my-2" />
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">Net Balance</span>
                      <span className="font-bold text-xl text-primary">$1,492.50 USDC</span>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-primary mb-1">Auto-Staking Active</h4>
                    <p className="text-sm text-muted-foreground">
                      These funds are now earning <span className="font-bold text-green-600">4.2% APY</span>.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button className="w-full rounded-full bg-primary hover:bg-primary/90 shadow-lg" size="lg">
                    View Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full" onClick={() => setCurrentStep(1)}>
                    Receive Another Payment
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
