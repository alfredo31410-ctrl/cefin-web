"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
};

export default function Reveal({ 
  children, 
  delay = 0, 
  width = "100%", 
  className = "" 
}: Props) {
  // Estado para evitar errores de hidratación
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <>{children}</>;

  return (
    <div style={{ position: "relative", width, overflow: "visible" }} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} // Un margen un poco más amplio suele verse mejor
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeOut" // Suaviza la llegada al punto final
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}