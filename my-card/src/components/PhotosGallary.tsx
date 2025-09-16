// src/components/PhotosGallery.tsx
import React from "react";
import { motion } from "motion/react";

const photos = [
  { id: 1, src: "https://picsum.photos/seed/p1/800/1200", alt: "Tall portrait image" },
  { id: 2, src: "https://picsum.photos/seed/p2/1200/800", alt: "Wide landscape image" },
  { id: 3, src: "https://picsum.photos/seed/p3/800/800", alt: "Square image" },
  { id: 4, src: "https://picsum.photos/seed/p4/800/1000", alt: "Another portrait" },
  { id: 5, src: "https://picsum.photos/seed/p5/1000/800", alt: "Scenic view" },
  { id: 6, src: "https://picsum.photos/seed/p6/800/1100", alt: "Architecture detail" },
  { id: 7, src: "https://picsum.photos/seed/p7/1200/900", alt: "Nature shot" },
  { id: 8, src: "https://picsum.photos/seed/p8/800/900", alt: "Urban photography" },
];

const PhotosGallery: React.FC = () => {
  return (
    <div className="flex flex-col items-center mx-auto px-5 mb-20">
      <h4 className="text-gold md:text-xl mb-8">កម្រង</h4>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="break-inside-avoid cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={photo.src}
              alt={photo.alt}
              className="rounded-lg w-full h-full object-cover"
              whileHover={{ rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotosGallery;
