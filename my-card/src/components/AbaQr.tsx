import React from "react";
import { QrCode } from "lucide-react";
import { motion } from "framer-motion";
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
  qrSrc = qrImage,
  size = 200,
  showAnimation = true,
  cornerColor = "border-yellow-400",
}: AbaQrProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between p-8 mb-20 gap-10"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Column: QR Code */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative group">
          <div
            className="relative p-4 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
            style={{ width: size + 32, height: size + 32 }}
          >
            <img
              src={qrSrc}
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

      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <motion.div
          className="font-boran italic text-gold space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h4 className="text-xl">បទកាកគតិ</h4>
          <p className="text-md leading-8">
            {quotes[Math.floor(Math.random() * quotes.length)]}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}