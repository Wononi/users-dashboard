"use client";

import { useParams } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { ProfileSkeleton } from "@/components/ui/ProfileSkeleton";
import { InfoCard } from "@/components/users/InfoCard";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import Image from "next/image";

export default function UserPage() {
    const params = useParams<{ id: string }>();
    const id = Number(params.id);

    const { data, isLoading, isError } = useUser(id);

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Link
                href="/users"
                className="text-sm text-gray-500 hover:text-gray-700"
            >
                ← Back to users
            </Link>
            <div className="text-sm text-gray-400">
                <Link href="/users" className="hover:underline">
                    Users
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">
                  {data
                      ? `${data.firstName} ${data.lastName}`
                      : "User"}
                </span>
            </div>
            {isLoading && <ProfileSkeleton />}
            {(isError || !data) && !isLoading && (
                <div className="text-center py-16">
                    <div className="text-lg font-medium text-gray-700">
                        User not found
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                        This user may not exist or was removed
                    </div>
                </div>
            )}
            {data && (
                <>
                    <div className="bg-white border rounded-xl p-6 shadow-sm flex items-center gap-5">
                        <Image
                            src={data.image}
                            alt={data.firstName}
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold">
                                {data.firstName} {data.lastName}
                            </h1>

                            <div className="mt-2">
                                <Badge role={data.role} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoCard label="Email" value={data.email} />
                        <InfoCard label="Age" value={String(data.age)} />
                        <InfoCard
                            label="Company"
                            value={data.company?.name || "—"}
                        />
                        <InfoCard
                            label="Position"
                            value={data.company?.title || "—"}
                        />
                        <InfoCard
                            label="City"
                            value={data.address?.city || "—"}
                        />
                        <InfoCard
                            label="Country"
                            value={data.address?.country || "—"}
                        />
                    </div>
                </>
            )}
        </div>
    );
}