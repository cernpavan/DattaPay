import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe, Shield, Zap, TrendingUp, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "@assets/generated_images/soft_abstract_gradient_background_for_fintech_app.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          FinGlobal
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#yield" className="hover:text-primary transition-colors">Yield</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">Log in</a>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now available in 180+ countries
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-balance">
                Global payments, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">locally earned.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                Accept USD & EUR payments as a freelancer. Instantly convert to stablecoins and earn <span className="text-foreground font-semibold">4.2% APY</span> on your idle funds.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-8 rounded-full text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                  Start Earning Yield
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base border-primary/20 bg-white/50 backdrop-blur-sm hover:bg-white/80">
                <div className="flex items-center gap-2">
                  <span className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white" />
                    ))}
                  </span>
                  <span className="text-sm text-muted-foreground">Trusted by 10k+ creators</span>
                </div>
              </Button>
            </motion.div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> No hidden fees
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> Instant settlement
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" /> Bank-grade security
              </div>
            </div>
          </div>

          {/* Hero Visual/Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full opacity-50 -z-10" />
            <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden p-2">
              <div className="rounded-xl bg-background/90 shadow-inner overflow-hidden">
                {/* Mock Dashboard Header */}
                <div className="border-b p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <div className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="h-2 w-20 rounded-full bg-muted" />
                </div>
                {/* Mock Content */}
                <div className="p-6 space-y-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Total Balance</div>
                      <div className="text-3xl font-bold text-foreground">$12,450.00</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" /> +4.2%
                    </div>
                  </div>
                  <div className="h-32 w-full bg-gradient-to-b from-primary/5 to-transparent rounded-lg border border-primary/10 relative overflow-hidden">
                     <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path d="M0,40 L0,20 C20,10 40,30 60,15 C80,5 100,25 100,20 L100,40 Z" fill="hsl(var(--primary))" fillOpacity="0.1" />
                        <path d="M0,20 C20,10 40,30 60,15 C80,5 100,25 100,20" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                     </svg>
                  </div>
                  <div className="space-y-3">
                    {[1, 2].map(i => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">IN</div>
                          <div>
                            <div className="text-sm font-medium">Client Payment</div>
                            <div className="text-xs text-muted-foreground">Just now</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-green-600">+$1,200.00</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl border border-border flex items-center gap-4 max-w-xs"
            >
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Yield Earned</div>
                <div className="text-lg font-bold text-foreground">+$423.15</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the global economy</h2>
            <p className="text-muted-foreground text-lg">
              Stop losing money to exchange fees and inflation. Switch to the financial stack designed for borderless work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Accounts",
                desc: "Get your own USD and EUR account numbers. Receive payments like a local, from anywhere."
              },
              {
                icon: Shield,
                title: "Stablecoin Shield",
                desc: "Automatically convert volatile fiat to USDC/USDT. Protect your purchasing power instantly."
              },
              {
                icon: TrendingUp,
                title: "Automatic Yield",
                desc: "Don't let money sleep. Earn 4.2% APY on your balance, paid out daily."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-white text-xs">FG</div>
            FinGlobal
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 FinGlobal Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
