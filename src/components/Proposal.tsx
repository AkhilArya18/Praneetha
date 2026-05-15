import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const Proposal = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const handleYesClick = () => {
        setYesPressed(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#b76e79', '#fdf2f8', '#8a1c1c']
        });
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "I'll convince our parents! 👨‍👩‍👧‍👦",
            "I'll do everything for us! 💪",
            "Trust my manifestation! ✨",
            "Please Maa? 🥺",
            "I'm not giving up on us!",
            "Maa, look at my efforts! 💖",
            "We are meant to be! 🦋",
            "I will wait forever!",
            "Just say Yes, Maa! 💍",
            "Don't break my heart ;(",
            "I love you infinity! ❤️",
            "Our future is waiting!",
            "Say Yes to our destiny!",
        ];
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-t from-rose-gold/20 to-warm-white relative overflow-hidden">

            <AnimatePresence>
                {yesPressed ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="z-10 bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-rose-gold max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-deep-red mb-6">She Said Yes! 💖</h2>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8">
                            “Thank you for loving me, <span className="font-bold text-rose-gold">Maa</span>. Thank you for trusting me. We will make this life beautiful together.”
                        </p>
                        <Heart className="w-24 h-24 text-rose-gold mx-auto animate-pulse" fill="currentColor" />
                    </motion.div>
                ) : (
                    <div className="z-10 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <p className="text-xl text-gray-600 mb-4">“I know you didn't accept me yet, but I am manifesting a life with you…”</p>
                            <h2 className="text-4xl md:text-7xl font-serif text-deep-red font-bold mb-4">Will you marry me, <span className="text-rose-gold">Maa</span>?</h2>
                        </motion.div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <motion.button
                                className="bg-deep-red text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-800 transition-colors text-xl z-20 flex items-center gap-3"
                                style={{ fontSize: `${Math.min(noCount * 5 + 20, 100)}px` }}
                                onClick={handleYesClick}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(220, 38, 38, 0.7)", "0px 0px 20px rgba(220, 38, 38, 0)", "0px 0px 0px rgba(220, 38, 38, 0)"] }}
                                transition={{
                                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                                    boxShadow: { duration: 1.5, repeat: Infinity }
                                }}
                            >
                                💖 Yes, I Choose You
                            </motion.button>

                            <button
                                className="bg-gray-200 text-gray-700 font-medium py-4 px-8 rounded-full hover:bg-gray-300 transition-colors text-xl"
                                onClick={handleNoClick}
                            >
                                {getNoButtonText()}
                            </button>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4"
                    animate={{ y: [0, -30, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <Heart className="text-rose-gold w-16 h-16" />
                </motion.div>
                <motion.div
                    className="absolute bottom-1/4 right-1/4"
                    animate={{ y: [0, 40, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <Heart className="text-rose-gold w-24 h-24" />
                </motion.div>
            </div>

        </section>
    );
};

export default Proposal;
