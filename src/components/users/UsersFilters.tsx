"use client";

import { useUsersStore } from "@/store/users.store";
import type { UserRole } from "@/types/user";

export const UsersFilters = () => {
    const { search, role, setSearch, setRole, setPage } =
        useUsersStore();

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <input
                className="border rounded-lg px-4 py-2 w-full md:w-72 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search users..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                }}
            />

            <select
                className="border rounded-lg px-4 py-2 w-full md:w-56 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={role}
                onChange={(e) => {
                    setRole(e.target.value as any);
                    setPage(1);
                }}
            >
                <option value="all">All roles</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
                <option value="user">User</option>
            </select>
        </div>
    );
};