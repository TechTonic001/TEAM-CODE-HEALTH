import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DashboardLayout } from "@src/components/dashboard/DashboardLayout";
import { BookingForm } from "@src/components/booking/BookingForm";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function NewBookingPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Book Appointment</h1>
                    <p className="text-gray-600 mt-2">
                        Schedule your healthcare appointment
                    </p>
                </div>

                <BookingForm />
            </div>
        </DashboardLayout>
    )
}
