type Props = {
    title?: string;
    right?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};

export function CardShell({ title, right, children, className = "" }: Props) {
    return (
        <div className={`
            bg-card
            shadow-lg rounded-lg overflow-hidden 
            border border-black/10 dark:border-white/10
            ${className}
        `}>
            {(title || right) && (
                <div className="flex items-center justify-between px-3 py-3 border-b border-black/10 dark:border-white/10">
                    {title ? (
                        <h3 className="text-xs font-semibold text-foreground/90">{title}</h3>
                    ) : (
                        <div />
                    )}
                    {right}
                </div>
            )}
            {children}
        </div>
    );
}
