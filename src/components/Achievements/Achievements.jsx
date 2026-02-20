import { motion } from "framer-motion";
import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Academy Graduate",
      description:
        "Completed Cloud Foundations program with strong understanding of cloud computing principles.",
    },
    {
      title: "Blockchain Certification",
      description:
        "Completed foundational course on blockchain technologies and decentralized systems.",
    },
    {
      title: "Smart India Hackathon Finalist",
      description:
        "Qualified for national-level round with an innovative technical solution.",
    },
    {
      title: "CyberHelix Hackathon Winner",
      description:
        "Recognized for developing a secure steganography-based desktop application.",
    },
    {
      title: "Vice President – Student Magazine Club",
      description:
        "Led creative and technical initiatives while coordinating cross-functional student teams.",
    },
  ];

  return (
    <section id="achievements" className="achievements section">
      <h2 className="section-title">Achievements & Leadership</h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
