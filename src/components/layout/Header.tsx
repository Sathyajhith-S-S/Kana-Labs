import { Button } from "@/components/ui/Button";
import { useTheme } from "@/hooks/useTheme";
import kanalabsLogo from '/kana-labs.svg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCircleUser, faMoneyBillTransfer, faStar, faWallet } from "@fortawesome/free-solid-svg-icons";

const NavLink = ({ to, children, disabled = false }: { to: string; children: React.ReactNode; disabled?: boolean; }) => {
    const location = useLocation();
    const active = location.pathname === to;

    const classes = `
        flex items-center gap-1 px-3 py-2 text-xs font-bold rounded-md 
        transition-all duration-200
    `;

    if (disabled) {
        return (
            <span className={`${classes} text-muted-foreground/50 cursor-not-allowed`}>
                {children}
            </span>
        );
    }

    return (
        <Link
            to={to}
            className={`${classes} ${
                active 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-primary hover:-translate-y-0.5'
            }`}
        >
            {children}
        </Link>
    );
};

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    return (
        <TooltipProvider>
            <header className="fixed top-0 left-0 right-0 bg-card backdrop-blur-sm z-50 border border-black/10 dark:border-white/10">
                <nav className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-6">
                            <a href="/swap">
                                <img src={kanalabsLogo} alt="Kana Labs Logo" className="h-7 w-auto" />
                            </a>
                            <div className="hidden md:flex items-center">
                                <NavLink to="/swap">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="16"
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
                                <NavLink to="/trade" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 12l5-5 5 5-5 5z" /></svg>
                                    Trade
                                </NavLink>
                                <NavLink to="/perps">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" /><path d="M6 14c0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4-4 1.791-4 4z" /></svg>
                                    Perps
                                </NavLink>
                                <NavLink to="/operps" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><circle cx="12" cy="15" r="2" /><path d="M12 17v-5" /></svg>
                                    OPerps
                                </NavLink>
                                <NavLink to="/refer" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="17" y1="11" x2="23" y2="11" /></svg>
                                    Refer
                                </NavLink>
                                <NavLink to="/learn" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                    Learn
                                </NavLink>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {location.pathname === '/perps' ? (
                                <>
                                    <Button variant="secondary" className="px-2 flex items-center border border-black/10 dark:border-white/10 gap-2 text-primary">
                                        <FontAwesomeIcon icon={faStar} style={{ color: "#989690", }} size="sm" />
                                        <span className="font-bold text-xs" style={{ color: "#989690", }}>VIP</span>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#FFD43B", }} size="sm" />
                                            </TooltipTrigger>
                                            <TooltipContent><p>Coming soon</p></TooltipContent>
                                        </Tooltip>
                                    </Button>
                                    <Button variant="secondary" className="ps-2 pe-3 flex items-center border border-black/10 dark:border-white/10 gap-2 text-primary hover:animate-bounce-subtle">
                                        <FontAwesomeIcon icon={faMoneyBillTransfer} size="sm" />
                                        <span className="font-bold text-xs">Deposit</span>
                                    </Button>
                                    <Button variant="secondary" className="ps-2 pe-3 flex items-center border border-black/10 dark:border-white/10 gap-2 text-primary hover:animate-bounce-subtle">
                                        <FontAwesomeIcon icon={faCircleUser} />
                                        <span className="font-bold text-xs">Sign in</span>
                                    </Button>
                                </>
                            ) : (
                                <Button variant="secondary" className="flex items-center border border-black/10 dark:border-white/10 gap-2 text-primary hover:animate-bounce-subtle">
                                    <FontAwesomeIcon icon={faWallet} />
                                    <span className="font-bold text-sm">Connect Wallet</span>
                                </Button>
                            )}
                            <Button variant="secondary" size="lg" className="p-2 h-auto group border border-black/10 dark:border-white/10">
                                <svg className="group-hover:animate-ring" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </Button>
                            <Button onClick={toggleTheme} variant="secondary" size="sm" className="p-2 h-auto border border-black/10 dark:border-white/10">
                                {theme === 'light' ? (
                                    <svg className="hover:scale-75" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                ) : (
                                    <svg className="hover:scale-75" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                )}
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
        </TooltipProvider>
    );
}