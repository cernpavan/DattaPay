import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe, Shield, Zap, LayoutDashboard, CreditCard, Wallet, TrendingUp, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { YieldChart } from "@/components/dashboard/YieldChart";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
            <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-foreground">DattaPay</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Log in</a>
            </Link>
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="sm" 
              className="rounded-full px-4 h-9 font-medium bg-primary text-white hover:bg-primary/90 shadow-sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Empowering freelancers & creators. <br className="hidden md:block" />
              <span className="text-muted-foreground">Receive, grow, and spend.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Get paid in USD/EUR, instantly convert to stablecoins, and earn <span className="text-foreground font-semibold">4.2% APY</span> on your idle funds.
            </p>

            {/* Value Prop Highlight - 0.5% Fee */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-900/50">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm font-bold text-green-700 dark:text-green-400">Flat 0.5% Fee</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900/50">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-700 dark:text-blue-400">Bank-grade Security</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg" 
                className="h-12 px-8 rounded-full text-base bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Start accepting payments
              </Button>
              <Link href="/dashboard">
                <a className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors group">
                  View live demo <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Link>
            </div>
          </div>

          {/* Hero Visual - Focused Product Shot */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-3xl rounded-full opacity-50" />
            
            <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden">
              {/* Browser Bar */}
              <div className="h-10 border-b bg-gray-50/50 dark:bg-gray-800/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300/80" />
                  <div className="w-3 h-3 rounded-full bg-gray-300/80" />
                  <div className="w-3 h-3 rounded-full bg-gray-300/80" />
                </div>
                <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground bg-white dark:bg-gray-900 px-3 py-1 rounded-md border shadow-sm">
                  <Shield className="h-3 w-3" />
                  dattapay.com/dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6 md:gap-8 bg-background">
                {/* Left Column: Balance & Actions */}
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                       <h3 className="text-lg font-semibold">Overview</h3>
                       <p className="text-sm text-muted-foreground">Welcome back, Mateo</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full h-8 text-xs">
                      <CreditCard className="mr-2 h-3 w-3" /> Manage Cards
                    </Button>
                  </div>
                  
                  <BalanceCard />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-medium">Yield</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">+$423.15</div>
                      <div className="text-xs text-muted-foreground mt-1">+12% vs last month</div>
                    </div>
                    <div className="p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                        <Wallet className="h-4 w-4" />
                        <span className="text-sm font-medium">Next Payout</span>
                      </div>
                      <div className="text-2xl font-bold">Tomorrow</div>
                      <div className="text-xs text-muted-foreground mt-1">Est. $1,250.00</div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Stats & Yield */}
                <div className="md:col-span-1 space-y-6">
                   <YieldChart />
                   
                   <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-background shadow-sm flex items-center justify-center text-primary border">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Auto-Staking</div>
                          <div className="text-xs text-green-600 font-medium">4.2% APY Active</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Principal</span>
                          <span className="font-medium">$12,500.00</span>
                        </div>
                        <div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-black/5">
                          <div className="bg-primary h-full rounded-full w-[85%]" />
                        </div>
                        <div className="flex justify-between text-xs pt-1">
                          <span className="text-muted-foreground">Projected (1y)</span>
                          <span className="font-bold text-primary">+$525.00</span>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-black/5 bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by global teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
            {['Upwork', 'Fiverr', 'Deel', 'Toptal', 'Freelancer'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-bold text-foreground/90">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Value Prop Section */}
      <section className="py-24 bg-white dark:bg-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Keep more of what you earn</h2>
            <p className="text-lg text-muted-foreground">See why global freelancers are switching to DattaPay.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Banks */}
            <div className="p-8 rounded-2xl border border-border bg-gray-50 dark:bg-gray-900/50 opacity-75">
              <div className="text-lg font-semibold text-muted-foreground mb-6">PayPal, Payoneer & traditional methods</div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Exchange Rate Markup</span>
                  <span className="font-bold text-red-500">3% - 5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Transfer Fees</span>
                  <span className="font-bold text-red-500">$25 - $50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Wait Time</span>
                  <span className="font-bold text-foreground">3 - 5 Days</span>
                </div>
              </div>
            </div>

            {/* DattaPay */}
            <div className="p-8 rounded-2xl border-2 border-primary bg-background shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <div className="text-lg font-bold text-primary mb-6">DattaPay</div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Exchange Rate Markup</span>
                  <span className="font-bold text-green-600">0% (Mid-market)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Transfer Fees</span>
                  <span className="font-bold text-green-600">Flat 0.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Wait Time</span>
                  <span className="font-bold text-green-600">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Global Accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get your own US and Euro bank account details in seconds. Receive payments via ACH, Wire, or SEPA like a local.
              </p>
            </div>
            <div className="space-y-4 p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Instant Settlement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Funds are automatically converted to USDC/USDT at the mid-market rate. No hidden spread, no waiting days for clearance.
              </p>
            </div>
            <div className="space-y-4 p-8 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/20 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Automated Yield</h3>
              <p className="text-muted-foreground leading-relaxed">
                Don't let your money sleep. Earn <span className="text-foreground font-semibold">4.2% APY</span> on your balance automatically, paid out daily. Withdraw anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative / How it Works */}
      <section id="how-it-works" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How DattaPay works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to financial freedom as a global freelancer.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-border -z-10" />
            
            {[
              { title: "Share details", desc: "Send your DattaPay USD account details to your client." },
              { title: "Get paid", desc: "Client pays via bank transfer. We receive it instantly." },
              { title: "Earn & Spend", desc: "Funds convert to crypto. Earn yield or spend via card." }
            ].map((step, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl border shadow-sm relative">
                <div className="w-16 h-16 rounded-full bg-secondary border-4 border-background flex items-center justify-center text-xl font-bold mx-auto mb-6 md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </div>
                <div className="md:mt-8 text-center">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Strong Testimonial */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
            <Quote className="h-12 w-12 text-primary/20 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-foreground">
              "I used to lose almost 5% of my income to exchange fees and wait days for wire transfers. With DattaPay, I get paid instantly in USDC and actually earn interest on my savings. It's a game changer for freelancers in Argentina."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mateo" alt="Mateo" className="h-full w-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">Mateo Rossi</div>
                <div className="text-sm text-muted-foreground">Senior Product Designer, Buenos Aires</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <section className="py-24 border-t">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to get paid like a local?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of freelancers saving on fees and earning yield.
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg" 
            className="h-14 px-10 rounded-full text-lg bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Create free account
          </Button>
          <p className="mt-6 text-xs text-muted-foreground">
            No credit card required. tailored for non-US residents.
          </p>
        </div>
      </section>

      <footer className="py-12 border-t bg-gray-50 dark:bg-black/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg text-primary">
            <div className="h-5 w-5 rounded-md bg-primary flex items-center justify-center text-white">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-foreground">DattaPay</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 DattaPay Inc. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Licenses</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
