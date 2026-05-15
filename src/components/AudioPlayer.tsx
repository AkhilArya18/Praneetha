import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { VolumeX } from 'lucide-react';

const AUDIO_URL = "https://raw.githubusercontent.com/AkhilArya18/qr-code/408dedea74ba90fdf6f9beb64b5eef0a7e57207f/Nuvvunte%20Chaley.mp3";

const AudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const audio = new Audio(AUDIO_URL);
        audio.loop = true;
        audio.volume = 0.7;
        audioRef.current = audio;

        const tryPlay = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                audio.play().then(() => setIsPlaying(true)).catch(() => {});
            }
        };

        document.addEventListener('click', tryPlay, { once: true });
        document.addEventListener('scroll', tryPlay, { once: true });

        return () => {
            audio.pause();
            document.removeEventListener('click', tryPlay);
            document.removeEventListener('scroll', tryPlay);
        };
    }, []);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
        }
    };

    return (
        <motion.button
            onClick={togglePlay}
            className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-rose-gold/30 text-rose-gold hover:bg-rose-50 transition-colors"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isPlaying ? "Pause Music" : "Play Music"}
        >
            {isPlaying ? (
                <>
                    <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        🎵
                    </motion.span>
                    <span className="text-sm font-medium text-gray-600">Nuvvunte Chaley</span>
                    <motion.div className="flex gap-[2px] items-end h-4">
                        {[1, 2, 3].map(i => (
                            <motion.div key={i} className="w-1 bg-rose-gold rounded-full" animate={{ height: ['4px', '14px', '4px'] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }} />
                        ))}
                    </motion.div>
                </>
            ) : (
                <>
                    <VolumeX size={18} />
                    <span className="text-sm font-medium text-gray-600">Play Song</span>
                </>
            )}
        </motion.button>
    );
};

export default AudioPlayer;
