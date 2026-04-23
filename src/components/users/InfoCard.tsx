export const InfoCard = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => {
    return (
        <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-xs text-gray-400 mb-1 uppercase">
                {label}
            </div>
            <div className="font-medium">{value}</div>
        </div>
    );
};