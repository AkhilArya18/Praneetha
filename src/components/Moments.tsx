
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Smile, Anchor, Scaling } from 'lucide-react';

const Moments = () => {
    const moments = [
        { icon: <MessageCircle size={28} />, title: "Late-night conversations", text: "That fixed bad days" },
        { icon: <Heart size={28} />, title: "Small fights", text: "That taught us how to love better" },
        { icon: <Smile size={28} />, title: "Smiles", text: "That didn’t need reasons" },
        { icon: <Anchor size={28} />, title: "Holding on", text: "When letting go felt easier" },
        { icon: <Scaling size={28} />, title: "Growing up", text: "Side by side" },
    ];

    return (
        <section className="py-24 px-6 bg-soft-pink/30">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-4xl font-serif text-center text-deep-red mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    ✨ Little Moments That Became Everything
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {moments.map((moment, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-rose-100 w-full sm:w-64 flex flex-col items-center text-center cursor-pointer transition-all"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -15,
                                rotate: index % 2 === 0 ? 2 : -2,
                                boxShadow: "0 20px 40px -10px rgba(183, 110, 121, 0.3)"
                            }}
                        >
                            <div className="text-rose-gold mb-4 p-3 bg-soft-pink rounded-full">
                                {moment.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{moment.title}</h3>
                            <p className="text-gray-600 text-sm">{moment.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xl text-gray-700 italic">
                        “These moments didn’t feel special back then. But today, they mean everything.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Moments;
