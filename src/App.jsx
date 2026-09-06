import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Memories from "./components/Memories";
import ThingsIWantYouToKnow from "./components/ThingsIWantYouToKnow";
import Letter from "./components/Letter";
import FinalScene from "./components/FinalScene";
import MusicPlayer from "./components/MusicPlayer";

import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="app">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <MusicPlayer started={started} />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.section
            key="opening"
            className="opening"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="opening-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <p className="eyebrow">For Israa</p>

              <h1>
                Before
                <span>you go.</span>
              </h1>

              <p className="opening-text">
                Before you go, Israa, there are a few things I want you to
                remember.
              </p>

              <motion.button
                className="enter-button"
                onClick={() => setStarted(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open it
              </motion.button>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div
            key="story"
            className="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <section className="story">
              <div className="story-content">
                <p className="eyebrow">Chapter One</p>

                <h2>Before anything else...</h2>

                <p>
                  I want you to know that meeting you became one of those
                  moments I didn't realize would mean so much to me.
                </p>

                <p>
                  And now that you're leaving, I don't want distance to make you
                  forget how much our time together mattered.
                </p>

                <div className="scroll-hint">
                  <span>Keep going</span>
                  <div></div>
                </div>
              </div>
            </section>

            <Memories />
            <ThingsIWantYouToKnow />
            <Letter />
            <FinalScene />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
