export default function HeroSection() {
    return (
        <section className="hero-section overflow-hidden flex items-center justify-center h-screen w-screen max-w-full relative">
            <video
                className="absolute inset-0 w-full h-full object-cover z-0 min-w-full"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
}
