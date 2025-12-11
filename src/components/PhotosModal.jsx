import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Shield, Maximize2 } from 'lucide-react';
import useSound from '../hooks/useSound';

const PhotosModal = ({ isOpen, onClose }) => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const { playClick, playHover } = useSound();

    useEffect(() => {
        // Dynamically import all images from assets
        const imageModules = import.meta.glob('../assets/*.{png,jpg,jpeg,JPG,JPEG}', { eager: true });

        const loadedImages = Object.entries(imageModules)
            .filter(([path]) => !path.includes('profile.png') && !path.includes('uploaded_image'))
            .map(([path, module]) => ({
                src: module.default,
                alt: path.split('/').pop().split('.')[0], // Filename as alt
                id: path
            }));

        setImages(loadedImages);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/95 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-7xl h-[90vh] bg-cyber-slate border border-cyber-accent/30 rounded-xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.15)]"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-cyber-accent/20 flex justify-between items-center bg-cyber-dark/80 backdrop-blur z-10">
                        <h2 className="text-2xl font-bold flex items-center gap-3 text-cyber-text font-mono">
                            <Camera className="text-cyber-accent animate-pulse" />
                            <span className="tracking-widest">PHOTOGRAPHY_ARCHIVE</span>
                            <span className="text-xs bg-cyber-accent/10 text-cyber-accent px-2 py-1 rounded border border-cyber-accent/20">
                                {images.length} FILES
                            </span>
                        </h2>
                        <button
                            onClick={() => { playClick(); onClose(); }}
                            className="p-2 hover:bg-red-500/10 rounded-full text-cyber-muted hover:text-red-500 transition-colors border border-transparent hover:border-red-500/30"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Scrollable Gallery Content */}
                    <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-cyber-accent/20 scrollbar-track-transparent bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                        >
                            {images.map((img) => (
                                <motion.div
                                    key={img.id}
                                    variants={itemVariants}
                                    className="break-inside-avoid relative group rounded-lg overflow-hidden border border-cyber-muted/20 hover:border-cyber-accent transition-colors duration-300 cursor-pointer bg-black/20 backdrop-blur-sm"
                                    onClick={() => setSelectedImage(img)}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Cyber Overlay Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-between items-center">
                                        <span className="text-cyber-accent font-mono text-xs tracking-widest border border-cyber-accent/30 px-2 py-1 rounded bg-black/50 backdrop-blur">
                                            IMG_{img.id.slice(-4).toUpperCase()}
                                        </span>
                                        <Maximize2 size={16} className="text-cyber-text" />
                                    </div>

                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Lightbox for selected image */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center p-4 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl border border-white/10"
                        />
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-cyber-muted text-sm tracking-widest">
                            {selectedImage.alt}
                        </div>
                    </motion.div>
                )}
            </div>
        </AnimatePresence>
    );
};

export default PhotosModal;
