import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const SwapDetailsAccordion = () => {
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

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <div className="p-3 mx-4 pt-0">
                    <div className="border-t border-black/10 dark:border-white/10 pt-3 space-y-3">
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