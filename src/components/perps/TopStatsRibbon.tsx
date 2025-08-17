import { useState, useEffect } from "react";
import { CardShell } from "./CardShell";
import { BTC, ETH, SOL } from "@/lib/tokens";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Stat = {
    label: string;
    value: string;
    sub?: string;
    emphasis?: "green" | "red" | "none";
};

type PairInfo = {
    logo: string;
    alt: string;
    stats: Stat[];
};

const PAIR_DATA: Record<string, PairInfo> = {
    "BTC - PERP": {
        logo: BTC.logo,
        alt: "BTC",
        stats: [
            { label: "Mark", value: "$118,361", emphasis: "none" },
            { label: "24h change", value: "+0.534 %", emphasis: "green" },
            { label: "Oracle Price", value: "$118,301", emphasis: "none" },
            { label: "24h volume", value: "$6463.13", emphasis: "none" },
            { label: "Funding", value: "-0.0404%", emphasis: "none" },
            { label: "Next Funding", value: "47:25", emphasis: "none" },
        ],
    },
    "ETH - PERP": {
        logo: ETH.logo,
        alt: "ETH",
        stats: [
            { label: "Mark", value: "$3,789", emphasis: "none" },
            { label: "24h change", value: "-1.25 %", emphasis: "red" },
            { label: "Oracle Price", value: "$3,788", emphasis: "none" },
            { label: "24h volume", value: "$412M", emphasis: "none" },
            { label: "Funding", value: "+0.0150%", emphasis: "none" },
            { label: "Next Funding", value: "15:10", emphasis: "none" },
        ],
    },
    "SOL - PERP": {
        logo: SOL.logo,
        alt: "SOL",
        stats: [
            { label: "Mark", value: "$165.40", emphasis: "none" },
            { label: "24h change", value: "+3.80 %", emphasis: "green" },
            { label: "Oracle Price", value: "$165.35", emphasis: "none" },
            { label: "24h volume", value: "$289M", emphasis: "none" },
            { label: "Funding", value: "-0.0100%", emphasis: "none" },
            { label: "Next Funding", value: "33:45", emphasis: "none" },
        ],
    },
};

type Pair = keyof typeof PAIR_DATA;

type Props = {
    defaultPair?: Pair;
};

export function TopStatsRibbon({ defaultPair = "BTC - PERP" }: Props) {
    const [selectedPair, setSelectedPair] = useState<Pair>(defaultPair);
    const [timerSeconds, setTimerSeconds] = useState(45 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerSeconds(prevSeconds => {
                if (prevSeconds <= 1) {
                    return 45 * 60;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const currentPairData = PAIR_DATA[selectedPair];
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const items: Stat[] = currentPairData.stats.map(stat =>
        stat.label === "Next Funding"
            ? { ...stat, value: formattedTime }
            : stat
    );

    return (
        <CardShell className="h-20">
            <div className="h-full w-full flex items-center justify-between px-5">
                <div className="flex items-center gap-3">
                    <img src={currentPairData.logo} alt={currentPairData.alt} className="w-6 h-6" />
                    <Select value={selectedPair} onValueChange={(value) => setSelectedPair(value as Pair)}>
                        <SelectTrigger className="text-md font-bold bg-transparent border-none focus:ring-0 p-0">
                            <SelectValue placeholder="Select pair" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="BTC - PERP">BTC - PERP</SelectItem>
                            <SelectItem value="ETH - PERP">ETH - PERP</SelectItem>
                            <SelectItem value="SOL - PERP">SOL - PERP</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="hidden sm:flex items-center gap-6">
                    <div className="h-14 border-l border-black/10 dark:border-white/10" />
                    {items.map((s, i) => (
                        <div key={s.label} className="flex items-center gap-4">
                            <div>
                                <div className="text-[10px] text-muted-foreground mb-1">
                                    {s.sub ?? s.label}
                                </div>
                                <div className={[
                                    "text-xs xs:text-base font-semibold",
                                    s.emphasis === "green" && "text-emerald-500",
                                    s.emphasis === "red" && "text-red-500",
                                    s.emphasis === "none" && "text-foreground",
                                ].filter(Boolean).join(" ")}>
                                    {s.value}
                                </div>
                            </div>
                            {i < items.length - 1 && (
                                <div className="h-14 border-l border-black/10 dark:border-white/10" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </CardShell>
    );
}