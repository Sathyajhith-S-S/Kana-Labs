import { Button } from "@/components/ui/Button";
import { useTheme } from "@/hooks/useTheme";
import kanalabsLogo from '/kana-labs.svg';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode; }) => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md ${active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
        >
            {children}
        </Link>
    );
};

export function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
            <nav className=" px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <img src={kanalabsLogo} alt="Kana Labs Logo" className="h-7 w-auto" />
                        <div className="hidden md:flex items-center">
                            <NavLink to="/swap">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="rotate(90)"
                                >
                                    <path d="M8 18V6l-4 4" />
                                    <path d="M16 6v12l4-4" />
                                </svg>
                                Swap
                            </NavLink>
                            <NavLink to="/trade">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 12l5-5 5 5-5 5z" /></svg>
                                Trade
                            </NavLink>
                            <NavLink to="/perps">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" /><path d="M6 14c0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4-4 1.791-4 4z" /></svg>
                                Perps
                            </NavLink>
                            <NavLink to="/operps">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><circle cx="12" cy="15" r="2" /><path d="M12 17v-5" /></svg>
                                OPerps
                            </NavLink>
                            <NavLink to="/refer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="17" y1="11" x2="23" y2="11" /></svg>
                                Refer
                            </NavLink>
                            <NavLink to="/learn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                Learn
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="secondary" className="flex items-center gap-2 text-primary">
                            <FontAwesomeIcon icon={faWallet} />
                            Connect wallet
                        </Button>
                        <Button variant="ghost" size="sm" className="p-2 h-auto">🔔</Button>
                        <Button onClick={toggleTheme} variant="ghost" size="sm" className="p-2 h-auto">
                            {theme === 'light' ? '🌙' : '☀️'}
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}