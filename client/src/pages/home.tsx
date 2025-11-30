import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe, Shield, Zap, TrendingUp, LayoutDashboard, CreditCard, Wallet, MoveRight, PlayCircle, Quote, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgImage from "@assets/generated_images/soft_abstract_gradient_background_for_fintech_app.png";
import { BalanceCard } from "@/components/dashboard/BalanceCard"; // Reuse the actual UI component
import { YieldChart } from "@/components/dashboard/YieldChart";   // Reuse the actual UI component
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/20">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-multiply dark:mix-blend-soft-light"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/60 via-transparent to-white/90 dark:from-black/60 dark:to-black/90" />
      </div>

      {/* Sticky Fee Banner - "Universal Element: Fee (0.5%) always visible" */}
      <div className="bg-accent text-accent-foreground py-2 text-center text-xs font-bold tracking-widest uppercase sticky top-0 z-[60]">
        Flat 0.5% payout fee always • No hidden costs
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-8 z-50 mt-4"
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full shadow-lg px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-foreground">FinGlobal</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              {['Product', 'Yield', 'Pricing', 'Company'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <a className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block transition-colors">Log in</a>
              </Link>
              <Link href="/dashboard">
                <Button className="rounded-full px-5 h-10 shadow-lg shadow-primary/20 bg-primary text-white border-none hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 overflow-visible">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-secondary-foreground text-xs font-medium shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                New: Instant stablecoin on-ramp
              </div>
              
              {/* Exact Copy from Prompt */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-balance text-foreground">
                Empowering freelancers. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-accent">Receive, grow, and spend.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light text-balance">
                Receive payments globally in USD/EUR. Instantly convert to stablecoins. 
                <span className="block mt-2 text-foreground font-medium">Earn 4.2% APY on idle funds from day one.</span>
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center w-full"
            >
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-8 rounded-full text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-primary text-white border-none font-semibold">
                  Start Earning Yield 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base border-border bg-background/50 hover:bg-background hover:border-primary/30 text-foreground backdrop-blur-sm transition-all">
                View Demo
              </Button>
            </motion.div>

            <div className="flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Flat 0.5% Fee
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Instant Settlement
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> Bank-grade Security
              </div>
            </div>
          </div>

          {/* Product Visual - "Hero Balance Card" & "Yield Graph" from instructions */}
          <motion.div 
            style={{ y, opacity }}
            className="relative max-w-5xl mx-auto perspective-1000"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent blur-[100px] -z-10 rounded-full opacity-60" />
            
            <div className="relative bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-2 shadow-2xl ring-1 ring-black/5 transform rotate-x-[5deg] transition-transform duration-700 hover:rotate-x-0">
              <div className="bg-background/80 dark:bg-card/80 backdrop-blur-sm rounded-[1.5rem] border border-border/50 overflow-hidden p-6 md:p-8 grid md:grid-cols-3 gap-6">
                {/* Reusing Actual Dashboard Components for Authenticity */}
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Overview</h3>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                      Live System
                    </div>
                  </div>
                  <BalanceCard />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">Yield Earned</div>
                      <div className="text-2xl font-bold text-green-600">+$423.15</div>
                    </div>
                    <div className="p-4 rounded-xl border bg-card">
                      <div className="text-sm text-muted-foreground mb-1">Next Payout</div>
                      <div className="text-2xl font-bold">Tomorrow</div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 space-y-6">
                   <YieldChart />
                   <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-semibold">Auto-Staking</div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Funds are automatically converted to USDC and staked in Aave protocols for maximum yield.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Trust Signals */}
      <section className="py-12 border-y border-border/50 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">TRUSTED BY FREELANCERS AT</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['Stripe', 'Brex', 'Deel', 'Remote', 'Figma'].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-bold font-mono text-foreground/80">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* "Receive Payment Flow" - Explained as Value Prop */}
      <section id="product" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Global payments, simplified.</h2>
            <p className="text-xl text-muted-foreground">
              Share your account details, get paid in any currency, and watch it grow. It's that simple.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent border-t border-dashed border-muted-foreground/30 -z-10" />

            {/* Step 1 */}
            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-background rounded-2xl border border-border shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform" />
                <Globe className="h-10 w-10 text-primary" />
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">1</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Local Accounts</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Get unique USD & EUR account details. Share them with clients for ACH, Wire, or SEPA transfers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-background rounded-2xl border border-border shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <div className="absolute inset-0 bg-accent/5 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform" />
                <Shield className="h-10 w-10 text-accent" />
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-md">2</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Instant Conversion</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Funds are instantly converted to USDC/USDT stablecoins upon receipt. Shield yourself from volatility.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="w-24 h-24 mx-auto bg-background rounded-2xl border border-border shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <div className="absolute inset-0 bg-green-500/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                <TrendingUp className="h-10 w-10 text-green-600" />
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow-md">3</div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Auto-Yield</h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Your balance is automatically staked to earn <span className="text-foreground font-semibold">4.2% APY</span>. Interest is paid out daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - "User testimonials with real names/faces" */}
      <section className="py-32 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Loved by global creators.</h2>
              <p className="text-lg text-muted-foreground">
                Join 10,000+ freelancers who trust FinGlobal with their earnings.
              </p>
            </div>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Product Designer, Taipei",
                text: "FinGlobal changed how I get paid. No more 3% exchange fees, and the yield actually covers my software subscriptions.",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
              },
              {
                name: "Sarah Miller",
                role: "Frontend Dev, Berlin",
                text: "The instant conversion to USDC gives me so much peace of mind. I don't have to worry about currency fluctuations anymore.",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
              },
              {
                name: "James Wilson",
                role: "Content Creator, London",
                text: "I used to wait 5 days for international wires. FinGlobal is instant, and the 0.5% fee is unbeatable.",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
              }
            ].map((user, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-primary/20 mb-6" />
                <p className="text-lg leading-relaxed mb-8 text-foreground/90">"{user.text}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarImage src={user.image} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-sm">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[2.5rem] bg-primary overflow-hidden px-6 py-24 md:px-24 text-center">
             {/* Abstract Shapes */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
             <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px]" />
             <div className="absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-accent/40 rounded-full blur-[100px] mix-blend-screen" />

             <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
               <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                 Your money, earning yield from day one.
               </h2>
               <p className="text-xl text-primary-foreground/80">
                 No minimums. No lockups. Just 0.5% fee on payouts.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="/dashboard">
                   <Button size="lg" className="h-16 px-12 rounded-full text-lg bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl">
                     Get Started Now
                   </Button>
                 </Link>
                 <div className="text-white/80 text-sm">
                   <p>Fully compliant & secure</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer - "Trust badges, brand partners, legal/disclaimer info" */}
      <footer className="py-20 border-t border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-primary mb-6">
                FinGlobal
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                Empowering freelancers globally to receive, grow, and spend earnings without borders.
              </p>
              <div className="flex gap-4 mt-6">
                {/* Compliance Badges */}
                <div className="h-8 w-12 bg-gray-200 rounded opacity-50"></div>
                <div className="h-8 w-12 bg-gray-200 rounded opacity-50"></div>
                <div className="h-8 w-12 bg-gray-200 rounded opacity-50"></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-foreground/80">Platform</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Overview</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Yield</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-foreground/80">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-foreground/80">Legal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2025 FinGlobal Inc. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
