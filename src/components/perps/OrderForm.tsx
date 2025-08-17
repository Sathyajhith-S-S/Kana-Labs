import { useState } from "react";
import { Button } from "../ui/Button";

export function OrderForm() {
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const [leverage, setLeverage] = useState(2);

    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 w-full">
            <div className="flex items-center justify-between text-sm font-medium mb-4">
                <button className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700">
                    Isolated
                </button>
                <button className="px-3 py-1 rounded-lg">Hedge</button>
            </div>

            <div className="flex items-center justify-between text-sm font-medium mb-4">
                <button className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700">
                    Open
                </button>
                <button className="px-3 py-1 rounded-lg">Close</button>
            </div>

            <div className="flex items-center justify-between text-sm font-medium mb-4">
                <button className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700">
                    Limit
                </button>
                <button className="px-3 py-1 rounded-lg">Market</button>
            </div>

            <div className="mb-4">
                <label className="text-xs text-gray-500">Price</label>
                <input
                    type="number"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-800"
                />
            </div>

            <div className="mb-4">
                <label className="text-xs text-gray-500">Amount</label>
                <input
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-800"
                />
            </div>

            <div className="mb-4">
                <label className="text-xs text-gray-500">Leverage: {leverage}x</label>
                <input
                    type="range"
                    min="1"
                    max="50"
                    value={leverage}
                    onChange={(e) => setLeverage(parseInt(e.target.value))}
                    className="w-full"
                />
            </div>

            <div className="flex gap-2 mb-4">
                <Button
                    size="lg"
                    className="w-full h-10 text-md font-bold bg-background text-primary border-primary border border-b-4 
                    rounded-lg shadow-lg hover:shadow-xl hover:animate-bounce-subtle hover:bg-background"
                >
                    Connect Wallet
                </Button>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
                <div className="flex justify-between">
                    <span>Estimated Margin</span>
                    <span>$120.59</span>
                </div>
                <div className="flex justify-between">
                    <span>Estimated Fees</span>
                    <span>0.035%</span>
                </div>
                <div className="flex justify-between">
                    <span>Slippage</span>
                    <span>0.01%</span>
                </div>
            </div>
        </div>
    );
}
