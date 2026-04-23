import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/services/users.api";

export const useUser = (id: number) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => getUserById(id),
        enabled: !!id,
    });
};