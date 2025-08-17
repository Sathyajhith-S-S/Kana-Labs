import { Button } from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
import type { SwapMode } from "@/pages/SwapPage"; // Assuming SwapMode is exported from SwapPage

export const SwapTypeTabs = ({ mode, onModeChange }: { mode: SwapMode; onModeChange: (mode: SwapMode) => void; }) => (
    <div className="flex">
        <Button
            size="sm"
            variant={mode === 'same-chain' ? 'secondary' : 'ghost'}
            onClick={() => onModeChange('same-chain')}
            className={`me-2 flex-1 group h-10 border-b-2 ${mode === 'same-chain' ? 'text-foreground font-semibold border-primary' : 'text-muted-foreground border-transparent'}`}
        >
            <FontAwesomeIcon icon={faShareNodes} className="me-2 transition-transform duration-300 group-hover:rotate-360" />
            Same-chain
        </Button>
        <Button
            size="sm"
            variant={mode === 'cross-chain' ? 'secondary' : 'ghost'}
            onClick={() => onModeChange('cross-chain')}
            className={`flex-1 group h-10 border-b-2 ${mode === 'cross-chain' ? 'text-foreground font-semibold border-primary' : 'text-muted-foreground border-transparent'}`}
        >
            <FontAwesomeIcon icon={faHexagonNodes} className="me-2 transition-transform duration-300 group-hover:rotate-360" />
            Cross-chain
        </Button>
    </div>
);