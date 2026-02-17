import { useState, useEffect } from 'react';
import { createVendorBankAccount, getVendorBankAccounts } from '@/action/bank-account';

interface BankAccountProps {
    onNext: (data: any) => void;
}

interface BankAccountData {
    id: string;
    accountHolder: string;
    bankName: string;
    accountNumber: string;
    ifsc: string;
    branch?: string;
    isVerified: boolean;
    status: string;
}

export default function BankAccount({ onNext }: BankAccountProps) {
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [accounts, setAccounts] = useState<BankAccountData[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedaccountId, setSelectedAccountId] = useState<string | null>(null);

    const [form, setForm] = useState({
        accountHolder: '',
        bankName: '',
        accountNumber: '',
        confirmAccountNumber: '',
        ifsc: '',
        branch: '',
    });

    useEffect(() => {
        const loadAccounts = async () => {
            try {
                const res = await getVendorBankAccounts();
                if (res.success && Array.isArray(res.data)) {
                    setAccounts(res.data);
                    // If accounts exist, don't show form by default
                    if (res.data.length === 0) {
                        setShowForm(true);
                    }
                } else {
                    setShowForm(true);
                }
            } catch (err) {
                console.error(err);
                setShowForm(true);
            } finally {
                setFetching(false);
            }
        };
        loadAccounts();
    }, []);

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleContinue = () => {
        if (selectedaccountId) {
            onNext({ bankAccountId: selectedaccountId });
        } else {
            alert("Please select a bank account to continue.");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic Validation
        if (!form.accountHolder || !form.bankName || !form.accountNumber || !form.ifsc) {
            alert("Please fill all mandatory fields");
            return;
        }

        if (form.accountNumber !== form.confirmAccountNumber) {
            alert("Account numbers do not match");
            return;
        }

        try {
            setLoading(true);
            const res = await createVendorBankAccount({
                accountHolder: form.accountHolder,
                bankName: form.bankName,
                accountNumber: form.accountNumber,
                ifsc: form.ifsc,
                branch: form.branch,
            });

            if (res.success) {
                // Refresh list or just proceed?
                // Proceed directly as per requirement "if no bank account then can add one" -> usually implies flow completion
                onNext({});
            } else {
                alert(res.message || "Failed to add bank account");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex justify-center items-center h-64">
                <i className="ri-loader-4-line animate-spin text-3xl text-minta-primary"></i>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Bank Details</h2>
                <p className="text-sm text-gray-500">Select an existing account or add a new one for payouts.</p>
            </div>

            {accounts.length > 0 && !showForm && (
                <div className="space-y-4 mb-8">
                    {accounts.map(acc => (
                        <div
                            key={acc.id}
                            onClick={() => setSelectedAccountId(acc.id)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedaccountId === acc.id ? 'border-minta-primary bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-gray-900">{acc.bankName}</h3>
                                    <p className="text-sm text-gray-600">{acc.accountHolder}</p>
                                    <p className="text-sm text-gray-500 mt-1 font-mono">**** {acc.accountNumber.slice(-4)}</p>
                                </div>
                                {selectedaccountId === acc.id && (
                                    <div className="w-6 h-6 bg-minta-primary rounded-full flex items-center justify-center">
                                        <i className="ri-check-line text-white text-sm"></i>
                                    </div>
                                )}
                            </div>
                            <div className="mt-3 flex gap-2">
                                <span className={`text-xs px-2 py-0.5 rounded font-medium ${acc.isVerified ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {acc.isVerified ? 'Verified' : acc.status}
                                </span>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={handleContinue}
                        disabled={!selectedaccountId}
                        className="w-full bg-minta-primary text-white font-bold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition"
                    >
                        Continue with Selected
                    </button>

                    {/* Add new account option removed as per requirement: if accounts exist, user must select one */}
                </div>
            )}

            {(showForm || accounts.length === 0) && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                    {accounts.length > 0 && (
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="text-sm text-gray-500 hover:text-gray-800 mb-4 flex items-center gap-1"
                        >
                            <i className="ri-arrow-left-line"></i> Back to saved accounts
                        </button>
                    )}

                    {/* Account Holder Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Account Holder Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ex. John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-minta-primary focus:ring-1 focus:ring-minta-primary outline-none transition-all placeholder:text-gray-400"
                            value={form.accountHolder}
                            onChange={(e) => handleChange('accountHolder', e.target.value)}
                        />
                    </div>

                    {/* Bank Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Bank Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ex. HDFC Bank"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-minta-primary focus:ring-1 focus:ring-minta-primary outline-none transition-all placeholder:text-gray-400"
                            value={form.bankName}
                            onChange={(e) => handleChange('bankName', e.target.value)}
                        />
                    </div>

                    {/* Account Number */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Account Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Account Number"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-minta-primary focus:ring-1 focus:ring-minta-primary outline-none transition-all placeholder:text-gray-400"
                            value={form.accountNumber}
                            onChange={(e) => handleChange('accountNumber', e.target.value)}
                            inputMode="numeric"
                        />
                    </div>

                    {/* Confirm Account Number */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Confirm Account Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Re-enter Account Number"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-minta-primary focus:ring-1 focus:ring-minta-primary outline-none transition-all placeholder:text-gray-400"
                            value={form.confirmAccountNumber}
                            onChange={(e) => handleChange('confirmAccountNumber', e.target.value)}
                            inputMode="numeric"
                        />
                    </div>

                    {/* IFSC Code */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            IFSC Code <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Ex. HDFC0001234"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-minta-primary focus:ring-1 focus:ring-minta-primary outline-none transition-all placeholder:text-gray-400 uppercase"
                            value={form.ifsc}
                            onChange={(e) => handleChange('ifsc', e.target.value.toUpperCase())}
                        />
                    </div>

                    {/* Branch (Optional) */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Branch (Optional)
                        </label>
                        <input
                            type="text"
                            placeholder="Ex. Indiranagar"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-minta-primary focus:ring-1 focus:ring-minta-primary outline-none transition-all placeholder:text-gray-400"
                            value={form.branch}
                            onChange={(e) => handleChange('branch', e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-minta-primary hover:bg-[#6d14a0] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-transform active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <i className="ri-loader-4-line animate-spin text-xl"></i>
                                    <span>Saving Details...</span>
                                </>
                            ) : (
                                <>
                                    <span>Save Bank Details</span>
                                    <i className="ri-arrow-right-line text-lg"></i>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
