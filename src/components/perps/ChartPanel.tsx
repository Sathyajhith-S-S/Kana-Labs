import { CardShell } from "./CardShell";

export function ChartPanel() {
    return (
        <CardShell className="h-[530px] sm:h-[530px]">
            <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                Graph
            </div>
        </CardShell>
    );
}
