import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Envelope from "./components/Envelope";
import DateReveal from "./sections/DateReveal";
import Events from "./sections/Events";
import FamilySection from "./sections/FamilySection";
import ThankYou from "./sections/ThankYou";

import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="wedding-app">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="envelope"
            className="welcome-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7 }}
          >
            <div className="corner corner-tl" />
            <div className="corner corner-tr" />
            <div className="corner corner-bl" />
            <div className="corner corner-br" />

            <div className="welcome-heading">
              <Sparkles size={17} />
              <p>A SPECIAL INVITATION</p>
            </div>

            <Envelope onOpen={() => setOpened(true)} />

            <p className="welcome-footer">
              MADE WITH LOVE & BLESSINGS
            </p>
          </motion.section>
        ) : (
          <motion.section
            key="palace-welcome"
            className="palace-welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="palace-artwork-container"
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <img
                src="/images/palace-welcome.png"
                alt="Kamalesh and Neha wedding invitation"
                className="palace-artwork"
              />
            </motion.div>

            <motion.p
              className="palace-bottom-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              ✦ A CELEBRATION OF LOVE & TOGETHERNESS ✦
            </motion.p>

            <DateReveal />
            <Events />
            <FamilySection />
            <ThankYou />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;