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
        {/* Massive Vibrant Background Mesh - Connecting Text and Visual */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-gradient-to-br from-accent/20 via-primary/20 to-purple-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
           <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-400/20 via-teal-300/20 to-transparent rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 border border-primary/20 text-primary text-xs font-bold shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                New: Instant stablecoin on-ramp
              </div>
              
              {/* Exact Copy from Prompt */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-balance text-foreground drop-shadow-sm">
                Empowering freelancers. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-600 to-accent pb-2">Receive, grow, and spend.</span>
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
                <Button size="lg" className="h-14 px-8 rounded-full text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-primary text-white border-none font-semibold ring-2 ring-white/20 ring-offset-2 ring-offset-background">
                  Start Earning Yield 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base border-2 border-primary/10 bg-white/50 hover:bg-white hover:border-primary/30 text-foreground backdrop-blur-md transition-all shadow-sm">
                View Demo
              </Button>
            </motion.div>

            <div className="flex items-center justify-center gap-8 text-sm font-semibold text-foreground/80 pt-4 bg-white/30 dark:bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full text-green-600"><Check className="h-3 w-3" /></div> Flat 0.5% Fee
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full text-green-600"><Check className="h-3 w-3" /></div> Instant Settlement
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500/20 p-1 rounded-full text-green-600"><Check className="h-3 w-3" /></div> Bank-grade Security
              </div>
            </div>
          </div>

          {/* Product Visual - Stripe-like 3D Tilted Interface */}
          <motion.div 
            style={{ y, opacity }}
            className="relative max-w-6xl mx-auto mt-16 perspective-1000"
          >
            {/* Solid Backdrop Canvas - The "Desk" */}
            <div className="absolute inset-x-[-50vw] top-[20%] bottom-[-50%] bg-gradient-to-b from-gray-50/0 via-gray-50/80 to-white dark:from-transparent dark:to-background -z-10 transform -skew-y-3 pointer-events-none" />

            {/* Vibrant Gradient Mesh Background - Stripe Style */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] -z-10 opacity-100 pointer-events-none">
               <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-[#635BFF]/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
               <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#21808D]/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            {/* Main Dashboard Container */}
            <div className="relative transform rotate-x-[5deg] rotate-y-[-2deg] hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-700 ease-out preserve-3d group">
              {/* Phone Mockup - Floating Left */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -left-12 bottom-12 w-72 z-20 hidden lg:block"
              >
                <div className="rounded-[2.5rem] bg-background border-[8px] border-gray-900 shadow-2xl overflow-hidden">
                  <div className="bg-background p-6 space-y-6 h-[500px]">
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-8 rounded-full bg-secondary" />
                      <div className="h-1 w-12 rounded-full bg-secondary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Balance</div>
                      <div className="text-3xl font-bold">$4,250.00</div>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                        +4.2% APY
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-xl shadow-sm">
                            {i === 1 ? "🇪🇺" : i === 2 ? "🇺🇸" : "💸"}
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-20 bg-gray-200 rounded mb-1" />
                            <div className="h-2 w-12 bg-gray-200 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <Button className="w-full rounded-full shadow-lg bg-primary text-white">Send Money</Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Desktop Dashboard Mockup */}
              <div className="rounded-xl bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden ring-1 ring-black/5">
                {/* Browser Chrome */}
                <div className="h-10 bg-gray-50 dark:bg-gray-800 border-b flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="ml-4 flex-1 flex justify-center">
                    <div className="h-5 w-64 bg-gray-200 dark:bg-gray-700 rounded-md opacity-50" />
                  </div>
                </div>

                {/* Actual Dashboard Content */}
                <div className="p-8 grid md:grid-cols-3 gap-8 bg-background">
                  <div className="md:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                      <div>
                         <h3 className="text-2xl font-bold tracking-tight">Dashboard</h3>
                         <p className="text-muted-foreground">Welcome back, Alex</p>
                      </div>
                      <Button variant="outline" className="rounded-full">
                        <CreditCard className="mr-2 h-4 w-4" /> Cards
                      </Button>
                    </div>
                    
                    <BalanceCard />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl border bg-card hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3 text-muted-foreground">
                          <TrendingUp className="h-4 w-4" />
                          <span className="text-sm font-medium">Yield Earned</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">+$423.15</div>
                        <div className="text-xs text-muted-foreground mt-1">+12% vs last month</div>
                      </div>
                      <div className="p-5 rounded-2xl border bg-card hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3 text-muted-foreground">
                          <Wallet className="h-4 w-4" />
                          <span className="text-sm font-medium">Next Payout</span>
                        </div>
                        <div className="text-2xl font-bold">Tomorrow</div>
                        <div className="text-xs text-muted-foreground mt-1">Est. $1,250.00</div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 space-y-6">
                     <YieldChart />
                     
                     <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                            <Zap className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-bold text-sm">Auto-Staking</div>
                            <div className="text-xs text-green-600 font-medium">Active • 4.2% APY</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Principal</span>
                            <span className="font-medium">$12,500.00</span>
                          </div>
                          <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
                            <div className="bg-primary h-full rounded-full w-[85%]" />
                          </div>
                          <div className="flex justify-between text-xs pt-1">
                            <span className="text-muted-foreground">Projected (1y)</span>
                            <span className="font-bold text-primary">+$525.00</span>
                          </div>
                        </div>
                     </div>

                     {/* Recent Activity Mini-List */}
                     <div className="rounded-2xl border bg-card p-5">
                       <h4 className="text-sm font-semibold mb-4">Recent Activity</h4>
                       <div className="space-y-4">
                         {[1, 2].map((i) => (
                           <div key={i} className="flex items-center justify-between text-sm">
                             <div className="flex items-center gap-3">
                               <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                                 {i === 1 ? "S" : "B"}
                               </div>
                               <div>
                                 <div className="font-medium">{i === 1 ? "Stripe Inc" : "Brex"}</div>
                                 <div className="text-xs text-muted-foreground">Today</div>
                               </div>
                             </div>
                             <div className="font-medium text-green-600">+$2,400</div>
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-white/20 flex items-center gap-4 z-30 max-w-xs"
              >
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-inner">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Payment Received</div>
                  <div className="text-sm font-bold text-foreground">Funds converted to USDC</div>
                </div>
              </motion.div>
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
