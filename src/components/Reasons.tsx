import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Reasons = () => {
    const reasons = [
        "Because you respect my heart",
        "Because you’re patient with my flaws",
        "Because you believe in me",
        "Because life feels lighter with you",
        "Because love feels real with you"
    ];

    const [visibleCount, setVisibleCount] = useState(0);

    const showNext = () => {
        if (visibleCount < reasons.length) {
            setVisibleCount(prev => prev + 1);
        }
    };

    return (
        <section className="py-24 px-6 bg-soft-pink min-h-[80vh] flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif text-deep-red mb-12 text-center">🌼 Reasons I Choose You</h2>

            <div className="max-w-xl w-full space-y-4">
                {reasons.slice(0, visibleCount).map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/80 p-4 rounded-lg shadow-sm flex items-center gap-3 backdrop-blur-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-rose-gold" />
                        <p className="text-lg text-gray-800">{reason}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 h-20"> {/* Fixed height to prevent layout shift jumping too much */}
                {visibleCount < reasons.length ? (
                    <motion.button
                        onClick={showNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-rose-gold text-white rounded-full font-medium shadow-md hover:bg-rose-gold/90 transition-colors"
                    >
                        Click for more <ChevronRight size={18} />
                    </motion.button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <p className="text-2xl font-serif text-deep-red mb-2">“I don’t choose you because I have to.</p>
                        <p className="text-2xl font-serif text-deep-red">I choose you because I want to.”</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Reasons;
