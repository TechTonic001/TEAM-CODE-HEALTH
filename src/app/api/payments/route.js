
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const DUMMY_TRANSACTIONS = {
    transactions: [
        {
            id: "trans-001",
            amount: 15000,
            currency: "NGN",
            status: "completed",
            createdAt: "2025-10-24T14:30:00Z",
            booking: {
                id: "book-001",
                type: "Prenatal Checkup",
                appointmentDate: "2025-10-26T10:00:00Z"
            }
        },
        {
            id: "trans-002",
            amount: 8500,
            currency: "NGN",
            status: "completed",
            createdAt: "2025-10-20T09:15:00Z",
            booking: {
                id: "book-002",
                type: "Ultrasound Scan",
                appointmentDate: "2025-10-21T11:30:00Z"
            }
        },
        {
            id: "trans-003",
            amount: 5000,
            currency: "NGN",
            status: "pending",
            createdAt: "2025-10-25T16:45:00Z",
            booking: {
                id: "book-003",
                type: "Lab Tests",
                appointmentDate: "2025-10-27T14:00:00Z"
            }
        }
    ]
};

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.json(DUMMY_TRANSACTIONS);
    } catch (error) {
        console.error("Error fetching transactions:", error);
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

        // Create a new dummy transaction
        const newTransaction = {
            id: `trans-${Date.now()}`,
            amount: data.amount,
            currency: "NGN",
            status: "pending",
            createdAt: new Date().toISOString(),
            booking: data.bookingId ? {
                id: data.bookingId,
                type: "Appointment",
                appointmentDate: new Date().toISOString()
            } : null
        };

        return NextResponse.json({
            message: "Payment initiated successfully",
            transaction: newTransaction
        }, { status: 201 });
    } catch (error) {
        console.error("Error creating transaction:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
