import { useState } from "react"; // 1. Import useState
import { Button } from "@/components/ui/Button";

type TradeType = 'market' | 'limit';

export function OrderForm() {
    const [tradeType, setTradeType] = useState<TradeType>('limit');

    return (
        <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg">Trade</h3>

            <div className="grid grid-cols-2 gap-2">
                <Button
                    onClick={() => setTradeType('market')}
                    variant={tradeType === 'market' ? 'secondary' : 'ghost'}
                    size="sm"
                >
                    Market
                </Button>
                <Button
                    onClick={() => setTradeType('limit')}
                    variant={tradeType === 'limit' ? 'secondary' : 'ghost'}
                    size="sm"
                >
                    Limit
                </Button>
            </div>

            <div className="space-y-3">
                <div>
                    <label htmlFor="price" className="text-xs text-muted-foreground">Price</label>
                    <input
                        id="price"
                        type="text"
                        placeholder="0.00"
                        className="w-full bg-muted p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={tradeType === 'market'}
                    />
                </div>
                <div>
                    <label htmlFor="amount" className="text-xs text-muted-foreground">Amount</label>
                    <input
                        id="amount"
                        type="text"
                        placeholder="0.00"
                        className="w-full bg-muted p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Buy / Long
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Sell / Short
                </Button>
            </div>

            <Button variant="outline" className="w-full">Sign In</Button>
        </div>
    );
}