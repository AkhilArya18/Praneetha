
import { motion } from 'framer-motion';
import { Sunrise, Coffee, Home, Users } from 'lucide-react';

const Future = () => {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-pink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    className="text-3xl md:text-5xl font-serif text-deep-red mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    🌹 The Future I See With You
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 text-left">
                    {[
                        { icon: <Coffee className="text-rose-gold" />, text: "I see mornings with shared silence and coffee." },
                        { icon: <Sunrise className="text-rose-gold" />, text: "I see hard days we’ll face together." },
                        { icon: <Home className="text-rose-gold" />, text: "I see laughter filling rooms we’ll call home." },
                        { icon: <Users className="text-rose-gold" />, text: "I see a life where love is not just felt—but lived." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-3 bg-soft-pink rounded-xl">
                                {item.icon}
                            </div>
                            <p className="text-xl text-gray-700 font-light mt-2">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Future;
