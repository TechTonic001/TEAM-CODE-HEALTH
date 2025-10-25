'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@src/components/Header';
import {
  Heart,
  Shield,
  Clock,
  DollarSign,
  Users,
  Stethoscope,
  Smartphone,
  Building2,
  UserCheck,
  Calendar,
  CreditCard,
  BookOpen,
  BarChart3,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-amber-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                🩺 Maternal Health Companion Platform
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto px-4">
                Affordable, connected, and stress-free healthcare for every woman.
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Empowering mothers with accessible healthcare from Ogbomoso and beyond.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link
                href="/auth/signin"
                className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/docs"
                className="w-full sm:w-auto border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Learn More
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Transforming maternal healthcare through digital innovation and community support
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Digital Medical History",
                  description: "Keep comprehensive health records accessible anytime, anywhere"
                },
                {
                  icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Reduced Consultations",
                  description: "Minimize long hospital visits with efficient digital consultations"
                },
                {
                  icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Affordable Tests",
                  description: "Access medical tests at competitive prices without compromising quality"
                },
                {
                  icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Stress-Free Healthcare",
                  description: "Create a peaceful healthcare experience for mothers and families"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-pink-50 to-amber-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-pink-600 mb-4">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Connecting all stakeholders in maternal healthcare
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { title: "Pregnant Women", emoji: "🤱", color: "from-pink-100 to-pink-200" },
                { title: "Nursing Mothers", emoji: "👶", color: "from-amber-100 to-amber-200" },
                { title: "Adult Women (18-50)", emoji: "👩", color: "from-rose-100 to-rose-200" },
                { title: "Community Health Workers", emoji: "👩🏾‍⚕️", color: "from-purple-100 to-purple-200" },
                { title: "Hospitals & Clinics", emoji: "🏥", color: "from-blue-100 to-blue-200" }
              ].map((user, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`bg-gradient-to-br ${user.color} p-4 sm:p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">{user.emoji}</div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{user.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outlets Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Access Points</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Multiple ways to connect with healthcare services
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <Smartphone className="w-8 h-8 sm:w-12 sm:h-12" />,
                  title: "📱 Mobile App / Website",
                  description: "Access your health information and book appointments on any device"
                },
                {
                  icon: <Building2 className="w-8 h-8 sm:w-12 sm:h-12" />,
                  title: "🏥 Clinic Dashboard",
                  description: "Comprehensive management tools for healthcare facilities"
                },
                {
                  icon: <UserCheck className="w-8 h-8 sm:w-12 sm:h-12" />,
                  title: "👩🏾‍⚕️ Health Worker Portal",
                  description: "Specialized interface for community health workers"
                }
              ].map((outlet, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-pink-50 to-amber-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="text-pink-600 mb-4 sm:mb-6 flex justify-center">{outlet.icon}</div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{outlet.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{outlet.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Overview Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Platform Modules</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive tools for complete maternal healthcare management
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Profile Management",
                  description: "Secure personal and health information storage"
                },
                {
                  icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Health Information",
                  description: "Comprehensive medical records and history tracking"
                },
                {
                  icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Booking & Consultation",
                  description: "Easy appointment scheduling and virtual consultations"
                },
                {
                  icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Fees & Transactions",
                  description: "Transparent pricing and secure payment processing"
                },
                {
                  icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Health Education & Reminders",
                  description: "Personalized health tips and appointment reminders"
                },
                {
                  icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Data & Analytics",
                  description: "Insights and reports for better health decisions"
                }
              ].map((module, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-pink-600 mb-4">{module.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 sm:py-20 bg-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join thousands of women redefining healthcare
            </h2>
            <p className="text-lg sm:text-xl text-pink-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Be part of a community that prioritizes accessible, affordable, and compassionate maternal healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link
                href="/auth"
                className="w-full sm:w-auto bg-white text-pink-600 hover:bg-pink-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Sign Up Now
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Partner With Us
                <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">🩺 Maternal Health Companion Platform</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Affordable, connected, and stress-free healthcare for every woman.
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Empowering mothers with accessible healthcare from Ogbomoso and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Documentation</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Get in Touch</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Support</Link></li>
                <li><Link href="/feedback" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Feedback</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 Maternal Health Companion Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
