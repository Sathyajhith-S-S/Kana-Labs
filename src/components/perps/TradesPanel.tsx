import { useMemo } from "react";
import { CardShell } from "./CardShell";

type Side = "buy" | "sell";
type Trade = { price: number; size: number; time: string; side: Side };

export function TradesPanel() {
    const rows = useMemo<Trade[]>(
        () => [
            { price: 5.66, size: 23.234, time: "12:36:28", side: "sell" },
            { price: 5.66, size: 23.234, time: "12:35:28", side: "sell" },
            { price: 5.66, size: 23.234, time: "12:35:28", side: "sell" },
            { price: 5.66, size: 23.234, time: "12:35:28", side: "sell" },
            { price: 5.66, size: 23.234, time: "12:35:28", side: "buy" },
        ],
        []
    );

    return (
        <CardShell title="Trades" className="flex-1">
            <div className="grid grid-cols-3 text-[10px] uppercase tracking-wide text-muted-foreground px-3 py-2">
                <div>Price</div>
                <div>Size</div>
                <div>Time</div>
            </div>
            <div className="max-h-[160px] overflow-auto text-xs">
                {rows.map((r, i) => (
                    <div key={i} className="grid grid-cols-3 px-3 py-1.5 border-t items-center">
                        <div className={r.side === "buy" ? "text-emerald-500 font-medium" : "text-red-500 font-medium"}>
                            {r.price.toFixed(3)}
                        </div>
                        <div className="text-foreground/80">{r.size.toFixed(3)}</div>
                        <div className="text-muted-foreground">{r.time}</div>
                    </div>
                ))}
            </div>
        </CardShell>
    );
}
