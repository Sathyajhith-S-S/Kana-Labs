import { CardShell } from "./CardShell";

export function AccountOverviewPanel() {
    const items = [
        { label: "Account Equity", value: "$0.00" },
        { label: "Balance", value: "$0.00" },
        { label: "Balance available to trade", value: "$0.00" },
        { label: "Unrealised PnL", value: "$0.00" },
    ];

    return (
        <CardShell title="Account Overview">
            <div className="p-4 space-y-2 text-sm">
                {items.map((it) => (
                    <div key={it.label} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{it.label}</span>
                        <span className="font-medium">{it.value}</span>
                    </div>
                ))}
            </div>
        </CardShell>
    );
}
