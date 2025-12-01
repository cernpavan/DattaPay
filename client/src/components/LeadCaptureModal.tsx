import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Check } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Started with DattaPay</DialogTitle>
          <DialogDescription>
            Join thousands of global freelancers. Fill out the form below to get your invite.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">You're on the list!</h3>
            <p className="text-muted-foreground">We'll be in touch via WhatsApp shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Mateo Rossi" required />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="mateo@example.com" required />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="whatsapp">WhatsApp Number</Label>
              <div className="flex gap-2">
                <Input 
                  id="country-code" 
                  placeholder="+54" 
                  className="w-20" 
                  required 
                />
                <Input 
                  id="whatsapp" 
                  placeholder="9 11 1234 5678" 
                  className="flex-1" 
                  required 
                />
              </div>
              <p className="text-[0.8rem] text-muted-foreground">Include country code (e.g., +54 for Argentina)</p>
            </div>

            <Button type="submit" className="w-full text-base h-11 mt-2">
              Request Access
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
