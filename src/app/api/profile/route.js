
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const DUMMY_PROFILE = {
    user: {
        id: "dummy-user-id",
        email: "jane.doe@example.com",
        name: "Jane Doe",
        profile: {
            id: "dummy-profile-id",
            phoneNumber: "+234 801 234 5678",
            dateOfBirth: "1990-05-15",
            bloodType: "O+",
            emergencyContact: "John Doe",
            emergencyPhone: "+234 802 345 6789",
            medicalConditions: ["None"],
            allergies: ["Penicillin"],
            pregnancyHistory: {
                previousPregnancies: 1,
                complications: "None",
                lastMenstrualPeriod: "2025-09-01"
            }
        }
    }
};

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return NextResponse.json(DUMMY_PROFILE);
    } catch (error) {
        console.error("Error fetching profile:", error);
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

        // Return dummy success response with merged profile data
        return NextResponse.json({
            message: "Profile updated successfully",
            profile: {
                ...DUMMY_PROFILE.user.profile,
                ...data
            }
        }, { status: 200 });
    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
