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
    ];

    return (
        <section
            id="elite"
            className="relative py-24 md:py-32 bg-linear-to-b from-white to-minta-bg"
        >
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-minta-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-minta-primary/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">

                    <h2
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-tight mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Download The App
                    </h2>
                </div>

                {/* Benefits Grid - Now adjusted for 2 items */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 pt-14 pb-10 md:p-10 md:pt-16 md:pb-12 border border-gray-100 hover:border-minta-primary/30 hover:shadow-xl hover:shadow-minta-primary/5 transition-all duration-500"
                        >
                            {/* Highlight Badge */}
                            <div className="absolute top-6 right-6">
                                <span className="px-3 py-1 bg-minta-primary/10 text-minta-primary text-xs font-bold rounded-full">
                                    {benefit.highlight}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 bg-linear-to-br from-minta-primary to-[#a855f7] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                            className="px-10 py-4 bg-minta-primary text-white font-bold uppercase tracking-wider rounded-full hover:bg-[#6d14a0] hover:shadow-lg hover:shadow-minta-primary/30 transition-all duration-300"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Download App
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}