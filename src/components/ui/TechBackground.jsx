import { motion } from "framer-motion";

export default function TechBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Glow izquierdo */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-56 -left-40 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[170px]"
      />

      {/* Glow derecho */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-green-500/20 blur-[170px]"
      />

      {/* Glow central */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[120px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,.8) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Líneas diagonales */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0px, transparent 40px, rgba(59,130,246,.8) 41px)",
        }}
      />
    </div>
  );
}