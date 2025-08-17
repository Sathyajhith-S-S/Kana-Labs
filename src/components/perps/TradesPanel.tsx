import { useMemo } from "react";
import { CardShell } from "./CardShell";

type Side = "buy" | "sell";
type Trade = { price: number; size: number; time: string; side: Side };

export function TradesPanel() {
    const rows = useMemo<Trade[]>(
        () => [
            { price: 118301.50, size: 0.012, time: "12:36:28", side: "sell" },
            { price: 118301.00, size: 0.005, time: "12:35:54", side: "sell" },
            { price: 118302.00, size: 0.021, time: "12:35:31", side: "buy" },
            { price: 118300.50, size: 0.008, time: "12:35:15", side: "sell" },
            { price: 118299.00, size: 0.015, time: "12:35:02", side: "buy" },
            { price: 118299.50, size: 0.011, time: "12:34:48", side: "buy" },
        ],
        []
    );

    return (
        <CardShell title="Trades" className="flex flex-col">
            <div className="grid grid-cols-3 text-[10px] tracking-wide px-3 py-2 border-b border-black/10 dark:border-white/10">
                <div>Price</div>
                <div className="text-right">Size</div>
                <div className="text-right">Time</div>
            </div>

            <div className="flex-grow overflow-auto text-xs">
                {rows.map((r, i) => (
                    <div key={i} className="hover:bg-muted cursor-pointer grid grid-cols-3 px-3 py-1.5 border-t border-black/10 dark:border-white/10 items-center">
                        <div className={r.side === "buy" ? "text-emerald-500 font-medium" : "text-red-500 font-medium"}>
                            {r.price.toFixed(2)}
                        </div>
                        <div className="text-right text-foreground/80">{r.size.toFixed(3)}</div>
                        <div className="text-right text-muted-foreground">{r.time}</div>
                    </div>
                ))}
            </div>
        </CardShell>
    );
}