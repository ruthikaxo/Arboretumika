// FireflyOverlay.jsx
import { motion } from "framer-motion"
import { useMemo } from "react";

const generateFireflies = (count) => {
  const fireflies = [];
  for (let i = 0; i < count; i++) {
    fireflies.push({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      delay: Math.random() * 6,
      duration: 5 + Math.random() * 4, /* Between 5s and 9s */
      distance: 40 + Math.random() * 60, 
    });
  }
  return fireflies;
};

const FireflyOverlay = ({ count = 15 }) => {
  const fireflies = useMemo(() => generateFireflies(count), [count]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      {fireflies.map((f, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: f.top,
            left: f.left,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #00ffc3 0%, #008877 80%)",
            opacity: 0,
          }}
          animate={{
            x: [0, f.distance, -f.distance / 2, 0],
            y: [0, -f.distance / 2, f.distance, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FireflyOverlay;
