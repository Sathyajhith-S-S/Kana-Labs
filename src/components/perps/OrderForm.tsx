import { useState } from "react";
import { Button } from "../ui/Button";
import { CardShell } from "./CardShell";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

type MarginMode = 'isolated' | 'hedge';
type PositionMode = 'open' | 'close';
type OrderType = 'market' | 'limit';

const feesData = [
    { valueLeft: "$0.00", label: "Liq", valueRight: "$0.00" },
    { valueLeft: "$0.00", label: "Value", valueRight: "$0.00" },
    { valueLeft: "$0.00", label: "Margin", valueRight: "$0.00" },
    { valueLeft: "0.00%", label: "Slippage", valueRight: "0.00%" },
    { valueLeft: "Estimated fees", label: "", valueRight: "0.05% / Zero" },
];

const PillTabs = ({ mode, setMode }: { mode: MarginMode, setMode: (mode: MarginMode) => void }) => (
    <div className="grid grid-cols-2 gap-2 text-xs">
        <button onClick={() => setMode('isolated')} className={`py-2 bg-card border border-black/10 dark:border-white/10 rounded-lg transition-colors ${mode === 'isolated' ? 'bg-muted text-foreground font-semibold' : 'text-muted-foreground'}`}>
            Isolated
        </button>
        <button onClick={() => setMode('hedge')} className={`py-2 bg-card border border-black/10 dark:border-white/10 rounded-lg transition-colors ${mode === 'hedge' ? 'bg-muted text-foreground font-semibold' : 'text-muted-foreground'}`}>
            Hedge
        </button>
    </div>
);

const UnderlinedTabs = ({ tabs, activeTab, setActiveTab }: { tabs: string[], activeTab: string, setActiveTab: (tab: string) => void }) => (
    <div className="border-b border-black/10 dark:border-white/10">
        <div className="flex items-center justify-between">
            {tabs.map((t) => (
                <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`whitespace-nowrap flex-1 text-center py-2 text-xs font-medium transition-colors 
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
);

const StyledCheckbox = ({ label }: { label: string }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <span
                className={`
                    w-5 h-5 border-2 rounded flex items-center justify-center transition-colors
                    ${isChecked ? 'bg-primary border-primary' : 'border-muted'}
                `}
            >
                {isChecked && (
                    <svg
                        xmlns="http://www.w.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-foreground"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </span>
            {label}
        </label>
    );
};

export function OrderForm() {
    const [marginMode, setMarginMode] = useState<MarginMode>('isolated');
    const [positionMode, setPositionMode] = useState<PositionMode>('open');
    const [orderType, setOrderType] = useState<OrderType>('market');
    const [amount, setAmount] = useState("");
    const [leverage, setLeverage] = useState(0);

    return (
        <>
            <TooltipProvider>
                <CardShell>
                    <div className="flex items-center justify-between p-3 py-2 border-b border-white/10">
                        <div className="flex flex-col gap-0">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="text-[10px] text-muted-foreground font-semibold underline cursor-help">
                                        Profile 1
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Balance available to trade</p>
                                </TooltipContent>
                            </Tooltip>
                            <span className="text-[11px] font-semibold">
                                0.00 USDT
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="secondary" size="xs" className="p-2 h-auto group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                            </Button>
                            <Button variant="secondary" size="xs" className="p-2 h-auto group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>
                            </Button>
                        </div>
                    </div>
                </CardShell>
            </TooltipProvider>
            <div>
                <PillTabs mode={marginMode} setMode={setMarginMode} />
            </div>
            <CardShell>
                <div className="space-y-0">
                    <UnderlinedTabs tabs={['Open', 'Close']} activeTab={positionMode} setActiveTab={(tab) => setPositionMode(tab as PositionMode)} />
                    <div className="flex items-center">
                        <div className="flex-grow">
                            <UnderlinedTabs tabs={['Market', 'Limit']} activeTab={orderType} setActiveTab={(tab) => setOrderType(tab as OrderType)} />
                        </div>
                        <Button variant="secondary" size="xs" className="text-primary font-semibold me-2 ms-20 pe-1">
                            5x
                            <FontAwesomeIcon icon={faAngleRight} size="xs" className="ms-1" />
                        </Button>
                    </div>
                    <div className="p-2">
                        <CardShell className="p-2 pt-0">
                            <label className="text-[10px] text-muted-foreground">Amount</label>
                            <div className="flex items-center bg-background border border-black/10 dark:border-white/10 p-2 rounded-lg mt-1">
                                <input type="text" placeholder="0.00" value={amount} 
                                onChange={(e) => {
                                    const regex = /^\d*\.?\d*$/;
                                    if (e.target.value === '' || regex.test(e.target.value)) {
                                        setAmount(e.target.value)
                                    }
                                }} className="bg-transparent text-md font-bold w-full focus:outline-none" />
                                <span className="text-xs font-semibold whitespace-nowrap">BTC</span>
                                <FontAwesomeIcon icon={faArrowRightArrowLeft} size="2xs" className="ms-2" />
                            </div>
                        </CardShell>
                    </div>
                    <div className="p-2 pt-0">
                        <CardShell className="p-2">
                            <div className="flex items-center gap-2">
                                <input type="range" min="0" max="100" value={leverage} onChange={(e) => setLeverage(parseInt(e.target.value))}
                                    className="w-full" />
                                <Button variant="secondary" size="xs" className="">{leverage}%</Button>
                            </div>
                        </CardShell>
                    </div>
                    <div className="flex justify-between text-[10px] px-2 pb-2">
                        <span><span className="text-muted-foreground me-1">Buy</span>BTC</span>
                        <span><span className="text-muted-foreground me-1">Sell</span>BTC</span>
                    </div>
                    <div className="p-2 py-0">
                        <CardShell className="p-2">
                            <StyledCheckbox label="TP/SL" />
                        </CardShell>
                    </div>
                    <div className="p-2">
                        <Button
                            size="lg"
                            className="w-full h-10 text-md font-bold bg-background text-primary border-primary border border-b-4 
                        rounded-lg shadow-lg hover:shadow-xl hover:animate-bounce-subtle hover:bg-background"
                        >
                            Connect Wallet
                        </Button>
                    </div>
                    <div className="space-y-1 px-4 pb-3 pt-1">
                        {feesData?.map((item, index) => (
                            <div key={item.label || item.valueLeft} className="grid grid-cols-3 items-center">
                                <span
                                    className={`text-[10px]
                                            ${index === feesData.length - 1
                                            ? 'text-muted-foreground'
                                            : 'underline'
                                        }
                                        `}
                                >
                                    {item.valueLeft}
                                </span>
                                <span className="text-center text-[11px] text-muted-foreground">
                                    {item.label}
                                </span>
                                <span
                                    className={`text-right text-[10px] ${index < feesData.length - 1 ? 'underline' : ''
                                        }`}
                                >
                                    {item.valueRight}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardShell>
        </>
    );
}