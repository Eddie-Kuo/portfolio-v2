"use client";

import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex flex-col gap-2">
      {/* Row 1 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="w-28 h-2 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="w-24 h-2 bg-blue-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="w-2 h-2 bg-yellow-300 rounded-full"
        />
      </div>

      {/* Row 2 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.65 }}
          className="w-72 h-2 bg-purple-400"
        />
      </div>

      {/* Row 3 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="w-16 h-2 bg-blue-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="w-2 h-2 bg-yellow-300 rounded-full"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="w-32 h-2 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="w-24 h-2 bg-blue-300"
        />
      </div>

      {/* Row 4 */}
      <div className="flex gap-2">
        <span className="w-6" />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="w-28 h-2 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="w-2 h-2 bg-yellow-300 rounded-full"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="w-32 h-2 bg-green-300"
        />
      </div>

      {/* Row 5 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.45 }}
          className="w-10 h-2 bg-pink-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.85 }}
          className="w-32 h-2 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="w-2 h-2 bg-yellow-300 rounded-full"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.5 }}
          className="w-32 h-2 bg-blue-300"
        />
      </div>

      {/* Name & Title */}
      <div className="py-3 px-6">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.65 }}
        >
          <h1 className="text-5xl font-regular text-zinc-200">Eddie Kuo</h1>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
        >
          <p className="text-zinc-400">Software Engineer</p>
        </motion.div>
      </div>

      {/* Section 2 Row 1 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="w-48 h-2 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="w-2 h-2 bg-yellow-300 rounded-full"
        />
      </div>

      {/* Section 2 Row 2 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="w-16 h-2 bg-orange-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="w-24 h-2 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="w-24 h-2 bg-blue-300"
        />
      </div>

      {/* Section 2  Row 3 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.65 }}
          className="w-28 h-2 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.85 }}
          className="w-2 h-2 bg-yellow-300 rounded-full"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="w-32 h-2 bg-purple-300"
        />
      </div>

      {/* Section 2 Row 4 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="w-10 h-2 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="w-32 h-2 bg-purple-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="w-28 h-2 bg-orange-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="w-2 h-2 bg-yellow-300 rounded-full"
        />
      </div>
    </div>
  );
}

export default Hero;
