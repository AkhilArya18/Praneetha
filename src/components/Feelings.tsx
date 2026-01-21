
import { motion } from 'framer-motion';

const Feelings = () => {
    return (
        <section className="py-32 px-6 flex flex-col justify-center items-center text-center bg-white">
            <div className="max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-rose-gold mb-12">
                        🌷
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-10">
                        “When I think of you, I don’t think of perfection. I think of <span className="text-deep-red font-normal">comfort</span>. I think of <span className="text-deep-red font-normal">trust</span>. I think of someone who knows my flaws and still chooses to stay.”
                    </p>
                    <p className="text-2xl md:text-3xl font-serif text-deep-red mt-12">
                        “You’ve seen me grow, struggle, fail, and rise. <br /> And you never left.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Feelings;
