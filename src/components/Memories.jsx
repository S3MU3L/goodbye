import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memories = [
  {
    id: 1,
    title: "The beginning",
    text: "Somehow, one conversation became something I never expected.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "That moment",
    text: "One of those moments that looked ordinary at the time, but means much more now.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "The little things",
    text: "It's funny how the smallest moments can become the ones you remember the most.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Us",
    text: "Whatever happens next, this part of our story will always be real.",
    image:
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=85",
  },
];

function Memories() {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section className="memories">
      <div className="memories-header">
        <p className="eyebrow">Chapter Two</p>

        <h2>
          Moments worth
          <span>keeping.</span>
        </h2>

        <p className="memories-intro">
          Not every important memory is a huge moment. Sometimes it's just a
          feeling you never want to lose.
        </p>
      </div>

      <div className="memory-grid">
        {memories.map((memory, index) => (
          <motion.button
            key={memory.id}
            className={`memory-card memory-${index + 1}`}
            onClick={() => setSelectedMemory(memory)}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={memory.image} alt={memory.title} />

            <div className="memory-overlay">
              <span>0{index + 1}</span>
              <h3>{memory.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="memory-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="memory-modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedMemory.image} alt={selectedMemory.title} />

              <div className="memory-modal-text">
                <p className="memory-number">
                  Memory {String(selectedMemory.id).padStart(2, "0")}
                </p>

                <h3>{selectedMemory.title}</h3>

                <p>{selectedMemory.text}</p>

                <button
                  className="close-memory"
                  onClick={() => setSelectedMemory(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Memories;
