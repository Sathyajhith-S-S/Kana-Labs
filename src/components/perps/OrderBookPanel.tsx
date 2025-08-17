import { useMemo } from "react";
import { CardShell } from "./CardShell";

type Side = "ask" | "bid";

function Row({ price, size, sum, side }: { price: number; size: number; sum: number; side: Side }) {
    const pct = Math.min(sum / 100, 1);
    const fillClass =
        side === "ask" ? "bg-red-500/10 dark:bg-red-500/20" : "bg-emerald-500/10 dark:bg-emerald-500/20";

    return (
        <div className="relative">
            <div className={`${fillClass} absolute inset-y-0 right-0`} style={{ width: `${pct * 100}%` }} />
            <div className="relative grid grid-cols-3 text-xs px-3 py-1.5">
                <div className={side === "ask" ? "text-red-500 font-medium" : "text-emerald-500 font-medium"}>
                    {price.toFixed(3)}
                </div>
                <div className="text-foreground/80">{size.toFixed(3)}</div>
                <div className="text-muted-foreground">{sum.toFixed(3)}</div>
            </div>
        </div>
    );
}

export function OrderbookPanel() {
    const asks = useMemo(
        () =>
            [
                [22.005, 45.082, 45.082],
                [22.0, 30.214, 75.296],
                [21.995, 18.11, 93.406],
                [21.99, 11.114, 104.52],
                [21.985, 9.85, 114.37],
            ] as [number, number, number][],
        []
    );

    const bids = useMemo(
        () =>
            [
                [21.98, 14.312, 14.312],
                [21.975, 22.003, 36.315],
                [21.97, 10.441, 46.756],
                [21.965, 6.12, 52.876],
                [21.96, 3.89, 56.766],
            ] as [number, number, number][],
        []
    );

    return (
        <CardShell title="Orderbook">
            <div className="grid grid-cols-3 text-[10px] uppercase tracking-wide text-muted-foreground px-3 py-2">
                <div>
                    Price <br />
                    (USDT)
                </div>
                <div>
                    Size <br />
                    (BTC)
                </div>
                <div>
                    Sum <br />
                    (BTC)
                </div>
            </div>

            <div className="max-h-[260px] overflow-auto">
                {asks.map(([p, s, sum], i) => (
                    <Row key={`a-${i}`} price={p} size={s} sum={sum} side="ask" />
                ))}
                <div className="px-3 py-2 text-center border-y text-xl font-semibold">2345.5</div>
                {bids.map(([p, s, sum], i) => (
                    <Row key={`b-${i}`} price={p} size={s} sum={sum} side="bid" />
                ))}
            </div>
        </CardShell>
    );
}
