'use client';

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card"
import { Button } from "@src/components/ui/button"
import { CreditCard, Calendar, CheckCircle, XCircle, Clock, Receipt } from "lucide-react"

export function PaymentsList() {
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchTransactions()
    }, [])

    const fetchTransactions = async () => {
        try {
            const response = await fetch('/api/payments')
            if (response.ok) {
                const data = await response.json()
                setTransactions(data.transactions || [])
            }
        } catch (error) {
            console.error('Error fetching transactions:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-green-600" />
            case 'failed':
                return <XCircle className="w-5 h-5 text-red-600" />
            case 'pending':
                return <Clock className="w-5 h-5 text-yellow-600" />
            default:
                return <Clock className="w-5 h-5 text-gray-600" />
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800'
            case 'failed':
                return 'bg-red-100 text-red-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'refunded':
                return 'bg-blue-100 text-blue-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const formatCurrency = (amount, currency = 'NGN') => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: currency,
        }).format(amount)
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
            </div>
        )
    }

    if (transactions.length === 0) {
        return (
            <Card>
                <CardContent className="text-center py-12">
                    <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No transactions yet</h3>
                    <p className="text-gray-600 mb-4">You haven't made any payments yet.</p>
                    <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white">
                        <a href="/bookings/new">Book an Appointment</a>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="space-y-4">
            {transactions.map((transaction) => (
                <Card key={transaction.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-pink-100 rounded-lg">
                                    {getStatusIcon(transaction.status)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {transaction.description}
                                    </h3>
                                    <p className="text-sm text-gray-600 capitalize">
                                        {transaction.paymentMethod.replace('_', ' ')}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-gray-900">
                                    {formatCurrency(transaction.amount, transaction.currency)}
                                </p>
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(transaction.status)}`}>
                                    {transaction.status}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(transaction.createdAt)}</span>
                        </div>

                        {transaction.booking && (
                            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Related Booking:</span> {transaction.booking.facilityName}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {transaction.booking.serviceType} • {formatDate(transaction.booking.appointmentDate)}
                                </p>
                            </div>
                        )}

                        <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                                <Receipt className="w-4 h-4 mr-2" />
                                View Receipt
                            </Button>
                            {transaction.status === 'failed' && (
                                <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                                    Retry Payment
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
