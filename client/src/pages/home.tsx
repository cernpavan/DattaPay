import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe, Shield, Zap, TrendingUp, LayoutDashboard, CreditCard, Wallet, MoveRight, PlayCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "@assets/generated_images/soft_abstract_gradient_background_for_fintech_app.png";
import glassSphere from "@assets/generated_images/abstract_3d_glass_sphere_with_iridescence.png";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/20">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-40"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/50 via-transparent to-white/80 dark:from-black/50 dark:to-black/80" />
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-white/50 dark:bg-black/50"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/20 ring-1 ring-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-foreground">FinGlobal</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {['Features', 'Yield', 'Pricing', 'Enterprise'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors relative group">
                {item}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <a className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block transition-colors">Log in</a>
            </Link>
            <Link href="/dashboard">
              <Button className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all bg-primary text-white border-none">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-[55%] space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-primary/10 text-primary text-sm font-medium mb-8 shadow-sm backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Now available in 180+ countries
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8">
                  Global pay.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">Local yield.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl text-balance font-light">
                  The first financial stack designed for the borderless economy. Receive USD & EUR, convert to stablecoins, and earn <span className="font-semibold text-foreground decoration-green-500/30 underline decoration-2 underline-offset-4">4.2% APY</span> instantly.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link href="/dashboard">
                  <Button size="lg" className="h-16 px-10 rounded-full text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 bg-primary text-white border-none group">
                    Start Earning Yield 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-16 px-8 rounded-full text-lg border-2 border-primary/10 bg-white/50 hover:bg-white/80 hover:border-primary/30 text-foreground backdrop-blur-sm transition-all">
                  <PlayCircle className="mr-2 h-5 w-5" /> How it works
                </Button>
              </motion.div>

              <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-gray-100 overflow-hidden relative shadow-sm">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="User" className="h-full w-full object-cover" />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                    +10k
                  </div>
                </div>
                <p>Trusted by world-class creators and freelancers.</p>
              </div>
            </div>

            {/* Hero Visual */}
            <motion.div 
              style={{ y }}
              className="lg:w-[45%] relative perspective-1000"
            >
              {/* Floating Glass Sphere */}
              <motion.img 
                src={glassSphere} 
                alt="Abstract 3D Sphere"
                className="absolute -top-20 -right-20 w-64 h-64 object-contain opacity-80 z-20 pointer-events-none mix-blend-hard-light"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent blur-[80px] opacity-20 rounded-full" />
                
                {/* Main Card */}
                <div className="bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
                  <div className="p-8 space-y-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Total Balance</div>
                        <div className="text-4xl font-bold tracking-tight text-foreground mt-1">$24,562.00</div>
                      </div>
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-48 w-full relative">
                      <div className="absolute inset-0 flex items-end justify-between px-2 pb-2 opacity-20">
                        {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                          <div key={i} className="w-4 bg-primary rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      {/* Overlay Line */}
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                        <path 
                          d="M0,150 C50,140 100,80 150,90 C200,100 250,40 300,30 C350,20 400,60 450,10" 
                          fill="none" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth="4" 
                          strokeLinecap="round"
                          className="drop-shadow-xl"
                        />
                        <path 
                          d="M0,150 C50,140 100,80 150,90 C200,100 250,40 300,30 C350,20 400,60 450,10 L450,200 L0,200 Z" 
                          fill="url(#gradient)" 
                          opacity="0.2"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Floating Tooltip */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute top-[10%] right-[10%] bg-foreground text-background px-4 py-2 rounded-lg text-sm font-bold shadow-xl"
                      >
                        +$1,240.50
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                      </motion.div>
                    </div>

                    {/* List */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">Payment from Stripe</div>
                          <div className="text-xs text-muted-foreground">US Wire Transfer</div>
                        </div>
                        <div className="font-bold text-green-600">+$4,200.00</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-12 -left-12 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl flex items-center gap-4 max-w-xs z-20"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Funds Protected</div>
                    <div className="text-sm font-bold text-foreground leading-tight">Converted to USDC<br/>instantly.</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 border-y border-border/40 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 mb-6 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Powering the next generation of builders</p>
        </div>
        <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-full justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['Stripe', 'Brex', 'Deel', 'Remote', 'Linear', 'Figma'].map((brand, i) => (
             <span key={i} className="text-2xl font-bold font-mono">{brand}</span>
          ))}
          {['Stripe', 'Brex', 'Deel', 'Remote', 'Linear', 'Figma'].map((brand, i) => (
             <span key={`dup-${i}`} className="text-2xl font-bold font-mono">{brand}</span>
          ))}
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything you need to <span className="text-primary">scale globally.</span></h2>
            <p className="text-xl text-muted-foreground">
              Stop worrying about exchange rates and bank fees. We've built the financial infrastructure for the modern internet economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Card */}
            <div className="md:col-span-2 row-span-1 md:row-span-2 rounded-3xl bg-secondary/30 border border-border/50 p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-20 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Global Accounts</h3>
                <p className="text-lg text-muted-foreground max-w-md mb-8">
                  Get local US and EU account details in your name. Receive payments from clients via ACH, Wire, or SEPA as if you were a local.
                </p>
                <div className="mt-auto">
                  <div className="bg-background/80 backdrop-blur rounded-xl p-4 border border-border shadow-sm max-w-sm">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Routing Number</span>
                      <span className="font-mono">021000021</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Account Number</span>
                      <span className="font-mono">•••• 4582</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Card */}
            <div className="md:col-span-1 row-span-1 md:row-span-2 rounded-3xl bg-gradient-to-b from-background to-secondary/50 border border-border/50 p-10 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-500/10 to-transparent" />
              <div className="h-14 w-14 rounded-2xl bg-green-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">4.2% Yield</h3>
              <p className="text-muted-foreground mb-8">
                Your idle funds automatically earn market-leading yield. Payouts daily.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center pb-10">
                <div className="flex items-end gap-2 h-32">
                  {[40, 60, 50, 70, 60, 85, 95].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-6 bg-green-500 rounded-t-md opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Wide Card */}
            <div className="md:col-span-3 rounded-3xl bg-primary text-primary-foreground p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-bold mb-4">Instant Stablecoin Conversion</h3>
                <p className="text-primary-foreground/80 text-lg">
                  Protect your earnings from currency volatility. Automatically convert incoming fiat to USDC or USDT at the real exchange rate.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wider opacity-70 mb-1">Received</div>
                  <div className="text-2xl font-bold">$1,000</div>
                  <div className="text-xs opacity-70">USD</div>
                </div>
                <MoveRight className="h-6 w-6 opacity-50" />
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wider opacity-70 mb-1">Converted</div>
                  <div className="text-2xl font-bold text-white">1,000</div>
                  <div className="text-xs opacity-70">USDC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-50" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                Ready to upgrade your <br/> financial stack?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join thousands of freelancers and creators who are earning more and worrying less.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/dashboard">
                  <Button size="lg" className="h-16 px-12 rounded-full text-lg bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                    Get Started Now
                  </Button>
                </Link>
                <Button variant="ghost" size="lg" className="h-16 px-8 rounded-full text-lg text-white hover:bg-white/10 hover:text-white">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-primary mb-6">
                FinGlobal
              </div>
              <p className="text-muted-foreground max-w-xs">
                The financial operating system for the borderless economy.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Global Accounts</a></li>
                <li><a href="#" className="hover:text-primary">Yield</a></li>
                <li><a href="#" className="hover:text-primary">Cards</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">API Docs</a></li>
                <li><a href="#" className="hover:text-primary">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 FinGlobal Inc. All rights reserved.</div>
            <div className="flex gap-6">
               {/* Social icons would go here */}
               <span>Twitter</span>
               <span>LinkedIn</span>
               <span>GitHub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
