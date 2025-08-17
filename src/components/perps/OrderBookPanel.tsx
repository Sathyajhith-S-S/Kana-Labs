import { useMemo } from "react";
import { CardShell } from "./CardShell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

type Side = "ask" | "bid";

const Row = ({ price, size, sum, side, maxSum }: { price: number; size: number; sum: number; side: Side; maxSum: number; }) => {
    const pct = (sum / maxSum) * 100;
    const fillClass = side === "ask" ? "bg-red-500/10" : "bg-emerald-500/10";

    return (
        <div className={`
                relative grid grid-cols-3 text-[10px] px-3 py-1.5 transition-colors cursor-pointer
                ${side === "ask" ? "hover:bg-red-500/10" : "hover:bg-emerald-500/10"}
            `}>
            <div className={`${fillClass} absolute inset-y-0 left-0`} style={{ width: `${pct}%` }} />
            <div className={`relative ${side === "ask" ? "text-red-500" : "text-emerald-500"}`}>{price.toFixed(2)}</div>
            <div className="relative text-right text-foreground/80">{size.toFixed(3)}</div>
            <div className="relative text-right text-muted-foreground">{sum.toFixed(3)}</div>
        </div>
    );
}

export function OrderbookPanel() {
    const asks = useMemo(() => [
        [118305.50, 0.05, 0.05],
        [118308.00, 0.10, 0.15],
        [118310.00, 0.20, 0.35],
        [118312.50, 0.15, 0.50],
        [118315.00, 0.25, 0.75],
        [118325.00, 0.30, 0.80]
    ] as [number, number, number][], []);

    const bids = useMemo(() => [
        [118300.00, 0.12, 0.12],
        [118298.50, 0.08, 0.20],
        [118295.00, 0.25, 0.45],
        [118292.50, 0.18, 0.63],
        [118290.00, 0.30, 0.93],
        [118280.00, 0.20, 0.95]
    ] as [number, number, number][], []);

    const maxSum = useMemo(() => {
        const lastAskSum = asks[asks.length - 1]?.[2] ?? 0;
        const lastBidSum = bids[bids.length - 1]?.[2] ?? 0;
        return Math.max(lastAskSum, lastBidSum);
    }, [asks, bids]);

    return (
        <CardShell title="Orderbook" className="flex flex-col">
            <div className="grid grid-cols-3 text-[10px] tracking-wide px-3 py-2 border-b border-black/10 dark:border-white/10">
                <div>Price <br /><span className="text-muted-foreground">(USDT)</span></div>
                <div className="text-right">Size <br /><span className="text-muted-foreground">(BTC)</span></div>
                <div className="text-right">Sum <br /><span className="text-muted-foreground">(BTC)</span></div>
            </div>

            <div className="flex-grow overflow-auto">
                {asks.slice().reverse().map(([p, s, sum], i) => (
                    <Row key={`a-${i}`} price={p} size={s} sum={sum} side="ask" maxSum={maxSum} />
                ))}

                <div className="flex items-center gap-1 px-3 py-1 border-y border-black/10 dark:border-white/10 text-md font-semibold text-emerald-500">
                    <span>118,302.50</span>
                    <FontAwesomeIcon icon={faArrowUp} color="#10b981" size="xs" />
                </div>

                {bids.map(([p, s, sum], i) => (
                    <Row key={`b-${i}`} price={p} size={s} sum={sum} side="bid" maxSum={maxSum} />
                ))}
            </div>
        </CardShell>
    );
}