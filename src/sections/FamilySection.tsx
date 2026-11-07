import { motion } from "framer-motion";

function FamilySection() {
  return (
    <section className="family-section">
      <motion.div
        className="family-inner"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="family-eyebrow">
          ✧ WITH THE BLESSINGS OF OUR FAMILIES ✧
        </p>

        <h2 className="family-title">The Families</h2>

        <div className="family-divider">
          <span>❦</span>
        </div>

        <div className="family-grid">
          <div className="family-card">
            <p className="family-label">GROOM'S FAMILY</p>
            <h3>Kamalesh Kumar Yadav</h3>
            <p className="family-relation">Beloved son of</p>
            <p className="family-parent">Mahadev Yadav</p>
            <p className="family-parent">Runa Devi</p>
          </div>

          <div className="family-card">
            <p className="family-label">BRIDE'S FAMILY</p>
            <h3>Neha Kumari</h3>
            <p className="family-relation">Beloved daughter of</p>
            <p className="family-parent">Raj Kishore Yadav</p>
            <p className="family-parent">Geerja Devi</p>
          </div>
        </div>

        <div className="family-bottom">
          <p>TWO FAMILIES • ONE BEAUTIFUL CELEBRATION</p>
          <span>22 NOVEMBER 2026</span>
        </div>
      </motion.div>
    </section>
  );
}

export default FamilySection;