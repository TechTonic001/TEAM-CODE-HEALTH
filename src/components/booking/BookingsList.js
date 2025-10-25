'use client';

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card"
import { Button } from "@src/components/ui/button"
import { Calendar, Clock, MapPin, Stethoscope, Eye, Edit } from "lucide-react"

export function BookingsList() {
    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchBookings()
    }, [])

    const fetchBookings = async () => {
        try {
            const response = await fetch('/api/bookings')
            if (response.ok) {
                const data = await response.json()
                setBookings(data.bookings || [])
            }
        } catch (error) {
            console.error('Error fetching bookings:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed':
                return 'bg-green-100 text-green-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'completed':
                return 'bg-blue-100 text-blue-800'
            case 'cancelled':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
            </div>
        )
    }

    if (bookings.length === 0) {
        return (
            <Card>
                <CardContent className="text-center py-12">
                    <Stethoscope className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments booked</h3>
                    <p className="text-gray-600 mb-4">You haven't booked any appointments yet.</p>
                    <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white">
                        <a href="/bookings/new">Book Your First Appointment</a>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="space-y-4">
            {bookings.map((booking) => (
                <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-pink-100 rounded-lg">
                                    <Stethoscope className="w-5 h-5 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {booking.facilityName}
                                    </h3>
                                    <p className="text-sm text-gray-600 capitalize">
                                        {booking.serviceType} • {booking.facilityType}
                                    </p>
                                </div>
                            </div>
                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(booking.status)}`}>
                                {booking.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(booking.appointmentDate)}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>{booking.appointmentTime}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span className="capitalize">{booking.appointmentType}</span>
                            </div>
                        </div>

                        {booking.doctorName && (
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Doctor:</span> {booking.doctorName}
                                </p>
                            </div>
                        )}

                        {booking.address && (
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Address:</span> {booking.address}
                                    {booking.city && `, ${booking.city}`}
                                    {booking.state && `, ${booking.state}`}
                                </p>
                            </div>
                        )}

                        {booking.notes && (
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Notes:</span> {booking.notes}
                                </p>
                            </div>
                        )}

                        <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                            </Button>
                            {booking.status === 'pending' && (
                                <Button variant="outline" size="sm">
                                    <Edit className="w-4 h-4 mr-2" />
                                    Modify
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
