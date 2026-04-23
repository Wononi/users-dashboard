import type { UserRole } from "@/types/user";

export const Badge = ({ role }: { role: UserRole }) => {
    const colors = {
        admin: "bg-red-100 text-red-700",
        moderator: "bg-yellow-100 text-yellow-700",
        user: "bg-green-100 text-green-700",
    };

    return (
        <span
            className={`text-xs px-2 py-1 rounded ${
                colors[role as keyof typeof colors] || "bg-gray-100"
            }`}
        >
          {role}
        </span>
    );
};