
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gradient-to-b from-soft-pink to-warm-white">
            {/* Background Decorative Elements */}
            <motion.div
                className="absolute top-20 left-10 text-rose-gold/20"
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Heart size={100} fill="currentColor" />
            </motion.div>
            <motion.div
                className="absolute top-1/2 left-1/4 text-rose-gold/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <Heart size={50} fill="currentColor" />
            </motion.div>
            <motion.div
                className="absolute bottom-1/3 right-1/3 text-rose-gold/10"
                animate={{ rotate: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
                <Heart size={40} fill="currentColor" />
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-10 text-rose-gold/20"
                animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                <Heart size={150} fill="currentColor" />
            </motion.div>

            {/* Main Content */}
            <div className="max-w-3xl z-10">
                <motion.h1
                    className="text-4xl md:text-6xl font-serif text-deep-red mb-8 leading-tight px-4 md:px-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                >
                    “Six Years Ago, <span className="text-rose-gold">Praneetha</span>, Love Walked Into My Life… <span className="italic">Quietly.</span>”
                </motion.h1>

                <motion.div
                    className="space-y-6 text-lg md:text-xl text-gray-700 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                >
                    <p>“I didn’t know that a simple conversation would turn into a lifetime of feelings.”</p>
                    <p>“I didn’t know that your presence would become my comfort.”</p>
                    <p className="font-medium text-rose-gold text-2xl mt-8">
                        “But here we are—six years later—and my heart still recognizes yours.”
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-rose-gold rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-rose-gold rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
