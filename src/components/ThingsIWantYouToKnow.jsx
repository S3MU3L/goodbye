import { motion } from "framer-motion";

const thoughts = [
  {
    number: "01",
    title: "You became important to me.",
    text: "Some people enter your life quietly and somehow become a part of it before you even realize it. That's what happened with you, Israa.",
  },
  {
    number: "02",
    title: "I'll miss the little things.",
    text: "It won't just be the big moments I'll remember. It'll be the conversations, the random laughs, the little things you probably never thought I'd remember.",
  },
  {
    number: "03",
    title: "What we had mattered.",
    text: "Whatever distance changes and whatever life brings next, I don't want you to ever think that our time together meant nothing. It did. To me, it really did.",
  },
  {
    number: "04",
    title: "I want life to be good to you.",
    text: "Wherever you go from here, I hope you find happiness, good people, beautiful moments, and everything you deserve. More than anything, I want you to be okay.",
  },
];

function ThingsIWantYouToKnow() {
  return (
    <section className="things-section">
      <div className="things-header">
        <p className="eyebrow">Chapter Three</p>

        <h2>
          Things I want
          <span>you to know.</span>
        </h2>

        <p>Some things are easier to write than they are to say.</p>
      </div>

      <div className="thoughts-list">
        {thoughts.map((thought, index) => (
          <motion.article
            className="thought-card"
            key={thought.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
          >
            <span className="thought-number">{thought.number}</span>

            <div className="thought-content">
              <h3>{thought.title}</h3>
              <p>{thought.text}</p>
            </div>

            <span className="thought-arrow">↗</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ThingsIWantYouToKnow;
