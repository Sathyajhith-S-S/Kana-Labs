"use client";

import { CardShell } from "./CardShell";

type Stat = { label: string; value: string; sub?: string; emphasis?: "green" | "red" | "none" };
type Props = {
    pair?: string;          // e.g., "APT - PERP"
    leverage?: string;      // e.g., "2x"
    stats?: Stat[];         // override defaults if you have live data
    right?: React.ReactNode;
};

export function TopStatsRibbon({
    pair = "APT - PERP",
    leverage = "2x",
    stats,
    right,
}: Props) {
    const items: Stat[] =
        stats ??
        [
            { label: "Mark", value: "$7.32", emphasis: "none" },
            { label: "24h change", value: "+2 %", emphasis: "green" },
            { label: "Oracle Price", value: "$11.1", emphasis: "none" },
            { label: "24h volume", value: "245,694,542", emphasis: "none" },
            { label: "Funding", value: "0.012%", emphasis: "none", sub: "Next Funding 00:23:34" },
        ];

    return (
        <CardShell className="h-20">
            <div className="h-full w-full flex items-center justify-between px-4">
                {/* Left: Pair selector summary (static for now) */}
                <div className="flex items-center gap-4">
                    <div className="text-base sm:text-lg font-bold font-heading">{pair}</div>
                    <div className="hidden sm:flex items-center gap-6">
                        {items.map((s) => (
                            <div key={s.label}>
                                <div
                                    className={[
                                        "text-sm sm:text-base font-semibold",
                                        s.emphasis === "green" && "text-emerald-500",
                                        s.emphasis === "red" && "text-red-500",
                                        s.emphasis === "none" && "text-foreground",
                                    ].filter(Boolean).join(" ")}
                                >
                                    {s.value}
                                </div>
                                <div className="text-[11px] text-muted-foreground">{s.sub ?? s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: quick controls (example: leverage) */}
                <div className="flex items-center gap-2">
                    <div className="text-xs px-2 py-1 rounded-md border bg-muted/50">{leverage}</div>
                    {right}
                </div>
            </div>
        </CardShell>
    );
}
