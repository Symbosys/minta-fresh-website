'use client';

import { useState, useEffect } from 'react';
import { updateVendorProfile, verifyVendorDocument } from '@/action/vendor';

type DocumentType = 'aadhaar' | 'pan' | 'fssai';

export default function DocumentVerification({ onNext, initialData }: any) {
    const [step, setStep] = useState<DocumentType>('aadhaar');
    const [docs, setDocs] = useState({
        aadhaar: '',
        pan: '',
        fssai: ''
    });

    const [verifiedStatus, setVerifiedStatus] = useState({
        aadhaar: false,
        pan: false,
        fssai: false
    });

    useEffect(() => {
        if (initialData) {
            // initialData could be an object or array depending on prisma include.
            // Based on controller, it seems to be an object (one-to-one or unique) or array of docs.
            // Let's handle both or check specific fields.
            // Common pattern with prisma include on 1:1 is object, on 1:N is array.
            // We'll safely access properties.

            const docData = Array.isArray(initialData) ? initialData[0] : initialData;

            if (docData) {
                setDocs({
                    aadhaar: docData.aadhaarNumber || '',
                    pan: docData.panNumber || '',
                    fssai: docData.fassaiNumber || docData.fssaiNumber || ''
                });
                setVerifiedStatus({
                    aadhaar: !!docData.isAadhaarVerified,
                    pan: !!docData.isPanVerified,
                    fssai: !!docData.isFassaiVerified
                });
            }
        }
    }, [initialData]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const documentConfig = {
        aadhaar: {
            title: 'Aadhaar Card',
            placeholder: '12-digit Aadhaar number',
            maxLength: 12,
            validate: (val: string) => /^\d{12}$/.test(val),
            errorMsg: 'Please enter a valid 12-digit Aadhaar number',
        },
        pan: {
            title: 'PAN Card',
            placeholder: '10-character PAN number',
            maxLength: 10,
            validate: (val: string) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(val.toUpperCase()),
            errorMsg: 'Please enter a valid PAN (e.g., ABCDE1234F)',
        },
        fssai: {
            title: 'FSSAI License',
            placeholder: '14-digit FSSAI number',
            maxLength: 14,
            validate: (val: string) => /^\d{14}$/.test(val),
            errorMsg: 'Please enter a valid 14-digit FSSAI number',
        },
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // If already verified, prevent editing? Or allow editing which resets verification?
        // User asked: "if docs already exists and is verified then show directly next button"
        // Usually verified docs shouldn't be edited easily. Let's disable input if verified.
        // But for this change, sticking to navigation logic first.

        let val = e.target.value;
        if (step === 'pan') {
            val = val.toUpperCase();
        }

        if ((step === 'aadhaar' || step === 'fssai') && !/^\d*$/.test(val)) {
            return;
        }

        setDocs({ ...docs, [step]: val });
    };

    const handleVerifyAndNext = async () => {
        setError(null);
        const currentVal = docs[step];
        const config = documentConfig[step];

        // If already verified, just move to next step
        if (verifiedStatus[step]) {
            if (step === 'aadhaar') {
                setStep('pan');
            } else if (step === 'pan') {
                setStep('fssai');
            } else if (step === 'fssai') {
                onNext(docs);
            }
            return;
        }

        if (!config.validate(currentVal)) {
            setError(config.errorMsg);
            return;
        }

        setLoading(true);
        try {
            // Prepare FormData for the specific step
            const formData = new FormData();
            if (step === 'aadhaar') {
                formData.append('aadhaarNumber', currentVal);
            } else if (step === 'pan') {
                formData.append('panNumber', currentVal);
            } else if (step === 'fssai') {
                formData.append('fassaiNumber', currentVal); // Ensure this key matches backend
            }

            // Call API for this specific step
            const res = await verifyVendorDocument(formData);

            if (res.success) {
                // Update verified status locally
                setVerifiedStatus(prev => ({ ...prev, [step]: true }));

                // Determine next action
                if (step === 'aadhaar') {
                    setStep('pan');
                } else if (step === 'pan') {
                    setStep('fssai');
                } else if (step === 'fssai') {
                    // All steps verified
                    onNext(docs);
                }
            } else {
                setError(res.message || `Failed to verify ${config.title}`);
            }
        } catch (err) {
            console.error("Verification error:", err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl">
            {/* Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
                {(['aadhaar', 'pan', 'fssai'] as DocumentType[]).map((s) => (
                    <button
                        key={s}
                        onClick={() => setStep(s)}
                        className={`flex-1 capitalize py-2 text-sm font-medium rounded-md transition-all ${step === s ? 'bg-white text-minta-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        {s.toUpperCase()}
                        {verifiedStatus[s] && <i className="ri-checkbox-circle-fill text-green-500 ml-1 align-bottom"></i>}
                    </button>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start gap-3">
                <i className="ri-information-fill text-blue-500 mt-0.5"></i>
                <p className="text-sm text-blue-800">
                    Verify your <strong>{documentConfig[step].title}</strong> details to proceed. This helps us ensure legal compliance.
                </p>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                    {error}
                </div>
            )}

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {documentConfig[step].title} *
                </label>
                <input
                    type="text"
                    value={docs[step]}
                    onChange={handleChange}
                    maxLength={documentConfig[step].maxLength}
                    placeholder={documentConfig[step].placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 uppercase tracking-widest placeholder:tracking-normal"
                />
            </div>

            <div className="flex justify-between items-center pt-6 border-t">
                {step !== 'aadhaar' ? (
                    <button
                        type="button"
                        onClick={() => {
                            if (step === 'pan') setStep('aadhaar');
                            else if (step === 'fssai') setStep('pan');
                        }}
                        className="text-gray-500 hover:text-gray-700 font-medium px-4 py-2"
                    >
                        Back
                    </button>
                ) : <div></div>}

                <button
                    type="button"
                    onClick={handleVerifyAndNext}
                    disabled={loading}
                    className="bg-minta-primary hover:bg-[#6d14a0] text-white font-medium px-8 py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                    {loading && <i className="ri-loader-4-line animate-spin"></i>}
                    {step === 'fssai' ? (loading ? 'Submitting...' : 'Submit Documents') : 'Verify & Next'}
                </button>
            </div>
        </div>
    );
}
