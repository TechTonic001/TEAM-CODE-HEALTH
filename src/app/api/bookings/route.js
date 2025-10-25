
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const DUMMY_BOOKINGS = {
    bookings: [
        {
            id: "book-001",
            type: "Prenatal Checkup",
            appointmentDate: "2025-10-26T10:00:00Z",
            status: "confirmed",
            doctorName: "Dr. Sarah Johnson",
            notes: "Regular checkup and ultrasound",
            transactions: [
                {
                    id: "trans-001",
                    amount: 15000,
                    status: "completed"
                }
            ]
        },
        {
            id: "book-002",
            type: "Ultrasound Scan",
            appointmentDate: "2025-10-21T11:30:00Z",
            status: "completed",
            doctorName: "Dr. Michael Chen",
            notes: "20-week anatomy scan",
            transactions: [
                {
                    id: "trans-002",
                    amount: 8500,
                    status: "completed"
                }
            ]
        },
        {
            id: "book-003",
            type: "Lab Tests",
            appointmentDate: "2025-10-27T14:00:00Z",
            status: "pending",
            doctorName: "Dr. Aisha Patel",
            notes: "Routine blood work and glucose test",
            transactions: [
                {
                    id: "trans-003",
                    amount: 5000,
                    status: "pending"
                }
            ]
        }
    ]
};

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.json(DUMMY_BOOKINGS);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const data = await request.json();

        // Create a new dummy booking
        const newBooking = {
            id: `book-${Date.now()}`,
            type: data.type,
            appointmentDate: data.appointmentDate,
            status: "pending",
            doctorName: data.doctorName || "Dr. Available",
            notes: data.notes || "",
            transactions: []
        };

        return NextResponse.json({
            message: "Booking created successfully",
            booking: newBooking
        }, { status: 201 });
    } catch (error) {
        console.error("Error creating booking:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
