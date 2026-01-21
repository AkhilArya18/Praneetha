
import { motion } from 'framer-motion';

const LoveTexts = () => {
    const texts = [
        "You make ordinary days feel safe.",
        "Your smile still feels like home.",
        "I didn’t fall in love with you in one day—I stayed in love with you every day.",
        "With you, I learned that love is effort, not perfection.",
        "Even silence feels warm when it’s with you.",
        "You are my favorite notification.",
        "Seeing you happy makes me happy.",
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-rose-gold/10 to-soft-pink/10 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-warm-white via-transparent to-warm-white z-10" />

            <div className="flex flex-col gap-8">
                {/* Row 1 - Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {[...texts, ...texts].map((text, i) => (
                            <span key={i} className="text-xl md:text-3xl font-serif text-rose-gold/80 px-4">
                                {text} •
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap"
                        animate={{ x: [-1000, 0] }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    >
                        {[...texts, ...texts].reverse().map((text, i) => (
                            <span key={i} className="text-lg md:text-2xl font-light text-gray-400 px-4 italic">
                                {text}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LoveTexts;
