'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getVendorProfile } from '@/action/vendor';
import Image from 'next/image';

export default function PartnerStatusPage() {
    const router = useRouter();
    const [status, setStatus] = useState<string | null>(null);
    const [reason, setReason] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await getVendorProfile();
                if (res.success && res.data) {
                    const vendor = res.data;
                    setStatus(vendor.status);

                    // Assign reason based on status priority
                    if (vendor.rejectionReason) {
                        setReason(vendor.rejectionReason);
                    } else if (vendor.blockedReason) {
                        setReason(vendor.blockedReason);
                    } else if (vendor.reason) { // Fallback
                        setReason(vendor.reason);
                    }

                    // If not in a terminal state, redirect back to onboarding
                    const terminalStatuses = ['PENDING', 'APPROVED', 'REJECTED', 'BLOCKED'];
                    if (!terminalStatuses.includes(vendor.status)) {
                        router.push('/partner/onboarding');
                    }
                } else {
                    router.push('/partner');
                }
            } catch (error) {
                console.error("Failed to fetch status", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <i className="ri-loader-4-line text-4xl animate-spin text-minta-primary"></i>
                    <p className="text-gray-500 font-medium">Checking application status...</p>
                </div>
            </div>
        );
    }

    const renderContent = () => {
        switch (status) {
            case 'PENDING':
                return (
                    <div className="text-center max-w-md">
                        <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="ri-time-line text-5xl text-yellow-500"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">Application Under Review</h1>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Thank you for completing your registration! Our team is currently reviewing your details.
                            You will be notified once your account is approved.
                        </p>
                        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-left">
                            <div className="flex gap-3">
                                <i className="ri-information-fill text-yellow-600 mt-0.5"></i>
                                <div>
                                    <p className="font-bold text-yellow-800 text-sm mb-1">What happens next?</p>
                                    <p className="text-xs text-yellow-700">
                                        We verify your documents and shop details within 24-48 hours. check back later.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'APPROVED':
                return (
                    <div className="text-center max-w-md">
                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-short">
                            <i className="ri-checkbox-circle-fill text-5xl text-green-500"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">Welcome to Minta Fresh!</h1>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Congratulations! Your shop has been approved. You can now start managing your inventory and accepting orders.
                        </p>

                        <div className="bg-gradient-to-br from-minta-primary to-[#6d14a0] rounded-2xl p-6 text-white shadow-lg mb-8 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-2">Download Partner App</h3>
                                <p className="text-sm opacity-90 mb-4">Manage orders, update menu, and track earnings on the go.</p>
                                <a href="#" className="bg-white text-minta-primary font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-50 transition-colors inline-flex items-center gap-2 mx-auto">
                                    <i className="ri-google-play-fill text-xl"></i>
                                    <span>Get on Play Store</span>
                                </a>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-x-5 translate-y-5"></div>
                        </div>
                    </div>
                );

            case 'REJECTED':
                return (
                    <div className="text-center max-w-md">
                        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="ri-close-circle-fill text-5xl text-red-500"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">Application Rejected</h1>
                        <p className="text-gray-600 mb-6">
                            Unfortunately, your application could not be approved at this time.
                        </p>

                        {reason && (
                            <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8 text-left">
                                <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Reason for Rejection</p>
                                <p className="text-sm text-gray-800 font-medium">{reason}</p>
                            </div>
                        )}

                        <button
                            onClick={() => router.push('/partner/onboarding')}
                            className="text-minta-primary font-bold hover:underline"
                        >
                            Update your details and try again
                        </button>
                    </div>
                );

            case 'BLOCKED':
                return (
                    <div className="text-center max-w-md">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="ri-forbid-2-fill text-5xl text-gray-500"></i>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">Account Blocked</h1>
                        <p className="text-gray-600 mb-6">
                            Your vendor account has been suspended.
                        </p>

                        {reason && (
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8 text-left">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Reason for Suspension</p>
                                <p className="text-sm text-gray-800 font-medium">{reason}</p>
                            </div>
                        )}

                        <div className="text-sm text-gray-500">
                            Please contact support for more information.
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-gray-900">Checking Status...</h1>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Simple Header */}
            <header className="border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between bg-white sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    {/* Replace with Logo if available */}
                    <span className="text-2xl font-extrabold text-minta-primary tracking-tight">minta<span className="text-green-500">fresh</span></span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded ml-2 font-medium">Partner</span>
                </div>
                <button
                    onClick={() => router.push('/partner')}
                    className="text-sm font-semibold text-gray-500 hover:text-gray-900"
                >
                    Log Out
                </button>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-6 animate-fade-in">
                {renderContent()}
            </main>

            <footer className="py-6 text-center text-xs text-gray-400 border-t border-gray-50">
                &copy; {new Date().getFullYear()} Minta Fresh. All rights reserved.
            </footer>
        </div>
    );
}
