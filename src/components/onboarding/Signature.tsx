'use client';

import { useState, useRef, useEffect } from 'react';
import { updateVendorProfile } from '@/action/vendor';
import Image from 'next/image';
import SignatureCanvas from 'react-signature-canvas';

interface SignatureProps {
    onNext: (data: any) => void;
    initialData?: any;
}

export default function Signature({ onNext, initialData }: SignatureProps) {
    const [existingSignature, setExistingSignature] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const sigCanvas = useRef<SignatureCanvas>(null);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        if (initialData?.signature) {
            const sigData = initialData.signature;
            // Handle if it's a string (JSON) or object
            if (typeof sigData === 'object' && sigData?.url) {
                setExistingSignature(sigData.url);
            } else if (typeof sigData === 'string') {
                try {
                    const parsed = JSON.parse(sigData);
                    if (parsed?.url) setExistingSignature(parsed.url);
                } catch (e) {
                    console.error("Error parsing signature data", e);
                }
            }
        }
    }, [initialData]);

    const clear = () => {
        sigCanvas.current?.clear();
        setIsEmpty(true);
    };

    const handleEnd = () => {
        setIsEmpty(sigCanvas.current?.isEmpty() ?? true);
    };

    const dataURLtoFile = (dataurl: string, filename: string) => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)?.[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };

    const handleSave = async () => {
        if (isEmpty) {
            setError('Please sign before saving.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const dataURL = sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png');
            if (!dataURL) {
                throw new Error("Failed to get signature image");
            }

            const file = dataURLtoFile(dataURL, 'signature.png');
            const formData = new FormData();
            formData.append('signature', file);
            formData.append('status', 'PENDING');

            const res = await updateVendorProfile(formData);

            if (res.success) {
                onNext({});
            } else {
                setError(res.message || 'Failed to upload signature.');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (existingSignature) {
        return (
            <div className="max-w-xl mx-auto py-6 animate-fade-in">
                <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Signature Verified</h1>
                <p className="text-gray-500 mb-8">
                    Your signature has been uploaded and verified.
                </p>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center mb-8">
                    <div className="relative w-full h-48">
                        <Image
                            src={existingSignature}
                            alt="Existing Signature"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl mb-8 flex gap-3 items-center border border-blue-100">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                    <p className="text-sm text-gray-700 font-medium">
                        This signature is on file for your account.
                    </p>
                </div>

                <button
                    onClick={() => onNext({})}
                    className="w-full bg-minta-primary hover:bg-[#6d14a0] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    <span>Continue</span>
                    <i className="ri-arrow-right-line text-lg"></i>
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto py-6 animate-fade-in">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Digital Signature</h1>
            <p className="text-gray-500 mb-8">
                Please sign below inside the box to verify your business.
            </p>

            {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                    <i className="ri-error-warning-fill"></i>
                    <p className="text-sm">{error}</p>
                </div>
            )}

            <div className="border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden bg-white mb-6 shadow-sm relative group">
                <SignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{
                        className: 'w-full h-64 cursor-crosshair bg-white',
                    }}
                    onEnd={handleEnd}

                />

                {isEmpty && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-gray-300 opacity-50">
                        <span className="text-4xl font-handwriting select-none">Sign Here</span>
                    </div>
                )}
            </div>

            <div className="flex gap-4 mb-8">
                <button
                    onClick={clear}
                    disabled={isEmpty || loading}
                    className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Clear
                </button>
                <button
                    onClick={handleSave}
                    disabled={isEmpty || loading}
                    className="flex-2 bg-minta-primary text-white font-bold py-3 rounded-xl hover:bg-[#6d14a0] transition-colors shadow-md hover:shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <i className="ri-loader-4-line animate-spin"></i>
                            <span>Saving...</span>
                        </>
                    ) : (
                        <>
                            <span>Submit Signature</span>
                            <i className="ri-check-double-line"></i>
                        </>
                    )}
                </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start border border-blue-100">
                <i className="ri-information-fill text-minta-primary mt-0.5 text-lg"></i>
                <div className="text-sm text-gray-700">
                    <p className="font-bold mb-1">Important:</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>Use your mouse or finger to sign in the box above.</li>
                        <li>Ensure your signature matches official documents.</li>
                    </ul>
                </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                By submitting, you agree to our Terms & Conditions.
            </p>
        </div>
    );
}
