import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function FinalScene() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="final-section">
      <div className="final-content">
        <p className="eyebrow">The last chapter</p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          And if you ever
          <span>miss this...</span>
        </motion.h2>

        <motion.p
          className="final-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Come back here, Israa.
        </motion.p>

        {!revealed && (
          <motion.button
            className="last-button"
            onClick={() => setRevealed(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            One last thing
          </motion.button>
        )}

        <AnimatePresence>
          {revealed && (
            <motion.div
              className="final-message"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="final-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
              ></motion.div>

              <motion.p
                className="final-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                For Israa,
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Wherever life takes you,
                <span>I hope it is kind to you.</span>
              </motion.h3>

              <motion.p
                className="final-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                And if one day you look back at this chapter of your life, I
                hope you remember it with a smile.
              </motion.p>

              <motion.p
                className="final-goodbye"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                Thank you for being part of my story.
              </motion.p>

              <motion.div
                className="final-heart"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.6,
                  duration: 0.8,
                  type: "spring",
                }}
              >
                ♡
              </motion.div>

              <motion.p
                className="final-signature"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
              >
                — Samuel
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default FinalScene;
