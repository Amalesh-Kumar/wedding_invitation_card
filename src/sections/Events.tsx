
import { motion } from "framer-motion";
import {
  Flower2,
  Heart,
  CalendarDays,
  Clock,
} from "lucide-react";

const events = [
  {
    id: 1,
    name: "Kumran Ceremony",
    subtitle: "A beautiful celebration of traditions, family and blessings",
    date: "21 November 2026",
    time: "To be confirmed",
    icon: Flower2,
  },
  {
    id: 2,
    name: "Wedding Ceremony",
    subtitle: "The beginning of our forever",
    date: "22 November 2026",
    time: "To be confirmed",
    icon: Heart,
  },
];

export default function Events() {
  return (
    <section className="events-section" id="events">
      <motion.div
        className="events-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Flower2 size={25} />

        <p className="events-eyebrow">
          CELEBRATING LOVE & TRADITIONS
        </p>

        <h2>Wedding Celebrations</h2>

        <p className="events-description">
          Join us as we celebrate these beautiful moments
          with our family and friends.
        </p>
      </motion.div>

      <div className="events-timeline">
        {events.map((event, index) => {
          const Icon = event.icon;

          return (
            <motion.article
              key={event.id}
              className={`event-card ${
                index % 2 === 0 ? "event-left" : "event-right"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="event-card-inner">
                <div className="event-icon">
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <span className="event-number">
                  CELEBRATION 0{event.id}
                </span>

                <h3>{event.name}</h3>

                <p className="event-subtitle">
                  {event.subtitle}
                </p>

                <div className="event-detail">
                  <CalendarDays size={16} />
                  <span>{event.date}</span>
                </div>

                <div className="event-detail">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>

                <div className="event-ornament">
                  ─── ❧ ───
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <p className="events-footer">
        WITH LOVE, JOY AND ENDLESS BLESSINGS
      </p>
    </section>
  );
}
