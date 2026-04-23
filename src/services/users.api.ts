import axios from "axios";
import { UsersResponse, User } from "@/types/user";

const api = axios.create({
    baseURL: "https://dummyjson.com",
});

export const getUsers = async (params?: {
    limit?: number;
    skip?: number;
}): Promise<UsersResponse> => {
    const { data } = await api.get<UsersResponse>("/users", { params });
    return data;
};

export const getUserById = async (id: number): Promise<User> => {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
};