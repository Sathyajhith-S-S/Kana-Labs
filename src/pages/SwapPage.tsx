import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TokenInput } from "@/components/ui/TokenInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faGear, faChevronDown, faShareNodes, faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import { Token, TOKENS, APTOS, USDC } from "@/lib/tokens";

type SwapMode = 'same-chain' | 'cross-chain';

const SwapTypeTabs = ({ mode, onModeChange }: { mode: SwapMode; onModeChange: (mode: SwapMode) => void; }) => (
    <div className="flex">
        <Button
            size="sm"
            variant={mode === 'same-chain' ? 'secondary' : 'ghost'}
            onClick={() => onModeChange('same-chain')}
            className={`
                me-2 flex-1 group h-10
                border-b-2
                ${mode === 'same-chain' 
                    ? 'text-foreground font-semibold border-primary' 
                    : 'text-muted-foreground border-transparent'
                }`
            }
        >
            <FontAwesomeIcon 
                icon={faShareNodes} 
                className="me-2 transition-transform duration-300 group-hover:rotate-360" 
            />
            Same-chain
        </Button>
        <Button
            size="sm"
            variant={mode === 'cross-chain' ? 'secondary' : 'ghost'}
            onClick={() => onModeChange('cross-chain')}
            className={`
                flex-1 group h-10
                border-b-2
                ${mode === 'cross-chain' 
                    ? 'text-foreground font-semibold border-primary' 
                    : 'text-muted-foreground border-transparent'
                }`
            }
        >
            <FontAwesomeIcon 
                icon={faHexagonNodes} 
                className="me-2 transition-transform duration-300 group-hover:rotate-360" 
            />
            Cross-chain
        </Button>
    </div>
);

const SwapDetailsAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-card rounded-2xl shadow-2xl">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-3 text-sm font-medium"
            >
                <h2 className="ms-4 font-heading text-muted-foreground font-bold text-lg">Additional details</h2>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform me-4 duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'
                    }`}
            >
                <div className="p-3 mx-4 pt-0">
                    <div className="border-t  border-black/10 dark:border-white/10 pt-3 space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Slippage tolerance</span>
                            <div className="flex items-center gap-2">
                                <Button variant="secondary" size="sm" className="h-7">0.5%</Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Liquidity source</span>
                            <span className="font-semibold me-1">OKX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TokenSelectList = ({ onSelect, selectedChain }: { onSelect: (token: Token) => void; selectedChain: Token; }) => (
    <div className="flex items-center gap-4 overflow-x-auto pb-2">
        {TOKENS.map((token) => (
            <button key={token.symbol} onClick={() => onSelect(token)} className="flex-shrink-0">
                <img
                    src={token.logo}
                    alt={token.name}
                    className={`w-7 h-7 rounded-full transition-all duration-200 ${token.symbol === selectedChain.symbol ? 'scale-75' : 'hover:scale-75'
                        }`}
                />
            </button>
        ))}
    </div>
);

export default function SwapPage() {
    document.title = "Kana Swap"
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
                    className="w-full h-14 text-lg font-bold bg-background text-primary border-primary border border-b-4 
                    rounded-lg shadow-lg hover:shadow-xl hover:animate-bounce-subtle hover:bg-background"
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