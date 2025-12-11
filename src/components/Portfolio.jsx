import React from 'react';
import { motion } from 'framer-motion';

// Import images
import img1 from '../assets/portfolio/uploaded_image_0_1765456864389.jpg';
import img2 from '../assets/portfolio/uploaded_image_1_1765456864389.jpg';
import img3 from '../assets/portfolio/uploaded_image_2_1765456864389.jpg';
import img4 from '../assets/portfolio/uploaded_image_3_1765456864389.jpg';
import img5 from '../assets/portfolio/uploaded_image_4_1765456864389.jpg';

const portfolioImages = [
    { id: 1, src: img1, alt: "Portfolio Shot 1", size: "large" },
    { id: 2, src: img2, alt: "Portfolio Shot 2", size: "medium" },
    { id: 3, src: img3, alt: "Portfolio Shot 3", size: "medium" },
    { id: 4, src: img4, alt: "Portfolio Shot 4", size: "wide" },
    { id: 5, src: img5, alt: "Portfolio Shot 5", size: "medium" },
];

const Portfolio = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="text-cyber-accent">05.</span> Photography
                </h2>
                <div className="h-px bg-cyber-accent/20 w-full mb-8"></div>
                <p className="text-cyber-muted text-lg max-w-2xl">
                    A collection of moments captured through my lens.
                    Exploring perspectives, light, and stories.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioImages.map((img, index) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`relative group overflow-hidden rounded-lg border border-cyber-accent/10 bg-cyber-slate/30 ${img.size === 'wide' ? 'md:col-span-2' : ''
                            }`}
                    >
                        <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-cyber-text font-medium tracking-wide">{img.alt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
