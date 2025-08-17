import { CardShell } from "./CardShell";
import { Button } from "@/components/ui/Button";

const TABS = [
    "Open Orders",
    "Positions",
    "Order History",
    "Trade History",
    "Funding History",
    "Deposit/Withdraw History",
] as const;

export function OpenOrdersSection() {
    return (
        <CardShell>
            <div className="px-4 pt-3">
                <div className="flex items-center gap-2 overflow-x-auto">
                    {TABS.map((t, i) => (
                        <button
                            key={t}
                            className={`whitespace-nowrap rounded-md border px-3 py-1.5 text-xs ${i === 0
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-muted text-foreground/80 hover:bg-muted/80"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-6 text-center text-sm text-muted-foreground border-t">
                <p>Sign in to see your Open orders</p>
                <div className="mt-2">
                    <Button size="sm">Sign in</Button>
                </div>
            </div>
        </CardShell>
    );
}
