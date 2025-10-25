import Link from 'next/link'

export default function Page() {
    return (
        <main className="container mx-auto px-6 py-12">
            <header className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Maternal Health Companion Platform</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">Affordable, connected, and stress-free healthcare for every woman.</p>
                <p className="text-sm text-gray-600 mb-6">Helping pregnant women and nursing mothers in Ogbomoso access healthcare effortlessly — digital medical history, easy bookings, affordable tests, and timely reminders.</p>
                <div className="flex gap-3 justify-center">
                    <Link href="/api/auth/signin" className="btn-primary px-4 py-2 rounded bg-blue-600 text-white">Get Started</Link>
                    <Link href="#modules" className="px-4 py-2 rounded border">Learn More</Link>
                </div>
            </header>

            <nav className="mt-8 mb-12">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link href="/dashboard" className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link href="/bookings" className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="font-medium">Bookings</span>
                    </Link>
                    <Link href="/payments" className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="font-medium">Payments</span>
                    </Link>
                    <Link href="/profile" className="flex items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="font-medium">Profile</span>
                    </Link>
                </div>
            </nav>

            <section id="quick" className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <div className="p-6 border rounded">
                    <h3 className="font-semibold mb-2">Purpose</h3>
                    <p className="text-sm text-gray-700">Keep digital medical histories, reduce long clinic waits, provide affordable tests, and create a stress-free healthcare lifestyle.</p>
                </div>
                <div className="p-6 border rounded">
                    <h3 className="font-semibold mb-2">Target Users</h3>
                    <ul className="text-sm text-gray-700">
                        <li>Pregnant women & nursing mothers</li>
                        <li>Community health workers</li>
                        <li>Hospitals, labs & pharmacies</li>
                    </ul>
                </div>
                <div className="p-6 border rounded">
                    <h3 className="font-semibold mb-2">Outlets</h3>
                    <ul className="text-sm text-gray-700">
                        <li>Mobile & web app</li>
                        <li>Clinic Dashboard</li>
                        <li>Health Worker Portal (offline-first)</li>
                    </ul>
                </div>
            </section>

            <section id="modules" className="mt-14 max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Modules</h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <article className="p-4 border rounded">
                        <h4 className="font-semibold">Profile</h4>
                        <p className="text-sm text-gray-700">Stores personal details, contact, next-of-kin, DOB, and profile photo.</p>
                    </article>

                    <article className="p-4 border rounded">
                        <h4 className="font-semibold">Health Information</h4>
                        <p className="text-sm text-gray-700">Blood group, genotype, LMP, conditions, allergies, past pregnancies, meds, and emergency notes.</p>
                    </article>

                    <article className="p-4 border rounded">
                        <h4 className="font-semibold">Booking & Consultation</h4>
                        <p className="text-sm text-gray-700">Book visits, track status, assigned clinician, and notes.</p>
                    </article>

                    <article className="p-4 border rounded">
                        <h4 className="font-semibold">Fee & Transaction</h4>
                        <p className="text-sm text-gray-700">Transparent fees, transaction records, receipt download, optional health wallet.</p>
                    </article>

                    <article className="p-4 border rounded">
                        <h4 className="font-semibold">Health Education & Reminders</h4>
                        <p className="text-sm text-gray-700">Appointment and medication reminders, Q&A support and educational content.</p>
                    </article>

                    <article className="p-4 border rounded">
                        <h4 className="font-semibold">Data & Analytics (Admin)</h4>
                        <p className="text-sm text-gray-700">Active users, common issues, booking and payment trends, regional insights.</p>
                    </article>
                </div>
            </section>

            <footer className="mt-16 text-center text-sm text-gray-600">
                <p>Made for Ogbomoso communities — affordable, connected, stress-free healthcare.</p>
            </footer>
        </main>
    )
}
