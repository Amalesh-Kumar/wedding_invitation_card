
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import ScratchCard from "../components/ScratchCard";

export default function DateReveal() {
  const [revealedCount, setRevealedCount] = useState(0);

  const handleReveal = () => {
    setRevealedCount((count) => Math.min(count + 1, 3));
  };

  return (
    <section className="date-reveal-section">

      <motion.div
        className="date-reveal-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Sparkles size={22} />

        <p className="date-eyebrow">
          A LITTLE SURPRISE FOR YOU
        </p>

        <h2>Discover Our Special Date</h2>

        <p>
          Scratch each golden card completely to reveal
          our day of celebration.
        </p>

        <div className="date-heart">
          <Heart size={19} />
        </div>
      </motion.div>

      <div className="scratch-cards">

        <ScratchCard
          label="THE DAY"
          value="22"
          onReveal={handleReveal}
        />

        <ScratchCard
          label="THE MONTH"
          value="NOV"
          onReveal={handleReveal}
        />

        <ScratchCard
          label="THE YEAR"
          value="2026"
          onReveal={handleReveal}
        />

      </div>

      <motion.div
        className="date-complete"
        initial={{ opacity: 0 }}
        animate={{
          opacity: revealedCount === 3 ? 1 : 0,
        }}
      >
        <Sparkles size={20} />

        <h3>Save The Date!</h3>

        <p>22 November 2026</p>

        <span>We can't wait to celebrate with you.</span>
      </motion.div>

      <p className="scratch-progress">
        {revealedCount === 3
          ? "ALL THREE CARDS REVEALED"
          : `${revealedCount} OF 3 CARDS REVEALED`}
      </p>

    </section>
  );
}
