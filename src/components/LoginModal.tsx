'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendOtp, verifyOtp } from '../action/vendor';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const router = useRouter();
    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']); // 4 digits as per API
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await sendOtp(phone);
            if (res.success) {
                setStep('otp');
            } else {
                setError(res.message || 'Failed to send OTP');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const otpValue = otp.join('');
        try {
            const res = await verifyOtp(phone, otpValue);
            if (res.success) {
                onClose();
                router.push('/partner/onboarding');
            } else {
                setError(res.message || 'Invalid OTP');
            }
        } catch (err) {
            setError('Verification failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value !== '' && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        // Handle backspace to focus previous input
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <i className="ri-close-line text-2xl"></i>
                </button>

                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {step === 'phone' ? 'Get started with Minta Fresh' : 'Verify your phone number'}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {step === 'phone'
                                ? 'Enter your mobile number to create an account or log in'
                                : `Enter the 4-digit code sent to +91 ${phone}`
                            }
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    {step === 'phone' ? (
                        <form onSubmit={handleSendOtp} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500">+91</span>
                                    </div>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '');
                                            if (val.length <= 10) setPhone(val);
                                        }}
                                        className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary transition-colors text-gray-900"
                                        placeholder="Enter 10 digit number"
                                        required
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || phone.length !== 10}
                                className="w-full bg-minta-primary hover:bg-[#6d14a0] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <i className="ri-loader-4-line animate-spin text-xl"></i>
                                        Sending...
                                    </>
                                ) : (
                                    'Continue'
                                )}
                            </button>

                            <p className="text-xs text-center text-gray-500">
                                By clicking continue, you agree to our <a href="#" className="text-minta-primary hover:underline">Terms of Service</a> & <a href="#" className="text-minta-primary hover:underline">Privacy Policy</a>
                            </p>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp} className="space-y-6">
                            <div className="flex justify-center gap-4">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-14 h-14 text-center text-2xl font-bold border border-gray-300 rounded-xl focus:ring-2 focus:ring-minta-primary focus:border-minta-primary transition-all text-gray-900"
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <button
                                    type="button"
                                    onClick={() => setStep('phone')}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Change Number
                                </button>
                                <button
                                    type="button"
                                    className="text-minta-primary hover:underline font-medium"
                                    onClick={handleSendOtp}
                                >
                                    Resend OTP
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || otp.join('').length !== 4}
                                className="w-full bg-minta-primary hover:bg-[#6d14a0] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <i className="ri-loader-4-line animate-spin text-xl"></i>
                                        Verifying...
                                    </>
                                ) : (
                                    'Verify & Login'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
