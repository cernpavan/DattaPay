import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const transactions = [
  {
    id: 1,
    name: "Design Studio X",
    type: "Payment Received",
    amount: "+$1,250.00",
    date: "Today, 10:23 AM",
    initial: "DS",
    status: "success",
  },
  {
    id: 2,
    name: "Global Corp Inc",
    type: "Payment Received",
    amount: "+$850.00",
    date: "Yesterday",
    initial: "GC",
    status: "success",
  },
  {
    id: 3,
    name: "USDC Conversion",
    type: "Auto-converted",
    amount: "-$500.00",
    date: "Nov 28",
    initial: "US",
    status: "neutral",
  },
  {
    id: 4,
    name: "Tech Solutions",
    type: "Payment Received",
    amount: "+$2,400.00",
    date: "Nov 25",
    initial: "TS",
    status: "success",
  },
];

export function TransactionHistory() {
  return (
    <Card className="col-span-2 lg:col-span-1 shadow-sm border-border/50">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground border border-border">
                  <AvatarFallback className="text-xs font-medium">{tx.initial}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors">{tx.name}</p>
                  <p className="text-xs text-muted-foreground">{tx.type} • {tx.date}</p>
                </div>
              </div>
              <div className={`font-medium text-sm ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`}>
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 text-center text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
          View all transactions
        </button>
      </CardContent>
    </Card>
  );
}
