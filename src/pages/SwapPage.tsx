import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TokenInput } from "@/components/ui/TokenInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faGear, faChevronDown, faShareNodes, faHexagonNodes, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

const SwapTypeTabs = () => (
    <div className="flex items-center p-1 bg-muted rounded-lg">
        <Button size="sm" className="flex-1" variant="secondary">
            <FontAwesomeIcon icon={faShareNodes} className="me-2" />Same-chain
        </Button>
        <Button size="sm" className="flex-1" variant="ghost">
            <FontAwesomeIcon icon={faHexagonNodes} className="me-2" />Cross-chain
        </Button>
    </div>
);

const SwapDetailsAccordion = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-muted/50 rounded-lg border">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-3 text-sm font-medium"
            >
                <span>Additional details</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40' : 'max-h-0'
                }`}
            >
                <div className="p-3 border-t space-y-3">
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
    );
};


export default function SwapPage() {
    const [isSwapped, setIsSwapped] = useState(false);

    const fromInput = <TokenInput label="Pay from" />;
    const toInput = <TokenInput label="Receive to" />;

    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-4 pt-10">

            <div className="w-full max-w-md mx-auto bg-card border rounded-2xl p-4 sm:p-6 space-y-4 shadow-lg">
                <SwapTypeTabs />

                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-heading font-bold">Same-chain Swap</h2>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <FontAwesomeIcon icon={faArrowsRotate} className="cursor-pointer hover:text-foreground" />
                        <FontAwesomeIcon icon={faGear} className="cursor-pointer hover:text-foreground" />
                    </div>
                </div>

                <div className="space-y-2 relative">
                    {isSwapped ? toInput : fromInput}

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-1 rounded-full">
                        <Button
                            onClick={() => setIsSwapped(!isSwapped)}
                            variant="secondary"
                            size="sm"
                            className="rounded-full p-2 h-auto w-auto"
                        >
                            <FontAwesomeIcon icon={faArrowsUpDown} className="w-4 h-4" />
                        </Button>
                    </div>

                    {isSwapped ? fromInput : toInput}
                </div>

                <Button size="lg" className="w-full h-14 text-lg font-bold">
                    Swap now
                </Button>
            </div>
            
            <div className="w-full max-w-md mx-auto mt-4">
                <SwapDetailsAccordion />
            </div>

        </div>
    );
}