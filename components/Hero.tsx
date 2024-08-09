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
          className="h-2 w-28 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="h-2 w-24 bg-blue-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="h-2 w-2 rounded-full bg-yellow-300"
        />
      </div>

      {/* Row 2 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.65 }}
          className="h-2 w-72 bg-purple-400"
        />
      </div>

      {/* Row 3 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="h-2 w-16 bg-blue-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="h-2 w-2 rounded-full bg-yellow-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="h-2 w-32 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="h-2 w-24 bg-blue-300"
        />
      </div>

      {/* Row 4 */}
      <div className="flex gap-2">
        <span className="w-6" />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="h-2 w-28 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="h-2 w-2 rounded-full bg-yellow-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="h-2 w-32 bg-green-300"
        />
      </div>

      {/* Row 5 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.45 }}
          className="h-2 w-10 bg-pink-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.85 }}
          className="h-2 w-32 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="h-2 w-2 rounded-full bg-yellow-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.5 }}
          className="h-2 w-32 bg-blue-300"
        />
      </div>

      {/* Name & Title */}
      <div className="px-6 py-3">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.65 }}
        >
          <h1 className="font-regular text-5xl text-lightText">Eddie Kuo</h1>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
        >
          <p className="text-secondaryText">Software Engineer</p>
        </motion.div>
      </div>

      {/* Section 2 Row 1 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="h-2 w-48 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="h-2 w-2 rounded-full bg-yellow-300"
        />
      </div>

      {/* Section 2 Row 2 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="h-2 w-16 bg-orange-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="h-2 w-24 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="h-2 w-24 bg-blue-300"
        />
      </div>

      {/* Section 2  Row 3 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.65 }}
          className="h-2 w-28 bg-red-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.85 }}
          className="h-2 w-2 rounded-full bg-yellow-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="h-2 w-32 bg-purple-300"
        />
      </div>

      {/* Section 2 Row 4 */}
      <div className="flex gap-2">
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="h-2 w-10 bg-green-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.75 }}
          className="h-2 w-32 bg-purple-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1 }}
          className="h-2 w-28 bg-orange-300"
        />
        <motion.div
          initial={{ x: 75, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 1.25 }}
          className="h-2 w-2 rounded-full bg-yellow-300"
        />
      </div>
    </div>
  );
}

export default Hero;
