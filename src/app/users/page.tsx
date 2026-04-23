"use client";

import { useUsers } from "@/hooks/useUsers";
import { useUsersStore } from "@/store/users.store";
import { filterUsers } from "@/utils/filters";
import { UsersFilters } from "@/components/users/UsersFilters";
import { UsersTable } from "@/components/users/UsersTable";
import { Pagination } from "@/components/users/Pagination";
import { Skeleton } from "@/components/ui/Skeleton";
import { useDebounce } from "@/hooks/useDebounce";

const PAGE_SIZE = 10;

export default function UsersPage() {
    const { search, role, page, setPage } = useUsersStore();
    const debouncedSearch = useDebounce(search, 300);

    const { data, isLoading } = useUsers();

    if (isLoading) {
        return (
            <div className="p-6">
                <Skeleton />
            </div>
        );
    }

    if (!data) return <div>No data</div>;

    const rawUsers = data.users ?? [];

    const filteredUsers = filterUsers(
        rawUsers,
        debouncedSearch,
        role
    );

    const paginatedUsers = filteredUsers.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight">
                Users
            </h1>

            <UsersFilters />

            {!filteredUsers.length ? (
                <div className="text-center py-20">
                    <div className="text-lg font-medium text-gray-700">
                        No users found
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                        Try changing filters or search query
                    </div>
                </div>
            ) : (
                <UsersTable users={paginatedUsers} />
            )}

            <Pagination
                page={page}
                total={filteredUsers.length}
                limit={PAGE_SIZE}
                onChange={setPage}
            />
        </div>
    );
}