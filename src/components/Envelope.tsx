
import { useState } from "react";
import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);
    window.setTimeout(onOpen, 1100);
  };

  return (
    <motion.div
      className="invitation-entry"
      animate={
        opening
          ? { opacity: 0, scale: 1.04, y: -15 }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.9 }}
    >
      <img
        src="/images/envelope-welcome.png"
        alt="Wedding invitation of Kamalesh and Neha with Lord Ganesha"
        className="invitation-entry-image"
      />

      <button
        type="button"
        className="golden-seal-hotspot"
        onClick={handleOpen}
        disabled={opening}
        aria-label="Tap the golden seal to open the wedding invitation"
      />
    </motion.div>
  );
}
