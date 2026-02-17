import Link from 'next/link';
import Image from 'next/image';

export default function OnboardingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Simple Header */}
            <header className="bg-white border-b border-gray-200 py-3 sticky top-0 z-30">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="font-syne font-bold text-2xl text-minta-primary">Minta Fresh</div>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">PARTNER</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* User Profile / Status could go here */}
                        <span className="text-sm text-gray-600">Need help? <strong>+91 91234 56789</strong></span>
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <div className="flex-1 container mx-auto px-6 py-8">
                {children}
            </div>
        </div>
    );
}
