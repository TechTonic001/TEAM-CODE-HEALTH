import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DashboardLayout } from "@src/components/dashboard/DashboardLayout";
import { BookingsList } from "@src/components/booking/BookingsList";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function BookingsPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
                        <p className="text-gray-600 mt-2">
                            Manage your healthcare appointments
                        </p>
                    </div>
                    <a
                        href="/bookings/new"
                        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                        Book New Appointment
                    </a>
                </div>

                <BookingsList />
            </div>
        </DashboardLayout>
    )
}
