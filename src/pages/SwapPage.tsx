import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faGear } from "@fortawesome/free-solid-svg-icons";
import { Token, APTOS, USDC } from "@/lib/tokens";
import { TokenInput } from "@/components/swap/TokenInput";
import { SwapTypeTabs } from "@/components/swap/SwapTypeTabs";
import { SwapDetailsAccordion } from "@/components/swap/SwapDetailsAccordion";
import { TokenSelectList } from "@/components/swap/TokenSelectList";

export type SwapMode = 'same-chain' | 'cross-chain';

export default function SwapPage() {
    document.title = "Kana Swap";
    const [fromToken, setFromToken] = useState<Token>(APTOS);
    const [toToken, setToToken] = useState<Token>(USDC);
    const [chain, setChain] = useState<Token>(APTOS);
    const [swapMode, setSwapMode] = useState<SwapMode>('same-chain');
    const [fromValue, setFromValue] = useState('');

    const handleSwap = () => {
        setFromToken(toToken);
        setToToken(fromToken);
        setFromValue('');
    };

    const handleTokenSelection = (token: Token) => {
        setChain(token);
        setFromToken(token);
        setToToken(USDC);
    };

    const handleModeChange = (mode: SwapMode) => {
        setSwapMode(mode);
        setFromToken(APTOS);
        setToToken(USDC);
        setChain(APTOS);
        setFromValue('');
    };

    return (
        <div className="container mx-auto flex flex-col items-center p-4">
            <div className="w-full max-w-lg mx-auto bg-card rounded-2xl p-4 sm:p-6 space-y-6 shadow-lg border border-black/10 dark:border-white/10">
                <SwapTypeTabs mode={swapMode} onModeChange={handleModeChange} />
                <div className="flex items-center justify-between">
                    <h2 className="font-heading text-muted-foreground font-bold text-lg">
                        {swapMode === 'same-chain' ? 'Same-chain Swap' : 'Cross-chain Swap'}
                    </h2>
                    <div className="flex items-center gap-5 text-muted-foreground">
                        {swapMode === 'cross-chain' && <span className="text-primary text-sm cursor-pointer hover:text-foreground">Redeem</span>}
                        <FontAwesomeIcon icon={faArrowsRotate} size='sm' className="cursor-pointer hover:text-foreground text-primary" />
                        <FontAwesomeIcon icon={faGear} size='sm' className="cursor-pointer hover:text-foreground text-primary" />
                    </div>
                </div>

                {swapMode === 'same-chain' && (
                    <TokenSelectList onSelect={handleTokenSelection} selectedChain={chain} />
                )}

                <div className="space-y-2 relative">
                    <TokenInput
                        label="Pay from"
                        token={fromToken}
                        chain={chain}
                        isFromInput={true}
                        value={fromValue}
                        onValueChange={setFromValue}
                    />

                    <div className="absolute left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2 bg-card p-1 rounded-full">
                        <Button
                            onClick={handleSwap}
                            variant="secondary"
                            size="sm"
                            className="group rounded-full p-2 h-auto w-auto border border-black/10 dark:border-white/10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-200 group-hover:rotate-180"
                            >
                                <path d="M8 18V6l-4 4" />
                                <path d="M16 6v12l4-4" />
                            </svg>
                        </Button>
                    </div>

                    <TokenInput
                        label="Receive to"
                        token={toToken}
                        chain={chain}
                        isFromInput={false}
                        value={''}
                    />
                </div>
                <Button
                    size="lg"
                    className="w-full h-14 text-lg font-bold bg-background text-primary border-primary border border-b-4 rounded-lg shadow-lg hover:shadow-xl hover:animate-bounce-subtle hover:bg-background"
                >
                    Swap now
                </Button>
            </div>
            <div className="w-full max-w-lg mx-auto mt-4 border border-black/10 dark:border-white/10 rounded-2xl">
                <SwapDetailsAccordion />
            </div>
        </div>
    );
}