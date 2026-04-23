export const ProfileSkeleton = () => {
    return (
        <div className="animate-pulse space-y-4">
            <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full" />
                <div className="h-6 w-40 bg-gray-200 rounded" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-16 bg-gray-200 rounded" />
                ))}
            </div>
        </div>
    );
};