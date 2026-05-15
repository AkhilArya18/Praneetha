import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const poems = [
    {
        lines: [
            "నీ కళ్లలో చూసిన ప్రేమ",
            "నా ప్రపంచాన్ని కొత్తగా చేసింది.",
        ],
    },
    {
        lines: [
            "నీ నవ్వు నా హృదయానికి",
            "ఎప్పటికీ ఆగని సంగీతం.",
        ],
    },
    {
        lines: [
            "నీ స్పర్శలో దాగిన మాటలు",
            "నా మనసుకు అర్థమవుతూనే ఉంటాయి.",
        ],
    },
    {
        lines: [
            "నీ కోసం రాసిన ప్రతి లైన్లో",
            "నా హృదయం నీ పేరే రాస్తుంది.",
        ],
    },
];

const TeluguPoetry = () => {
    return (
        <section className="py-28 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0010 0%, #2d0a1a 40%, #1a0010 100%)' }}>
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-10 left-10 text-rose-gold/10"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                >
                    <Heart size={120} fill="currentColor" />
                </motion.div>
                <motion.div
                    className="absolute bottom-10 right-10 text-rose-gold/10"
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                >
                    <Heart size={160} fill="currentColor" />
                </motion.div>
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(183,110,121,0.15) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
                    <span className="text-4xl">🌙</span>
                    <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-3" style={{ color: '#f0c0cc' }}>
                        నీకోసం కవిత్వం
                    </h2>
                    <p className="text-rose-gold/60 text-sm tracking-widest uppercase">Poetry for you, Praneetha</p>
                </motion.div>

                {/* Poem cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {poems.map((poem, index) => (
                        <motion.div
                            key={index}
                            className="relative p-8 rounded-3xl border border-rose-gold/20 backdrop-blur-sm"
                            style={{ background: 'rgba(255,255,255,0.04)' }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.03,
                                borderColor: 'rgba(183,110,121,0.5)',
                                background: 'rgba(255,255,255,0.07)',
                            }}
                        >
                            {/* Decorative quote mark */}
                            <span className="absolute top-4 left-5 text-5xl leading-none text-rose-gold/20 font-serif select-none">"</span>

                            <div className="mt-4 space-y-1">
                                {poem.lines.map((line, li) => (
                                    <p
                                        key={li}
                                        className="text-lg md:text-xl leading-relaxed"
                                        style={{
                                            color: li === 0 ? '#f5d0d8' : '#d4a0ad',
                                            fontFamily: "'Noto Sans Telugu', 'Mandali', serif",
                                            fontWeight: li === 0 ? 500 : 400,
                                        }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>

                            {/* Bottom accent */}
                            <motion.div
                                className="absolute bottom-3 right-5"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                            >
                                <Heart size={14} className="text-rose-gold/40" fill="currentColor" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing line */}
                <motion.p
                    className="text-center mt-16 text-rose-gold/70 text-lg italic font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                >
                    — నీ పేరు నా గుండె లోపల 🌹
                </motion.p>
            </div>
        </section>
    );
};

export default TeluguPoetry;
