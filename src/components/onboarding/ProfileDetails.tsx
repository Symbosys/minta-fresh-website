'use client';

import { useState, useEffect } from 'react';
import { updateVendorProfile } from '@/action/vendor';

export default function ProfileDetails({ onNext, initialData }: any) {
    const [formData, setFormData] = useState({
        ownerName: initialData?.ownerName || '',
        companyName: initialData?.companyName || '',
        email: initialData?.email || '',
        phone: initialData?.mobile || initialData?.phone || '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Update local state when initialData changes (e.g. after fetch)
    useEffect(() => {
        if (initialData) {
            setFormData({
                ownerName: initialData.ownerName || '',
                companyName: initialData.companyName || '',
                email: initialData.email || '',
                phone: initialData.mobile || initialData.phone || '',
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const dataToSubmit = new FormData();
            dataToSubmit.append('ownerName', formData.ownerName);
            dataToSubmit.append('companyName', formData.companyName);
            dataToSubmit.append('email', formData.email);
            // Phone is likely read-only or handled separately, but sending it just in case if allowed to partial update

            const res = await updateVendorProfile(dataToSubmit);

            if (res.success) {
                onNext(formData);
            } else {
                setError(res.message || 'Failed to update profile');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl">
            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                    {error}
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Owner details</h3>
                <p className="text-sm text-gray-500 mb-6">Minta Fresh will use these details for all business communications and updates</p>

                <div className="space-y-6">
                    {/* Owner Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name *</label>
                        <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            placeholder="Enter owner name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 bg-gray-50/50"
                            required
                        />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Enter company name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 bg-gray-50/50"
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-minta-primary focus:border-minta-primary text-gray-900 bg-gray-50/50"
                            required
                        />
                    </div>

                    {/* Phone Number (Read-only) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none bg-gray-50 border-r rounded-l-lg pr-2 border-gray-300">
                                <img src="https://flagcdn.com/w20/in.png" width="20" alt="India" className="mr-2" />
                                <span className="text-gray-500 font-medium">+91</span>
                            </div>
                            <input
                                type="text"
                                value={formData.phone}
                                readOnly
                                className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed font-medium"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-xs font-semibold text-green-700 border border-green-200">
                                <i className="ri-checkbox-circle-fill"></i> Verified
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6 border-t">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-minta-primary hover:bg-[#6d14a0] text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                    {loading && <i className="ri-loader-4-line animate-spin"></i>}
                    {loading ? 'Saving...' : 'Next'}
                </button>
            </div>
        </form>
    );
}
