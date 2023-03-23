"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  cardBody: ReactNode;
}

export default function Card({ cardBody }: CardProps) {
  const cardAnimaton = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={cardAnimaton}
      className="card bg-primary text-primary-content shadow-xl"
    >
      {cardBody}
    </motion.div>
  );
}
