export const SymbolIndicator = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="flex flex-grow w-1/2 flex-col justify-center items-start gap-2.5 p-5">
            {children}
        </span>
    );
}

