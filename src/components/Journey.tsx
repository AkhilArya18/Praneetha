
import { motion } from 'framer-motion';
import { Calendar, Clock, HeartHandshake } from 'lucide-react';

const Journey = () => {
    const items = [
        { icon: <Clock size={32} />, text: "It’s patience." },
        { icon: <HeartHandshake size={32} />, text: "It’s understanding." },
        { icon: <Calendar size={32} />, text: "It’s choosing each other even when life wasn’t gentle." },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-warm-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-serif text-deep-red mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    “Not Just Years… But Us.”
                </motion.h2>

                <motion.p
                    className="text-xl text-gray-600 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Six years of knowing you. Six years of you being my most <span className="font-semibold text-rose-gold">trusted person</span>.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-rose-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 + 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-rose-gold mb-4">{item.icon}</div>
                            <p className="text-lg font-medium text-gray-800">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="space-y-4 text-lg text-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                >
                    <p>“We’ve seen each other at our best… and our weakest.”</p>
                    <p>“We’ve shared dreams, fears, silence, laughter, and hope.”</p>
                    <p className="text-2xl font-serif text-rose-gold mt-6">“And through everything, one thing stayed constant—you.”</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;
