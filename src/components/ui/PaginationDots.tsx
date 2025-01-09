export const PaginationDots = ({
    total,
    current,
    onChange
}: {
    total: number;
    current: number;
    onChange: (index: number) => void;
}) => (
    <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: total }, (_, i) => (
            <button
                key={i}
                onClick={() => onChange(i)}
                className={`h-2.5 rounded-full transition-all duration-300 
                    ${i === current 
                        ? "bg-customYellow w-8"
                        : "bg-gray-600 hover:bg-gray-500 w-2.5"
                    }`}
                aria-label={`Go to slide ${i + 1}`}
            />
        ))}
    </div>
);
