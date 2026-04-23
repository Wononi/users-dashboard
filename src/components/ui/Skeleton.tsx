export const Skeleton = () => {
    return (
        <div className="animate-pulse space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded" />
            ))}
        </div>
    );
};