import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe, Shield, Zap, LayoutDashboard, CreditCard, Wallet, TrendingUp, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { YieldChart } from "@/components/dashboard/YieldChart";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { LicensesModal } from "@/components/LicensesModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLicensesOpen, setIsLicensesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LicensesModal isOpen={isLicensesOpen} onClose={() => setIsLicensesOpen(false)} />
      
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
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-muted-foreground">Founded by former Visa employees</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Empowering freelancers & creators. <br className="hidden md:block" />
              <span className="text-muted-foreground">Receive, grow, and spend.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Get paid in USD/EUR, instantly convert to stablecoins, and earn <span className="text-foreground font-semibold">4.2% APY</span> on your idle funds.
            </p>

            {/* Value Prop Highlight - 0.5% Fee */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-3 bg-secondary/30 px-4 py-2 rounded-full border border-border">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-foreground">Flat 0.5% Fee</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/30 px-4 py-2 rounded-full border border-border">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/30 px-4 py-2 rounded-full border border-border">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Registered MSB with FinCEN</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg" 
                className="h-12 px-8 rounded-full text-base bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Start accepting payments
              </Button>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-6 text-sm text-muted-foreground">
              <p className="text-xs font-medium uppercase tracking-wider opacity-70">Built by experts from & powered by</p>
              <div className="flex items-center justify-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Visa Logo */}
                 <svg viewBox="0 0 320 100" className="h-8 w-auto fill-current">
                   <path d="M128.93 10.686L85.696 99.449H61.75L95.188 10.686h33.742zM210.21 10.686L190.83 69.823l-5.99-30.08c-2.94-11.65-11.79-18.32-23.14-18.32H126l-.79 4.4c15.26 4.07 27.47 10.83 33.95 22.84l19.66 70.78h35.13l54.36-88.757H210.21zm100.57.62c-16.88 0-29.9 9.24-30.08 29.44-.17 20.69 18.29 22.5 32.23 29.44 6.78 3.4 9.07 5.65 9.04 8.87-.11 4.74-5.68 6.94-10.97 6.94-16.05 0-24.83-6.09-28.84-10.35l-5.37 7.87c5.37 6.57 18.77 13.4 31.79 13.58 28.35 0 41.54-14.05 41.75-35.53.16-17.4-10.6-25.22-32.02-30.05-6.84-1.7-11.03-4.17-11.03-8.01 0-2.7 3.05-5.5 9.63-5.5 11.65-.2 20.09 3.78 23.14 7.36l4.95-7.25c-6.73-7.81-16.05-16.81-34.22-16.81zm-191.2 0C86.398 11.306 56.484 39.086 45.95 67.218L39 33.698C32.18 17.67 17.57 12.692.64 11.822L0 14.758c6.47 1.48 13.98 3.8 18.48 9.13 6.16 7.99 6.13 10.27 9.08 21.98l15.42 59.21h36.84l55.79-94.392H119.58z"/>
                 </svg>
                 
                 <div className="h-8 w-px bg-border/50"></div>
                 
                 {/* Stripe Logo */}
                 <svg viewBox="0 0 64 26" className="h-8 w-auto fill-current">
                   <path d="M63.91 10.15h-5.5v15.71h5.5V10.15zm-2.75-8.91c1.8 0 2.98 1.2 2.98 2.9 0 1.72-1.18 2.92-2.98 2.92-1.78 0-2.98-1.2-2.98-2.92 0-1.7 1.2-2.9 2.98-2.9zM50.1 10.15h-5.34v1.72c1.32-1.6 3.26-1.96 5.02-1.7l-.02 5.46c-2.46-.3-4.52.44-5.16 2.26v7.82h-5.5V10.15h5.5v1.88c1.02-1.4 2.76-2.1 5.5-1.88M35.84 20.57c0 1.66-1.38 2.56-3.48 2.56-1.56 0-2.98-.58-3.94-1.34l-1 3.84c1.24.86 3.16 1.36 5.26 1.36 5.36 0 8.66-2.7 8.66-8.2V10.15h-5.34v1.44c-1.08-1.38-2.98-1.96-5.32-1.96-4.94 0-8.72 3.98-8.72 9.4s3.72 9.4 8.68 9.4c2.26 0 4.18-.72 5.2-2.22v-5.64zm-3.48-7.26c2.22 0 4.02 1.7 4.02 4.84s-1.8 4.84-4.02 4.84c-2.2 0-4.02-1.7-4.02-4.84s1.82-4.84 4.02-4.84zM17.38 10.15H12.1v15.71h5.28V10.15zm-2.64-8.91c1.78 0 2.98 1.2 2.98 2.9 0 1.72-1.2 2.92-2.98 2.92-1.8 0-2.98-1.2-2.98-2.92 0-1.7 1.18-2.9 2.98-2.9zM10.42 15.09c0-2.7-1.4-4.28-4.06-4.28-1.48 0-2.76.58-3.66 1.36l-.96-3.74C3.08 7.57 5.06 7.05 6.64 7.05c5.6 0 9.06 3.3 9.06 9.28v9.52H10.5v-1.6c-1.04 1.48-2.94 2.18-5.24 2.18-4.04 0-6.58-2.46-6.58-5.84 0-3.76 3.08-5.94 7.84-5.94 1.38 0 2.7.22 3.9.44zm-3.9 7.28c1.58 0 2.9-.6 3.9-1.66v-2.4c-1.08-.24-2.26-.4-3.48-.4-2.02 0-3.04.8-3.04 2.1 0 1.24.9 2.36 2.62 2.36zM39.32 4.69V1.45L34.06 0v4.69h-3.14v3.88h3.14v8.74c0 3.5 2.02 5.2 5.86 4.92 1.16-.08 2.06-.34 2.66-.62l-.64-3.86c-.28.12-.74.22-1.26.26-1.46.1-1.96-.68-1.96-2.12v-7.32h3.72V8.57h-3.12z"/>
                 </svg>
              </div>
            </div>
          </div>

          {/* Hero Visual - Focused Product Shot */}
          <div className="relative max-w-5xl mx-auto">
            
            <div className="rounded-xl border border-border bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
              {/* Browser Bar */}
              <div className="h-10 border-b bg-gray-50/50 dark:bg-gray-800/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
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

      {/* Testimonials Scrollable */}
      <section className="py-24 border-y border-border/50 bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Loved by global creators</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Join thousands of freelancers from emerging markets who trust DattaPay.
          </p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide max-w-[100vw]">
          <div className="flex gap-6 animate-scroll hover:pause min-w-full">
            {[
              {
                text: "I used to lose almost 5% of my income to exchange fees. With DattaPay, I get paid instantly in USDC and actually earn interest. It's a life saver.",
                name: "Mateo Rossi",
                role: "Senior Product Designer, Buenos Aires",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mateo"
              },
              {
                text: "Finally a service that understands freelancers in Nigeria. The instant settlement to crypto means I don't have to worry about currency devaluation.",
                name: "Adaobi Nnadi",
                role: "Software Engineer, Lagos",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adaobi"
              },
              {
                text: "The 0.5% flat fee is unbeatable. PayPal was taking a huge chunk of my earnings. DattaPay is transparent and fast.",
                name: "Carlos Mendez",
                role: "Digital Artist, Mexico City",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos"
              },
              {
                text: "I can finally receive payments from US clients without the headache of wire transfers. The auto-yield feature is just the cherry on top.",
                name: "Priya Sharma",
                role: "Content Writer, Mumbai",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
              },
              {
                text: "Setting up was incredibly easy. I got my US account details in minutes and received my first payment the same day.",
                name: "Kofi Mensah",
                role: "Web Developer, Accra",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kofi"
              }
            ].map((testimonial, i) => (
              <div key={i} className="flex-shrink-0 w-[350px] md:w-[400px] p-8 rounded-2xl bg-background border border-border shadow-sm snap-center">
                <Quote className="h-8 w-8 text-primary/20 mb-6" />
                <p className="text-lg leading-relaxed mb-6 text-foreground/90 font-medium">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary overflow-hidden border border-border">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
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
            <a href="https://complyremit.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy</a>
            {/* Removed Licenses link from footer as per request, moved content to hero */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hover:text-foreground transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
