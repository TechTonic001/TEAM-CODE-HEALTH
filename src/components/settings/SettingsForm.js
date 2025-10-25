'use client';

import { useState } from "react"
import { Button } from "@src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card"
import { Bell, Shield, Globe, Palette } from "lucide-react"

export function SettingsForm() {
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
        appointmentReminders: true,
        healthTips: true
    })

    const [privacy, setPrivacy] = useState({
        profileVisibility: "private",
        dataSharing: false,
        analytics: true
    })

    const [preferences, setPreferences] = useState({
        language: "en",
        timezone: "Africa/Lagos",
        theme: "light"
    })

    const handleSave = () => {
        // TODO: Implement save functionality
        console.log("Settings saved:", { notifications, privacy, preferences })
    }

    return (
        <div className="space-y-6">
            {/* Notifications Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-blue-600" />
                        Notifications
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Email Notifications</p>
                                <p className="text-sm text-gray-600">Receive updates via email</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notifications.email}
                                onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
                                className="rounded"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">SMS Notifications</p>
                                <p className="text-sm text-gray-600">Receive updates via SMS</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notifications.sms}
                                onChange={(e) => setNotifications(prev => ({ ...prev, sms: e.target.checked }))}
                                className="rounded"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Push Notifications</p>
                                <p className="text-sm text-gray-600">Receive browser notifications</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notifications.push}
                                onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
                                className="rounded"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Appointment Reminders</p>
                                <p className="text-sm text-gray-600">Get reminded about upcoming appointments</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notifications.appointmentReminders}
                                onChange={(e) => setNotifications(prev => ({ ...prev, appointmentReminders: e.target.checked }))}
                                className="rounded"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Health Tips</p>
                                <p className="text-sm text-gray-600">Receive maternal health tips and advice</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notifications.healthTips}
                                onChange={(e) => setNotifications(prev => ({ ...prev, healthTips: e.target.checked }))}
                                className="rounded"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Privacy & Security
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Profile Visibility</p>
                                <p className="text-sm text-gray-600">Control who can see your profile</p>
                            </div>
                            <select
                                value={privacy.profileVisibility}
                                onChange={(e) => setPrivacy(prev => ({ ...prev, profileVisibility: e.target.value }))}
                                className="rounded border border-gray-300 px-3 py-1"
                            >
                                <option value="private">Private</option>
                                <option value="healthcare">Healthcare Providers Only</option>
                                <option value="public">Public</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Data Sharing</p>
                                <p className="text-sm text-gray-600">Allow sharing data for research (anonymized)</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={privacy.dataSharing}
                                onChange={(e) => setPrivacy(prev => ({ ...prev, dataSharing: e.target.checked }))}
                                className="rounded"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Analytics</p>
                                <p className="text-sm text-gray-600">Help improve the app with usage analytics</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={privacy.analytics}
                                onChange={(e) => setPrivacy(prev => ({ ...prev, analytics: e.target.checked }))}
                                className="rounded"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Palette className="w-5 h-5 text-purple-600" />
                        Preferences
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Language</p>
                                <p className="text-sm text-gray-600">Choose your preferred language</p>
                            </div>
                            <select
                                value={preferences.language}
                                onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                                className="rounded border border-gray-300 px-3 py-1"
                            >
                                <option value="en">English</option>
                                <option value="yo">Yoruba</option>
                                <option value="ig">Igbo</option>
                                <option value="ha">Hausa</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Timezone</p>
                                <p className="text-sm text-gray-600">Your local timezone</p>
                            </div>
                            <select
                                value={preferences.timezone}
                                onChange={(e) => setPreferences(prev => ({ ...prev, timezone: e.target.value }))}
                                className="rounded border border-gray-300 px-3 py-1"
                            >
                                <option value="Africa/Lagos">Lagos (WAT)</option>
                                <option value="Africa/Abuja">Abuja (WAT)</option>
                                <option value="Africa/Kano">Kano (WAT)</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Theme</p>
                                <p className="text-sm text-gray-600">Choose your preferred theme</p>
                            </div>
                            <select
                                value={preferences.theme}
                                onChange={(e) => setPreferences(prev => ({ ...prev, theme: e.target.value }))}
                                className="rounded border border-gray-300 px-3 py-1"
                            >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button onClick={handleSave} className="bg-pink-600 hover:bg-pink-700">
                    Save Settings
                </Button>
            </div>
        </div>
    )
}
