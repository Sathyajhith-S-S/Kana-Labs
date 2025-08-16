import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
}