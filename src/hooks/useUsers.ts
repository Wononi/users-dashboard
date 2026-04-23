import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/users.api";

export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: () => getUsers({ limit: 100 }),
    });
};