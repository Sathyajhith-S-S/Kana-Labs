import { useState } from "react";
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

type Tab = typeof TABS[number];

export function OpenOrdersSection() {
    const [activeTab, setActiveTab] = useState<Tab>("Open Orders");

    return (
        <CardShell>
            <div className="border-b border-white/10">
                <div className="flex items-center overflow-x-auto">
                    {TABS.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTab(t)}
                            className={`whitespace-nowrap px-8 py-3 text-xs font-medium transition-colors 
                                ${activeTab === t
                                    ? "bg-muted text-foreground border-b-2 border-primary font-semibold"
                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                }`
                            }
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-6 h-32 flex flex-col items-center justify-center text-center text-xs text-muted-foreground">
                <p>Sign in to see your {activeTab}</p>
                <div className="mt-4">
                    <Button
                    size="sm"
                    className="w-full h-10 text-xs font-bold bg-background text-primary border-primary border border-b-4 
                    rounded-lg shadow-lg hover:shadow-xl hover:animate-bounce-subtle hover:bg-background"
                >
                    Sign in
                </Button>
                </div>
            </div>
        </CardShell>
    );
}