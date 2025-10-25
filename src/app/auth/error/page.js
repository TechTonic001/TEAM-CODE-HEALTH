import Link from "next/link"
import { Button } from "@src/components/ui/button"
import { AlertCircle, ArrowLeft } from "lucide-react"

export default function AuthErrorPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-amber-50 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8 p-8">
                <div className="text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Authentication Error
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        There was a problem signing you in. Please try again.
                    </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <p className="text-sm text-red-800">
                            This could be due to:
                        </p>
                    </div>
                    <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
                        <li>Invalid credentials</li>
                        <li>Account access restrictions</li>
                        <li>Network connectivity issues</li>
                        <li>Service temporarily unavailable</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                        <Link href="/auth/signin">
                            Try Again
                        </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        Need help? Contact our support team
                    </p>
                </div>
            </div>
        </div>
    )
}
