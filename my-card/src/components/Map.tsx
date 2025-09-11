import { motion } from "framer-motion";
import RoadMap from "./RoadMap";

export default function Map() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <RoadMap />
      </motion.div>
    </div>
  );
}
