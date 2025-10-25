'use client';

import { Button } from "@src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card"
import { Calendar, Plus, Edit, Heart, CreditCard } from "lucide-react"
import Link from "next/link"

export function ProfileOverview() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-600" />
                    Health Profile Overview
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-pink-50 rounded-lg">
                        <p className="text-sm text-gray-600">Blood Group</p>
                        <p className="text-lg font-semibold text-gray-900">O+</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg">
                        <p className="text-sm text-gray-600">Genotype</p>
                        <p className="text-lg font-semibold text-gray-900">AA</p>
                    </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Current Pregnancy Status</p>
                    <p className="text-lg font-semibold text-gray-900">32 weeks</p>
                    <p className="text-xs text-gray-600">Expected Due Date: Feb 15, 2025</p>
                </div>

                <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                        <Link href="/profile">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Profile
                        </Link>
                    </Button>
                    <Button asChild size="sm">
                        <Link href="/bookings/new">
                            <Plus className="w-4 h-4 mr-2" />
                            Book Appointment
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export function QuickActions() {
    const actions = [
        { title: "Book Appointment", href: "/bookings/new", icon: Calendar },
        { title: "View Health Records", href: "/profile", icon: Heart },
        { title: "Make Payment", href: "/payments", icon: CreditCard },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {actions.map((action) => {
                    const Icon = action.icon
                    return (
                        <Button
                            key={action.title}
                            asChild
                            variant="outline"
                            className="w-full justify-start"
                        >
                            <Link href={action.href}>
                                <Icon className="w-4 h-4 mr-2" />
                                {action.title}
                            </Link>
                        </Button>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export function RecentBookings() {
    const bookings = [
        {
            id: 1,
            facility: "Ogbomoso General Hospital",
            type: "Prenatal Checkup",
            date: "Dec 15, 2024",
            time: "10:00 AM",
            status: "confirmed"
        },
        {
            id: 2,
            facility: "City Lab Services",
            type: "Blood Test",
            date: "Dec 20, 2024",
            time: "2:00 PM",
            status: "pending"
        }
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="p-3 border rounded-lg">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium text-gray-900">{booking.facility}</p>
                                    <p className="text-sm text-gray-600">{booking.type}</p>
                                    <p className="text-xs text-gray-500">{booking.date} at {booking.time}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full ${booking.status === 'confirmed'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {booking.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/bookings">View All Bookings</Link>
                </Button>
            </CardContent>
        </Card>
    )
}
