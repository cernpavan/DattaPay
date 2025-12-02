import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Plus, ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export function BalanceCard() {
  return (
    <Card className="col-span-2 overflow-hidden border bg-card shadow-sm relative">
      
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Total Available Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-foreground tracking-tight">$2,305.00</span>
            <span className="text-xl text-muted-foreground font-normal">/ €0.00</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-2">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-medium">
              <TrendingUp className="h-3 w-3" />
              4.2% APY
            </div>
            <span className="text-muted-foreground">earning on idle funds</span>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link 
            href="/receive" 
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 shadow-sm bg-primary hover:bg-primary/90 text-white border-none")}
          >
            <Plus className="mr-2 h-4 w-4" />
            Receive Payment
          </Link>
          <Button variant="outline" size="lg" className="rounded-full px-6 border-input hover:bg-accent hover:text-accent-foreground">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Send Money
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
