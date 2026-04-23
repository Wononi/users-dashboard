export type UserRole = "admin" | "moderator" | "user";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    role: UserRole;
    image: string;

    company?: {
        name: string;
        title: string;
    };

    address?: {
        city: string;
        country: string;
    };
}

export interface UsersResponse {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}