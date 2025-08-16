import { Button } from "@/components/ui/Button";

interface TokenInputProps {
    label: string;
}

export function TokenInput({ label }: TokenInputProps) {
    return (
        <div className="bg-muted p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
                <p>{label}</p>
                <p>Balance: -</p>
            </div>

            <div className="flex justify-between items-center mt-2">
                <input
                    type="text"
                    placeholder="0.00"
                    className="bg-transparent text-3xl font-bold w-full focus:outline-none placeholder:text-muted-foreground"
                />
                <Button variant="secondary" className="rounded-full shrink-0">
                    Token
                </Button>
            </div>

            <div className="text-sm text-muted-foreground mt-1">
                USD 0
            </div>
        </div>
    );
}