import { Layout } from "@/components/layout/Layout";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { YieldChart } from "@/components/dashboard/YieldChart";
import { TransactionHistory } from "@/components/dashboard/TransactionHistory";
import { motion } from "framer-motion";
import bgImage from "@assets/generated_images/soft_abstract_gradient_background_for_fintech_app.png";

export default function Dashboard() {
  return (
    <Layout>
      {/* Background decorative element - extremely subtle */}
      <div 
        className="fixed inset-0 -z-10 opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Overview</h1>
            <p className="text-muted-foreground mt-1">Welcome back to your financial control center.</p>
          </div>
          <div className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border">
            Flat 0.5% fee on payouts
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BalanceCard />
          <YieldChart />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TransactionHistory />
          </div>
          <div className="space-y-6">
             {/* Additional widgets could go here */}
             <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
               <h3 className="font-semibold mb-2">Quick Actions</h3>
               <div className="grid grid-cols-2 gap-4">
                 <button className="p-4 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-all text-center text-sm font-medium flex flex-col items-center gap-2">
                    <span className="text-2xl">💱</span>
                    Convert
                 </button>
                 <button className="p-4 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-all text-center text-sm font-medium flex flex-col items-center gap-2">
                    <span className="text-2xl">🏦</span>
                    Withdraw
                 </button>
               </div>
             </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
