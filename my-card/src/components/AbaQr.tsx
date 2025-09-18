import React, { useState, useEffect } from "react";
import { QrCode } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import qrImage from "../assets/aba-qr.png";

type AbaQrProps = {
  merchant?: string;
  qrSrc?: string;
  size?: number;
  showAnimation?: boolean;
  cornerColor?: string;
};

const quotes = [
  "ថ្ងៃនេះថ្ងៃជា មេបាគ្រប់គ្នា ចូលមកត្រៀបត្រា ជាអធិតេយ្យ ក្នុងមង្គលការ ឱ្យបានសុខា ដល់បុត្រជៀងជាក់។",
  "លោកអើយពាក្យពរ ពិរោះសាទ រុងរឿងសិទ្ធិស័ក្ត ខ្ញុំនឹងថ្លាថ្លែង​ ចាចែងដោយថ្នាក់ ដោយបទជើងជាក់ ជួបចប់វាចារ។",
  "អំបោះសសម គួរគាប់ឧត្តម ដូចលួសសុវណ្ណា កកាន់លើកឡើង ថ្កល់ថ្កើងថ្លៃថ្លា ចូលចងហត្ថា ឱ្យអ្នកសុខសាន្ត។",
  "ឱ្យអ្នកបានទី ខ្ពង់ខ្ពស់ឫទ្ធី បរិបូណ៌ថ្កើនថ្កាន អាយុយឺនយូរ កបគូបុរាណ មួយរយឆ្នាំបាន ចៀសចាករោគា។",
  "នីរទុក្ខំ ទោមនស្សំ ឧបទ្ទវា នីរសោកេ រោគេពាធា ស្វាមីភរិយា ហោន្តុសុខំ។",
  "ធនធនា ទាសីទាសា ធនធនំ អស្សធនោ ភោគោឧត្តម បរិសុខ ពហុយសា។"
];

export default function AbaQr({
  merchant = "SET K. & DETH V.",
  size = 200,
  showAnimation = true,
  cornerColor = "border-yellow-400",
}: AbaQrProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center">
          <h4 className="font-boran text-xl md:text-2xl text-gold">
            មិចក៏បាន
          </h4>
        </div>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-12 p-8"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative group">
          <div
            className="relative p-4 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
            style={{ width: size + 32, height: size + 32 }}
          >
            <img
              src={qrImage}
              alt="ABA QR Code"
              width={size}
              height={size}
              className="rounded-lg transition-all duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl bg-white/3 pointer-events-none" />
          </div>

          <div
            className={`absolute -top-4 -left-4 w-10 h-10 border-t-4 border-l-4 ${cornerColor} rounded-tl-3xl`}
          />
          <div
            className={`absolute -top-4 -right-4 w-10 h-10 border-t-4 border-r-4 ${cornerColor} rounded-tr-3xl`}
          />
          <div
            className={`absolute -bottom-4 -left-4 w-10 h-10 border-b-4 border-l-4 ${cornerColor} rounded-bl-3xl`}
          />
          <div
            className={`absolute -bottom-4 -right-4 w-10 h-10 border-b-4 border-r-4 ${cornerColor} rounded-br-3xl`}
          />

          {showAnimation && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-4 rounded-lg overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                  animate={{ y: [0, size, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-2 mt-6">
          <div className="flex items-center gap-2 text-sm font-medium text-gold">
            <QrCode className="w-4 h-4 text-yellow-500" />
            <span className="font-mono tracking-wide">{merchant}</span>
          </div>
        </div>
      </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            className="max-w-md space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >

            <div className="relative bg-white/3 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 hover:bg-white/5 transition-all duration-500">
              <div className="absolute -top-2 left-4 text-yellow-400/60 text-4xl font-serif">"</div>
              <div className="absolute -bottom-6 right-4 text-yellow-400/60 text-4xl font-serif">"</div>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuoteIndex}
                  className="font-boran italic text-gold text-sm md:text-base leading-7 md:leading-8 relative z-10 pt-3 pb-3"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {quotes[currentQuoteIndex]}
                </motion.p>
              </AnimatePresence>

              <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400/20 rounded-full" />
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-300/30 rounded-full" />
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex gap-1">
                {quotes.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuoteIndex 
                        ? 'bg-yellow-400 w-6' 
                        : 'bg-yellow-400/30 hover:bg-yellow-400/60'
                    }`}
                    onClick={() => setCurrentQuoteIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}