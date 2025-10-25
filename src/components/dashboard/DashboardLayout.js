'use client';

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { Button } from "@src/components/ui/button"
import {
    Home,
    User,
    Calendar,
    CreditCard,
    Settings,
    LogOut,
    Bell,
    Heart
} from "lucide-react"

export function DashboardLayout({ children }) {
    const { data: session } = useSession()

    const navigation = [
        { name: "Dashboard", href: "/dashboard", icon: Home },
        { name: "Profile", href: "/profile", icon: User },
        { name: "Bookings", href: "/bookings", icon: Calendar },
        { name: "Payments", href: "/payments", icon: CreditCard },
        { name: "Settings", href: "/settings", icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="text-2xl">🩺</div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">
                                    Maternal Health Companion
                                </h1>
                                <p className="text-sm text-gray-600">Dashboard</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon">
                                <Bell className="w-5 h-5" />
                            </Button>
                            <div className="flex items-center space-x-3">
                                <div className="text-sm">
                                    <p className="font-medium text-gray-900">{session?.user?.name}</p>
                                    <p className="text-gray-600">{session?.user?.email}</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                >
                                    <LogOut className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <nav className="lg:w-64">
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <ul className="space-y-2">
                                {navigation.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors"
                                            >
                                                <Icon className="w-4 h-4" />
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
