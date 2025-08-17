import { Token, TOKENS } from "@/lib/tokens";

export const TokenSelectList = ({ onSelect, selectedChain }: { onSelect: (token: Token) => void; selectedChain: Token; }) => (
    <div className="flex items-center gap-4 overflow-x-auto pb-2">
        {TOKENS.map((token) => (
            <button key={token.symbol} onClick={() => onSelect(token)} className="flex-shrink-0">
                <img
                    src={token.logo}
                    alt={token.name}
                    className={`w-7 h-7 rounded-full transition-all duration-200 ${token.symbol === selectedChain.symbol ? 'scale-75' : 'hover:scale-75'}`}
                />
            </button>
        ))}
    </div>
);