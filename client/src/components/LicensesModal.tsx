import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface LicensesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LicensesModal({ isOpen, onClose }: LicensesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Licenses & Registrations</DialogTitle>
          <DialogDescription>
            DattaPay is committed to compliance and security.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          <div className="p-4 border rounded-lg bg-secondary/10">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                {/* FinCEN Logo Placeholder / Icon */}
                <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center text-white font-serif font-bold text-xs">
                  FinCEN
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Money Services Business (MSB)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Registered with the Financial Crimes Enforcement Network (FinCEN), a bureau of the U.S. Department of the Treasury.
                </p>
                <div className="mt-3 text-xs text-muted-foreground font-mono bg-secondary/20 p-2 rounded">
                  Registration Status: Active<br/>
                  Regulated under 31 CFR 1022.380
                </div>
                <div className="mt-3">
                  <a href="https://www.fincen.gov/resources/msb-state-selector" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                    Verify Registration &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
