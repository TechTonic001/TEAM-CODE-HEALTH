import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DashboardLayout } from "@src/components/dashboard/DashboardLayout";
import { ProfileOverview, RecentBookings, QuickActions } from "@src/components/dashboard/DashboardComponents";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome back, {session.user?.name || "User"}!
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Here's an overview of your maternal health journey
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <ProfileOverview />
                    </div>
                    <div>
                        <QuickActions />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <RecentBookings />
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Health Reminders
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                                <div className="text-pink-600 mr-3">📅</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Next Appointment</p>
                                    <p className="text-xs text-gray-600">Prenatal checkup - Dec 15, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 bg-amber-50 rounded-lg">
                                <div className="text-amber-600 mr-3">💊</div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Medication Reminder</p>
                                    <p className="text-xs text-gray-600">Take prenatal vitamins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
