import { Button } from "@/components/ui/Button";
import { OrderForm } from "@/components/perps/OrderForm";
import { useTheme } from "@/hooks/useTheme";

export default function PerpsPage() {
    const { toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-background text-foreground p-2 sm:p-4">
            <div className="absolute top-4 right-4 z-10">
                <Button onClick={toggleTheme} variant="secondary" size="sm">
                    Toggle Theme
                </Button>
            </div>

            <header className="mb-4">
                <div className="bg-card border rounded-lg flex items-center justify-between p-4 h-20">
                    <div className="flex items-center gap-4">
                        <div className="text-xl font-bold font-heading">APT - PERP</div>
                        <div>
                            <div className="text-lg font-bold text-green-500">$7.32</div>
                            <div className="text-xs text-muted-foreground">Mark</div>
                        </div>
                        <div>
                            <div className="text-sm font-semibold">+2%</div>
                            <div className="text-xs text-muted-foreground">24h change</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">Deposit</Button>
                        <Button>Sign In</Button>
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                <div className="lg:col-span-9 space-y-4">
                    <div className="bg-card border rounded-lg h-96 flex items-center justify-center text-muted-foreground">
                        Chart Placeholder
                    </div>
                    <div className="bg-card border rounded-lg h-64 p-4 text-muted-foreground">
                        Positions / Order History / Trades Placeholder
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-4">
                    <div className="bg-card border rounded-lg p-4 h-80 flex items-center justify-center text-muted-foreground">
                        Orderbook Placeholder
                    </div>
                    <div className="bg-card border rounded-lg p-4">
                        <OrderForm />
                    </div>
                </div>
            </main>
        </div>
    );
}