"use client";

export default function EliteSection() {
    const benefits = [
        {
            icon: "ri-vip-crown-fill",
            title: "Priority Access",
            description: "Be first in line for fresh cuts and exclusive products before anyone else.",
            highlight: "VIP",
        },
        {
            icon: "ri-rocket-2-fill",
            title: "Lightning Delivery",
            description: "Get your orders delivered in 30 - 35 minutes with free shipping on all orders.",
            highlight: "FREE",
        },
        {
            icon: "ri-discount-percent-fill",
            title: "Exclusive Savings",
            description: "Enjoy automatic discounts and special offers reserved only for Elite members.",
            highlight: "elite",
        },
    ];

    return (
        <section
            id="elite"
            className="relative py-24 md:py-32 bg-gradient-to-b from-white to-[#fafafa]"
        >
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8719C6]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8719C6]/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8719C6]/10 border border-[#8719C6]/20 rounded-full mb-6">
                        <i className="ri-sparkling-fill text-[#8719C6]"></i>
                        <span className="text-[#8719C6] text-sm font-semibold tracking-wide uppercase">
                            Elite Membership
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-tight mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Unlock <span className="text-[#8719C6]">Elite</span> Benefits
                    </h2>

                    <p className="text-[#666] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Join our exclusive membership program and experience premium perks that elevate your shopping.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 pt-14 pb-10 md:p-10 md:pt-16 md:pb-12 border border-gray-100 hover:border-[#8719C6]/30 hover:shadow-xl hover:shadow-[#8719C6]/5 transition-all duration-500"
                        >
                            {/* Highlight Badge */}
                            <div className="absolute top-6 right-6">
                                <span className="px-3 py-1 bg-[#8719C6]/10 text-[#8719C6] text-xs font-bold rounded-full">
                                    {benefit.highlight}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-[#8719C6] to-[#a855f7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className={`${benefit.icon} text-2xl text-white`}></i>
                            </div>

                            {/* Content */}
                            <h3
                                className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                {benefit.title}
                            </h3>

                            <p className="text-[#666] leading-relaxed pb-1">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <button
                            className="px-10 py-4 bg-[#8719C6] text-white font-bold uppercase tracking-wider rounded-full hover:bg-[#6d14a0] hover:shadow-lg hover:shadow-[#8719C6]/30 transition-all duration-300"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Join Elite Now
                        </button>


                    </div>

                    <p className="mt-6 text-[#999] text-sm">
                        Cancel anytime • No hidden fees • Instant activation
                    </p>
                </div>
            </div>
        </section>
    );
}
