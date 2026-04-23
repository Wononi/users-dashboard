import { User } from "@/types/user";
import Link from "next/link";
import Image from "next/image";

export const UsersTable = ({ users }: { users: User[] }) => {
    return (
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500">
                <tr>
                    <th className="px-5 py-3 text-left font-medium">User</th>
                    <th className="px-5 py-3 text-left font-medium">Email</th>
                    <th className="px-5 py-3 text-left font-medium">Age</th>
                    <th className="px-5 py-3 text-left font-medium">Role</th>
                </tr>
                </thead>

                <tbody>
                {users.map((user) => (
                    <tr
                        key={user.id}
                        className="border-t hover:bg-gray-50 transition"
                    >
                        <td className="px-5 py-4 flex items-center gap-3">
                            <Image
                                src={user.image}
                                alt={user.firstName}
                                width={36}
                                height={36}
                                className="rounded-full"
                            />

                            <Link
                                href={`/users/${user.id}`}
                                className="font-medium hover:underline"
                            >
                                {user.firstName} {user.lastName}
                            </Link>
                        </td>

                        <td className="px-5 py-4 text-gray-600">
                            {user.email}
                        </td>

                        <td className="px-5 py-4">{user.age}</td>

                        <td className="px-5 py-4 capitalize text-gray-600">
                            {user.role}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};