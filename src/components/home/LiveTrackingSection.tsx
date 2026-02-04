"use client";

export default function LiveTrackingSection() {
    const steps = [
        { icon: "ri-store-2-fill", label: "Order Placed", status: "done" },
        { icon: "ri-checkbox-circle-fill", label: "Picked Up", status: "done" },
        { icon: "ri-e-bike-2-fill", label: "On The Way", status: "active" },
        { icon: "ri-home-4-fill", label: "Delivered", status: "pending" },
    ];

    return (
        <section className="relative py-16 md:py-20 bg-[#1a1a1a] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-minta-primary/15 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-minta-accent/10 rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-white/80 text-sm font-medium">Live Tracking</span>
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Track Your Order <span className="text-minta-primary">Live</span>
                    </h2>

                    <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
                        Watch your fresh delivery move in real-time on an interactive map.
                        Know exactly when your order will arrive at your doorstep.
                    </p>
                </div>

                {/* Main Content - Side by Side */}
                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

                    {/* Left - Compact Phone Mockup */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="relative bg-[#2a2a2a] rounded-[2rem] p-2 shadow-2xl shadow-black/40 w-56">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#2a2a2a] rounded-b-xl z-20"></div>

                                {/* Screen */}
                                <div className="relative bg-[#1e1e1e] rounded-[1.5rem] overflow-hidden aspect-[9/16]">
                                    {/* Map Area */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#2d3748] to-[#1a202c]">
                                        {/* Grid */}
                                        <div
                                            className="absolute inset-0 opacity-10"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                                backgroundSize: '25px 25px'
                                            }}
                                        ></div>

                                        {/* Roads */}
                                        <div className="absolute top-1/3 left-0 right-0 h-4 bg-[#4a5568]/40 transform -rotate-12"></div>
                                        <div className="absolute left-1/3 top-0 bottom-0 w-4 bg-[#4a5568]/30"></div>
                                    </div>

                                    {/* Path */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 180" preserveAspectRatio="none">
                                        <path
                                            d="M 20 150 Q 35 120, 50 100 T 70 60 T 80 30"
                                            fill="none"
                                            stroke="#8719C6"
                                            strokeWidth="2"
                                            strokeDasharray="4 2"
                                            opacity="0.7"
                                        />
                                    </svg>

                                    {/* Destination */}
                                    <div className="absolute top-[12%] right-[15%]">
                                        <div className="w-7 h-7 bg-minta-primary rounded-full flex items-center justify-center shadow-lg">
                                            <i className="ri-home-4-fill text-white text-xs"></i>
                                        </div>
                                    </div>

                                    {/* Rider */}
                                    <div className="absolute top-[45%] left-[40%]">
                                        <div className="absolute inset-0 w-10 h-10 -m-1.5 bg-green-500/20 rounded-full animate-ping"></div>
                                        <div className="relative w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                            <i className="ri-e-bike-2-fill text-white text-xs"></i>
                                        </div>
                                    </div>

                                    {/* Start */}
                                    <div className="absolute bottom-[18%] left-[15%]">
                                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                            <i className="ri-store-2-fill text-white/70 text-[10px]"></i>
                                        </div>
                                    </div>

                                    {/* Bottom Card */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e1e1e] to-transparent pt-8 pb-3 px-3">
                                        <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                                        <i className="ri-e-bike-2-fill text-green-400 text-sm"></i>
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-xs font-medium">On the way</p>
                                                        <p className="text-white/40 text-[10px]">1.8 km away</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-minta-primary font-bold text-sm">6 min</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -right-8 top-8 bg-white rounded-xl p-3 shadow-xl text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                                        <i className="ri-checkbox-circle-fill text-green-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-semibold">Picked Up</p>
                                        <p className="text-gray-400 text-[10px]">2 min ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Info */}
                    <div>
                        {/* Order Status Steps */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <i className="ri-route-line text-minta-primary"></i>
                                Order Progress
                            </h3>
                            <div className="flex items-center justify-between">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex flex-col items-center relative">
                                        {/* Connector Line */}
                                        {index < steps.length - 1 && (
                                            <div className={`absolute top-4 left-1/2 w-full h-0.5 ${step.status === 'done' ? 'bg-minta-primary' : 'bg-white/10'
                                                }`}></div>
                                        )}

                                        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${step.status === 'done' ? 'bg-minta-primary' :
                                                step.status === 'active' ? 'bg-green-500' : 'bg-white/10'
                                            }`}>
                                            <i className={`${step.icon} text-white text-sm`}></i>
                                        </div>
                                        <span className={`text-[10px] mt-2 ${step.status === 'pending' ? 'text-white/30' : 'text-white/70'
                                            }`}>
                                            {step.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <i className="ri-map-pin-line text-minta-primary text-xl mb-2 block"></i>
                                <h4 className="text-white font-medium text-sm mb-1">Real-Time Map</h4>
                                <p className="text-white/40 text-xs pb-1">See your delivery moving live on the map</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <i className="ri-time-line text-minta-primary text-xl mb-2 block"></i>
                                <h4 className="text-white font-medium text-sm mb-1">Live ETA</h4>
                                <p className="text-white/40 text-xs pb-1">Accurate arrival time that updates in real-time</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <i className="ri-notification-3-line text-minta-primary text-xl mb-2 block"></i>
                                <h4 className="text-white font-medium text-sm mb-1">Instant Alerts</h4>
                                <p className="text-white/40 text-xs pb-1">Get notified at every step of delivery</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <i className="ri-phone-line text-minta-primary text-xl mb-2 block"></i>
                                <h4 className="text-white font-medium text-sm mb-1">Contact Rider</h4>
                                <p className="text-white/40 text-xs pb-1">Call or message your delivery partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
