import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignInForm } from "@src/components/auth/SignInForm";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function SignInPage() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/dashboard");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-amber-50 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 p-8">
                <div className="text-center">
                    <div className="text-4xl mb-4">🩺</div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to your Maternal Health Companion account
                    </p>
                </div>
                <SignInForm />
            </div>
        </div>
    );
}
