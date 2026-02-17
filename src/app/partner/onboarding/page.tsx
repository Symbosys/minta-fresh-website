'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProfileDetails from '@/components/onboarding/ProfileDetails';
import DocumentVerification from '@/components/onboarding/Documents';
import ShopDetails from '@/components/onboarding/ShopDetails';
import ShopImages from '@/components/onboarding/ShopImages';
import Inventory from '@/components/onboarding/Inventory';
import BankAccount from '@/components/onboarding/BankAccount';
import Signature from '@/components/onboarding/Signature';
import { getVendorProfile } from '@/action/vendor';

// Enum matches Schema
enum VendorStatus {
    NEW = 'NEW',
    PROFILE_COMPLETION_NOT_FILLED = 'PROFILE_COMPLETION_NOT_FILLED',
    DOCUMENTS_NOT_VERIFIED = 'DOCUMENTS_NOT_VERIFIED',
    SHOP_DETAILS_NOT_FILLED = 'SHOP_DETAILS_NOT_FILLED',
    SHOP_IMAGES_NOT_UPLOADED = 'SHOP_IMAGES_NOT_UPLOADED',
    PRODUCT_SELECTION_NOT_DONE = 'PRODUCT_SELECTION_NOT_DONE',
    BANK_ACCOUNT_NOT_ADDED = 'BANK_ACCOUNT_NOT_ADDED',
    SIGNATURE_NOT_UPLOADED = 'SIGNATURE_NOT_UPLOADED',
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
}

const steps = [
    {
        id: 'profile',
        label: 'Profile Details',
        status: VendorStatus.PROFILE_COMPLETION_NOT_FILLED,
        icon: 'ri-user-line',
        title: 'Restaurant information',
        description: 'Name, location and contact number'
    },
    {
        id: 'documents',
        label: 'Documents',
        status: VendorStatus.DOCUMENTS_NOT_VERIFIED,
        icon: 'ri-file-list-line',
        title: 'Restaurant documents',
        description: 'Pan card, GST and FSSAI license'
    },
    {
        id: 'shop_details',
        label: 'Shop Details',
        status: VendorStatus.SHOP_DETAILS_NOT_FILLED,
        icon: 'ri-store-2-line',
        title: 'Menu and operational details',
        description: 'Menu, images and timings' // Using generic name but maps to ShopDetails for now
    },
    {
        id: 'shop_images',
        label: 'Shop Images',
        status: VendorStatus.SHOP_IMAGES_NOT_UPLOADED,
        icon: 'ri-image-line',
        title: 'Shop Images',
        description: 'Upload images of your shop/outlet'
    },
    {
        id: 'inventory',
        label: 'Inventory',
        status: VendorStatus.PRODUCT_SELECTION_NOT_DONE,
        icon: 'ri-list-check',
        title: 'Manage Inventory',
        description: 'Select categories and products you sell'
    },
    {
        id: 'bank_details',
        label: 'Bank Account',
        status: VendorStatus.BANK_ACCOUNT_NOT_ADDED,
        icon: 'ri-bank-card-line',
        title: 'Bank Details',
        description: 'Add bank account for payouts'
    },
    {
        id: 'signature',
        label: 'Signature',
        status: VendorStatus.SIGNATURE_NOT_UPLOADED,
        icon: 'ri-pen-nib-line',
        title: 'Signature',
        description: 'Upload your signature'
    }
];

export default function OnboardingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<string>('profile');
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [vendorData, setVendorData] = useState<any>({
        // Placeholder for data
        phone: '',
        ownerName: '',
        email: ''
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await getVendorProfile();
                if (res.success && res.data) {
                    setVendorData(res.data);

                    // Determine step based on status
                    const status = res.data.status as VendorStatus;
                    determineStepFromStatus(status);
                } else {
                    // Not authenticated
                    router.push('/partner');
                }
            } catch (error) {
                console.error("Failed to fetch profile", error);
                router.push('/partner');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const determineStepFromStatus = (status: VendorStatus | string) => {
        // Redirect if in terminal/post-onboarding state
        if (['PENDING', 'APPROVED', 'REJECTED', 'BLOCKED'].includes(status)) {
            router.push('/partner/status');
            return;
        }

        // Simple logic to set initial step and completed array
        if (status === VendorStatus.NEW || status === VendorStatus.PROFILE_COMPLETION_NOT_FILLED) {
            setCurrentStep('profile');
            setCompletedSteps([]);
        } else if (status === VendorStatus.DOCUMENTS_NOT_VERIFIED) {
            setCurrentStep('documents');
            setCompletedSteps(['profile']);
        } else if (status === VendorStatus.SHOP_DETAILS_NOT_FILLED) {
            setCurrentStep('shop_details');
            setCompletedSteps(['profile', 'documents']);
        } else if (status === VendorStatus.SHOP_IMAGES_NOT_UPLOADED) {
            setCurrentStep('shop_images');
            setCompletedSteps(['profile', 'documents', 'shop_details']);
        } else if (status === VendorStatus.PRODUCT_SELECTION_NOT_DONE) {
            setCurrentStep('inventory');
            setCompletedSteps(['profile', 'documents', 'shop_details', 'shop_images']);
        } else if (status === VendorStatus.BANK_ACCOUNT_NOT_ADDED) {
            setCurrentStep('bank_details');
            setCompletedSteps(['profile', 'documents', 'shop_details', 'shop_images', 'inventory']);
        } else if (status === VendorStatus.SIGNATURE_NOT_UPLOADED) {
            setCurrentStep('signature');
            setCompletedSteps(['profile', 'documents', 'shop_details', 'shop_images', 'inventory', 'bank_details']);
        } else {
            // Default check if somehow we slipped through specific statuses but aren't in terminal state
            // Or if specific status handling is missing, default to Signature or handle appropriately
            setCurrentStep('signature');
            setCompletedSteps(['profile', 'documents', 'shop_details', 'shop_images', 'inventory', 'bank_details', 'signature']);
        }
    };

    // Determine current index
    const currentIndex = steps.findIndex(s => s.id === currentStep);

    // Get current step data safely
    const activeStepData = steps.find(s => s.id === currentStep);

    const handleNext = (data: any) => {
        // Update local state with new data
        setVendorData({ ...vendorData, ...data });

        // Mark current as complete
        if (!completedSteps.includes(currentStep)) {
            setCompletedSteps([...completedSteps, currentStep]);
        }

        // Move to next step if available
        const nextIndex = currentIndex + 1;
        if (nextIndex < steps.length) {
            setCurrentStep(steps[nextIndex].id);
        } else {
            // Handle completion: Redirect to status page
            router.push('/partner/status');
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 'profile':
                return <ProfileDetails onNext={handleNext} initialData={vendorData} />;
            case 'documents':
                return <DocumentVerification onNext={handleNext} initialData={vendorData.documents} />;
            case 'shop_details':
                return <ShopDetails onNext={handleNext} initialData={vendorData} />;
            case 'shop_images':
                return <ShopImages onNext={handleNext} initialData={vendorData} />;
            case 'inventory':
                return <Inventory onNext={handleNext} />;
            case 'bank_details':
                return <BankAccount onNext={handleNext} />;
            case 'signature':
                return <Signature onNext={handleNext} initialData={vendorData} />;
            default:
                return <div>Unknown Step</div>;
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <i className="ri-loader-4-line text-4xl animate-spin text-minta-primary"></i>
                    <p className="text-gray-500">Loading your profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar / Steps */}
            <div className="w-full lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="font-bold text-gray-800">Complete your registration</h2>
                        <p className="text-xs text-gray-500 mt-1">Step {currentIndex + 1} of {steps.length}</p>
                    </div>
                    <div className="p-4">
                        <div className="space-y-0">
                            {steps.map((step, index) => {
                                const isActive = currentStep === step.id;
                                const isCompleted = completedSteps.includes(step.id);

                                return (
                                    <div key={step.id} className="relative pl-8 pb-8 last:pb-0">
                                        {/* Connecting Line */}
                                        {index !== steps.length - 1 && (
                                            <div className={`absolute left-[11px] top-6 bottom-0 w-[2px] ${isCompleted ? 'bg-minta-primary' : 'bg-gray-200'}`}></div>
                                        )}

                                        {/* Status Dot */}
                                        <div
                                            className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors z-10 
                                            ${isActive ? 'bg-white border-minta-primary text-minta-primary' :
                                                    isCompleted ? 'bg-minta-primary border-minta-primary text-white' :
                                                        'bg-gray-100 border-gray-300 text-gray-400'}`}
                                        >
                                            {isCompleted ? <i className="ri-check-line"></i> : isActive ? <div className="w-2 h-2 bg-minta-primary rounded-full"></div> : index + 1}
                                        </div>

                                        {/* Content */}
                                        <div
                                            className={`transition-opacity cursor-pointer ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                                            onClick={() => {
                                                // Allow clicking previous steps or completed steps
                                                if (isCompleted || isActive) {
                                                    setCurrentStep(step.id);
                                                }
                                            }}
                                        >
                                            <h3 className={`text-sm font-semibold mb-0.5 ${isActive ? 'text-minta-primary' : 'text-gray-800'}`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 leading-snug">
                                                {step.description}
                                            </p>

                                            {isActive && (
                                                <button className="mt-3 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
                                                    Continue <i className="ri-arrow-right-s-line align-bottom"></i>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Form */}
            <div className="w-full lg:flex-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 min-h-[500px]">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {activeStepData?.title}
                    </h1>
                    <p className="text-gray-500 mb-8 border-b pb-4">
                        {activeStepData?.description}
                    </p>

                    {renderStepContent()}
                </div>
            </div>
        </div>
    );
}
