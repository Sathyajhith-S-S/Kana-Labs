import { CardShell } from "./CardShell";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function AccountOverviewPanel() {
    const items = [
        { label: "Account Equity", value: "$0.00 USDT", tooltip: "Balance + Unrealised PnL" },
        { label: "Balance", value: "$0.00 USDT", tooltip: "Net Transfers + Total PnL" },
        { label: "Balance available to trade", value: "$0.00 USDT", tooltip: "Margin locked in positions & open orders" },
        { label: "Unrealised PnL", value: "$0.00 USDT", emphasis: "green" },
    ];

    return (
        <CardShell title="Account Overview">
            <TooltipProvider>
                <div className="p-4 space-y-2 text-[11px]">
                    {items.map((it) => (
                        <div key={it.label} className="flex items-center justify-between">
                            {it.tooltip ? (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className="text-muted-foreground underline cursor-help">
                                            {it.label}
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{it.tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ) : (
                                <span className="text-muted-foreground">{it.label}</span>
                            )}

                            <span className={`font-medium ${it.emphasis === 'green' ? 'text-emerald-500' : ''}`}>
                                {it.value}
                            </span>
                        </div>
                    ))}
                </div>
            </TooltipProvider>
        </CardShell>
    );
}