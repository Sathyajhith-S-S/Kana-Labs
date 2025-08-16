import { Button } from "@/components/ui/Button";
import { TokenInput } from "@/components/ui/TokenInput";
import { useTheme } from "@/hooks/useTheme"; // For our theme toggle

export default function SwapPage() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">

            <div className="absolute top-4 right-4">
                <Button onClick={toggleTheme} variant="secondary">
                    Toggle to {theme === 'light' ? 'Dark' : 'Light'}
                </Button>
            </div>

            <div className="w-full max-w-md mx-auto bg-card border rounded-2xl p-6 space-y-4 shadow-lg">

                <h2 className="text-xl font-heading font-bold">Same-chain Swap</h2>

                <div className="space-y-2 relative">
                    <TokenInput label="Pay from" />

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Button variant="secondary" size="sm" className="rounded-full p-2 h-auto w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </Button>
                    </div>

                    <TokenInput label="Receive to" />
                </div>

                <Button size="lg" className="w-full h-14 text-lg font-bold">
                    Swap now
                </Button>

                <div className="text-center text-sm text-muted-foreground pt-2">
                    Additional details
                </div>
            </div>
        </div>
    );
}