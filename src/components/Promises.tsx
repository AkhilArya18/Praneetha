
import { motion } from 'framer-motion';

const Promises = () => {
    const promises = [
        "I promise to walk beside you, not ahead of you.",
        "To listen when you speak… and even when you don’t.",
        "To grow with you, learn with you, and love you better with time.",
        "To choose you—today, tomorrow, and always."
    ];

    return (
        <section className="py-24 px-6 bg-rose-gold/5 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-800 mb-16">🤍 My Promises to You</h2>

            <div className="max-w-2xl w-full space-y-8">
                {promises.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        transition={{ duration: 2, delay: index * 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="overflow-hidden whitespace-normal md:whitespace-nowrap border-b border-gray-300 pb-2"
                    >
                        <p className="text-lg md:text-2xl font-light text-gray-700 font-serif">
                            {promise}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Promises;
