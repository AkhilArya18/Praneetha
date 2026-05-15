
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
                    className="text-4xl md:text-5xl font-serif text-deep-red mb-8 leading-tight px-4 md:px-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                >
                    "Something Told Me, <span className="text-rose-gold">Praneetha</span>… <span className="italic">From the Very First Moment.</span>"
                </motion.h1>

                <motion.div
                    className="space-y-5 text-lg md:text-xl text-gray-700 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                >
                    <p>"I know this might come as a surprise, especially since you just joined the company three days ago."</p>
                    <p>"I don't usually do things like this, but I wanted to be completely honest with you."</p>
                    <p>"The very first time I saw you during your onboarding, I felt something genuinely special — an instant, indescribable spark that I haven't been able to stop thinking about."</p>
                    <p>"I know we have only known each other for a few days, and you are still settling into your new role."</p>
                    <p>"But meeting you has easily been the absolute best part of my week."</p>
                    <p>"There is just a wonderful energy about you that drew me in from the moment you walked in."</p>
                    <p>"I didn't want to keep this feeling to myself or regret not telling you how much of an impression you've made."</p>
                    <p>"I would really love the chance to get to know the person behind that amazing first impression."</p>
                    <p>"If you are open to it, I would love to take you out for a coffee sometime soon, completely outside of work."</p>
                    <p>"There is absolutely no pressure at all, and we can take things at whatever pace you are comfortable with."</p>
                    <p className="font-medium text-rose-gold text-2xl mt-8">
                        "Either way, I just really wanted to let you know how incredibly glad I am that you joined our team. ☕"
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
