export const Pagination = ({
    page,
    total,
    limit,
    onChange,
}: {
    page: number;
    total: number;
    limit: number;
    onChange: (page: number) => void;
}) => {
    const totalPages = Math.ceil(total / limit);

    return (
        <div className="flex items-center justify-between mt-6">
            <button
                disabled={page === 1}
                onClick={() => onChange(page - 1)}
                className="px-4 py-2 rounded-md border bg-white shadow-sm hover:bg-gray-50 disabled:opacity-40"
            >
                Previous
            </button>

            <span className="text-sm text-gray-500">
                Page {page} of {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() => onChange(page + 1)}
                className="px-4 py-2 rounded-md border bg-white shadow-sm hover:bg-gray-50 disabled:opacity-40"
            >
                Next
            </button>
        </div>
    );
};