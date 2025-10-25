import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DashboardLayout } from "@src/components/dashboard/DashboardLayout";
import { SettingsForm } from "@src/components/settings/SettingsForm";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function SettingsPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                    <p className="text-gray-600 mt-2">
                        Manage your account preferences and notifications
                    </p>
                </div>

                <SettingsForm />
            </div>
        </DashboardLayout>
    )
}
