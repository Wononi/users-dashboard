import { create } from "zustand";
import type { UserRole } from "@/types/user";

type FilterRole = "all" | UserRole;

interface UsersState {
    search: string;
    role: FilterRole;
    page: number;

    setSearch: (value: string) => void;
    setRole: (role: UserRole) => void;
    setPage: (page: number) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
    search: "",
    role: "all",
    page: 1,

    setSearch: (search) => set({ search }),
    setRole: (role) => set({ role }),
    setPage: (page) => set({ page }),
}));