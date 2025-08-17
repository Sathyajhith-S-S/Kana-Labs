import { Button } from "@/components/ui/Button";
import { Token } from "@/lib/tokens";

interface TokenInputProps {
    label: string;
    token: Token;
    onTokenSelectClick: () => void;
    chain: Token;
    isFromInput: boolean;
    value: string;
    onValueChange?: (value: string) => void;
}

export function TokenInput({ label, chain, token, onTokenSelectClick, isFromInput, value, onValueChange }: TokenInputProps) {
    return (
        <div className="bg-muted/60 p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex text-sm">
                        <p className="text-muted-foreground">{label}&nbsp;&nbsp;</p>
                        <a className="text-primary hover:underline cursor-pointer">
                            Connect Wallet
                        </a>
                    </div>
                    <input
                        type="text"
                        inputMode="decimal"
                        placeholder="0.00"
                        className="mt-4 bg-transparent text-3xl font-bold w-full focus:outline-none placeholder:text-muted-foreground"
                        disabled={!isFromInput}
                        value={value}
                        onChange={(e) => {
                            const regex = /^\d*\.?\d*$/;
                            if (e.target.value === '' || regex.test(e.target.value)) {
                                onValueChange?.(e.target.value);
                            }
                        }} />
                </div>
                <Button
                    onClick={onTokenSelectClick}
                    variant="secondary"
                    className="rounded-full shrink-0 flex items-center gap-2 p-2 pe-4"
                >
                    <img src={token.logo} alt={token.name} className="w-8 h-8 rounded-full" />
                    <div className="flex flex-col items-start">
                        <span className="font-bold leading-tight">{token.symbol}</span>
                        <span className="text-xs text-muted-foreground leading-tight">on {chain.name}</span>
                    </div>
                </Button>
            </div>

            <hr className="border-muted/50" />

            <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>USD 0</span>
                <div className="flex items-center gap-3">
                    <span>Balance - 0</span>
                    {isFromInput &&
                        <>
                            <Button variant="secondary" size="xs" className="text-primary font-semibold">50%</Button>
                            <Button variant="secondary" size="xs" className="text-primary font-semibold">Max</Button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}