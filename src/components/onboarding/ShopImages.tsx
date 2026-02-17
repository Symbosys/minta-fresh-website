
'use client';

import { useState, useEffect, useRef } from 'react';
import { updateVendorProfile } from '@/action/vendor';
import Image from 'next/image';

export default function ShopImages({ onNext, initialData }: any) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (initialData?.images) {
            // initialData.images could be a string (JSON) or object depending on how it's returned
            // based on controller it seems it returns the raw DB value which handles parsing?
            // Actually getVendorById uses prisma findUnique. Prisma returns Json type as object usually.
            const imgData = initialData.images;
            if (typeof imgData === 'object' && imgData?.url) {
                setImagePreview(imgData.url);
            } else if (typeof imgData === 'string') {
                try {
                    const parsed = JSON.parse(imgData);
                    if (parsed?.url) setImagePreview(parsed.url);
                } catch (e) {
                    console.error("Error parsing image data", e);
                }
            }
        }
    }, [initialData]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate type and size (consistent with backend: < 5MB, image/*)
            if (!file.type.startsWith('image/')) {
                setError('Please select a valid image file.');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                setError('File size exceeds 5MB limit.');
                return;
            }

            setError(null);
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!selectedFile && !imagePreview) {
            setError('Please select an image first.');
            return;
        }

        // If no new file selected but we have preview (existing image), just proceed
        if (!selectedFile && imagePreview) {
            onNext({});
            return;
        }

        if (!selectedFile) return;

        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            // Backend Controller handles status update to PRODUCT_SELECTION_NOT_DONE 
            // if current status is SHOP_IMAGES_NOT_UPLOADED

            const res = await updateVendorProfile(formData);

            if (res.success) {
                onNext({});
            } else {
                setError(res.message || 'Failed to upload image.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto py-6">
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
                {imagePreview ? "Upload Your Shop's Main Photo" : "Showcase Your Shop"}
            </h1>
            <p className="text-gray-500 mb-8">
                {imagePreview
                    ? "Use a high-quality photo of your storefront or a signature dish."
                    : "Upload a photo that represents your business."}
            </p>

            {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                    <i className="ri-error-warning-fill"></i>
                    <p className="text-sm">{error}</p>
                </div>
            )}

            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />

            {imagePreview ? (
                // Filled State
                <div className="mb-8">
                    <div className="relative w-full h-64 bg-gray-100 rounded-2xl overflow-hidden mb-4 border border-gray-200 shadow-sm group">
                        <Image
                            src={imagePreview}
                            alt="Shop Preview"
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={() => {
                                setImagePreview(null);
                                setSelectedFile(null);
                                if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                            className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                        >
                            <i className="ri-close-line font-bold"></i>
                        </button>
                    </div>

                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full bg-blue-50 hover:bg-blue-100 text-minta-primary font-bold py-4 rounded-xl transition-colors"
                    >
                        Change Image
                    </button>
                </div>
            ) : (
                // Empty State
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex flex-col items-center justify-center py-12 px-6 mb-8 group"
                >
                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <i className="ri-camera-fill text-3xl text-minta-primary"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Upload a high-quality photo</h3>
                    <p className="text-gray-500 text-sm mb-6">Tap here to select an image</p>
                    <div className="bg-blue-100 text-minta-primary px-8 py-2.5 rounded-lg font-bold text-sm">
                        Upload Image
                    </div>
                </div>
            )}

            {/* Guidelines */}
            {!imagePreview && (
                <div className="mt-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Photo Guidelines</h4>

                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <i className="ri-sun-fill text-minta-primary text-lg"></i>
                            </div>
                            <span className="text-gray-700 font-medium">Use bright, natural lighting.</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <i className="ri-camera-lens-fill text-minta-primary text-lg"></i>
                            </div>
                            <span className="text-gray-700 font-medium">Ensure the image is clear and not blurry.</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <i className="ri-store-3-fill text-minta-primary text-lg"></i>
                            </div>
                            <span className="text-gray-700 font-medium">Showcase your storefront.</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                    onClick={handleUpload}
                    disabled={loading || (!imagePreview && !selectedFile)}
                    className="w-full bg-minta-primary hover:bg-[#6d14a0] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <i className="ri-loader-4-line animate-spin text-xl"></i>
                            <span>Uploading...</span>
                        </>
                    ) : (
                        <span>{imagePreview && !selectedFile ? "Next" : "Save Shop Image"}</span>
                    )}
                </button>
            </div>
        </div>
    );
}
