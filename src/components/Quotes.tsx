import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Quotes = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const quotes = [
        "Real love isn’t about fairy tales—it’s about staying when things aren’t perfect.",
        "I found love in the way you understand me without asking.",
        "Time didn’t change us—it strengthened us.",
        "You are not my habit. You are my choice.",
        "Every day with you feels like a quiet promise."
    ];

    return (
        <section ref={containerRef} className="py-24 px-6 min-h-screen flex flex-col justify-center items-center bg-stone-50 overflow-hidden">
            <motion.div style={{ opacity }} className="max-w-4xl w-full relative h-[600px] flex justify-center items-center">
                {quotes.map((quote, index) => (
                    <motion.div
                        key={index}
                        style={{
                            y: index % 2 === 0 ? y1 : y2,
                            position: 'absolute',
                            top: `${index * 15 + 10}%`,
                            left: index % 2 === 0 ? '5%' : 'auto',
                            right: index % 2 !== 0 ? '5%' : 'auto',
                        }}
                        className={`p-6 bg-white shadow-lg rounded-xl border-l-4 ${index % 2 === 0 ? 'border-rose-gold' : 'border-deep-red'} max-w-sm md:max-w-md mx-6 md:mx-0`}
                    >
                        <p className="text-lg md:text-xl font-serif text-gray-800 italic">“{quote}”</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Quotes;
