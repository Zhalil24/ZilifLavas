"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-6 w-80 md:w-96 h-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-[9999]"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-dark-red text-white px-4 py-2">
              <h4 className="font-semibold">Chat Bot</h4>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 flex-1 text-gray-700 overflow-y-auto space-y-3">
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-xl max-w-[80%]">
                  Merhaba! Size nasıl yardımcı olabilirim?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-dark-red text-white px-3 py-2 rounded-xl max-w-[80%]">
                  Merhaba, ürünleriniz hakkında bilgi almak istiyorum.
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                placeholder="Mesajınızı yazın..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dark-red"
              />
              <button className="bg-dark-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                Gönder
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-dark-red rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition z-[9999]"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}
