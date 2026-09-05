import { motion } from "framer-motion";

function Letter() {
  return (
    <section className="letter-section">
      <motion.div
        className="letter-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1 }}
      >
        <div className="letter-top">
          <span>Chapter Four</span>
          <span>For Israa</span>
        </div>

        <div className="letter-content">
          <motion.p
            className="letter-greeting"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Dear Israa,
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I kept thinking about what I could possibly say before you leave.
            There are probably a hundred things I could write, but somehow none
            of them feel like enough.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            I just want you to know that meeting you meant something to me. You
            became someone I genuinely cared about, and I'm grateful for every
            conversation, every laugh, and every little moment we got to share.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I know you're leaving, and I know things might change. Life has a
            way of taking people in different directions, and neither of us
            knows exactly what comes next.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            But I don't want goodbye to make everything before it feel less
            important. What we shared happened. It was real. And I'll always be
            glad that it did.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            So wherever you end up, please take care of yourself. Keep being the
            person you are. Keep laughing. Keep chasing the things that make you
            happy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            And if you ever wonder whether someone here was genuinely happy to
            have known you, I hope you remember me.
          </motion.p>

          <motion.p
            className="letter-final"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Thank you for being a part of my life, Israa.
          </motion.p>

          <motion.div
            className="letter-signature"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span>Until we meet again,</span>
            <strong>Samuel.</strong>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Letter;
