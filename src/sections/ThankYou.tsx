import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function ThankYou() {
  return (
    <section className="thankyou-section">
      <motion.div
        className="thankyou-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Sparkles className="thankyou-sparkle" size={25} />

        <p className="thankyou-eyebrow">
          A NEW CHAPTER BEGINS
        </p>

        <h2>Thank You!</h2>

        <div className="thankyou-heart">
          <Heart size={22} />
        </div>

        <p className="thankyou-message">
          Your love, blessings and presence mean the world to us.
          We look forward to celebrating this beautiful beginning
          with our family and friends.
        </p>

        <p className="thankyou-blessing">
          With love, gratitude and heartfelt blessings
        </p>

        <h3>Kamalesh <span>&</span> Neha</h3>

        <p className="thankyou-date">22 NOVEMBER 2026</p>

        <div className="thankyou-footer">
          MADE WITH LOVE <Heart size={12} /> 2026
        </div>
      </motion.div>
    </section>
  );
}

export default ThankYou;