import { AccountOverviewPanel } from "@/components/perps/AccountOverviewPanel";
import { ChartPanel } from "@/components/perps/ChartPanel";
import { OpenOrdersSection } from "@/components/perps/OpenOrdersSection";
import { OrderbookPanel } from "@/components/perps/OrderBookPanel";
import { OrderForm } from "@/components/perps/OrderForm";
import { TopStatsRibbon } from "@/components/perps/TopStatsRibbon";
import { TradesPanel } from "@/components/perps/TradesPanel";
import { useEffect } from "react";

export default function PerpsPage() {
    useEffect(() => {
        document.title = "Kana Perps";
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground p-2 sm:p-4">
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-2">
                <section className="col-span-1 lg:col-span-7 space-y-2 order-2 lg:order-1">
                    <TopStatsRibbon />
                    <ChartPanel />
                </section>
                <section className="col-span-1 lg:col-span-5 order-1 lg:order-2">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 h-full">
                        <div className="sm:col-span-5 flex flex-col gap-2">
                            <OrderbookPanel />
                            <TradesPanel />
                        </div>
                        <div className="sm:col-span-7 flex flex-col gap-2">
                            <OrderForm />
                            <AccountOverviewPanel />
                        </div>
                    </div>
                </section>
                <section className="col-span-1 lg:col-span-12 order-3">
                    <OpenOrdersSection />
                </section>
            </main>
        </div>
    );
}