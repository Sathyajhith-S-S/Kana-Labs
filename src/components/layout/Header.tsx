import { Button } from "@/components/ui/Button";
import { useTheme } from "@/hooks/useTheme";
import kanalabsLogo from '/kana-labs.svg';

const NavLink = ({ children, active = false }: { children: React.ReactNode; active?: boolean }) => (
    <a
        href="#"
        className={`px-3 py-2 text-sm font-medium rounded-md ${active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
    >
        {children}
    </a>
);

export function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <img src={kanalabsLogo} alt="Kana Labs Logo" className="h-7 w-auto" />
                        <div className="hidden md:flex items-center gap-2">
                            <NavLink active>Swap</NavLink>
                            <NavLink>Trade</NavLink>
                            <NavLink>Perps</NavLink>
                            <NavLink>OPerps</NavLink>
                            <NavLink>Refer</NavLink>
                            <NavLink>Learn</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="secondary">Connect wallet</Button>
                        <Button onClick={toggleTheme} variant="ghost" size="sm" className="p-2 h-auto">
                            {theme === 'light' ? '🌙' : '☀️'}
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-auto">🔔</Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}