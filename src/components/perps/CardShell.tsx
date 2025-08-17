type Props = {
    title?: string;
    right?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};

export function CardShell({ title, right, children, className = "" }: Props) {
    return (
        <div className={`bg-card border rounded-lg overflow-hidden ${className}`}>
            {(title || right) && (
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    {title ? (
                        <h3 className="text-sm font-semibold text-foreground/90">{title}</h3>
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
