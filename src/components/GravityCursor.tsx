import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const GravityCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Create multiple orbiting elements with different delays/springs
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const springX2 = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const springY2 = useSpring(mouseY, { damping: 20, stiffness: 100 });

    const springX3 = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const springY3 = useSpring(mouseY, { damping: 30, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16); // Center offset
            mouseY.set(e.clientY - 16);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {/* Main Heart */}
            <motion.div
                className="absolute text-2xl"
                style={{ x: springX, y: springY }}
            >
                💖
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div
                className="absolute text-xl"
                style={{ x: springX2, y: springY2 }}
            >
                ✨
            </motion.div>

            <motion.div
                className="absolute text-xl"
                style={{ x: springX3, y: springY3 }}
            >
                🦋
            </motion.div>
        </div>
    );
};

export default GravityCursor;
