import {User, UserRole} from "@/types/user";

export const filterUsers = (
    users: User[],
    search: string,
    role: 'all' | UserRole
) => {
    return users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

        const matchesSearch =
            fullName.includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const matchesRole = role === "all" || user.role === role;

        return matchesSearch && matchesRole;
    });
};