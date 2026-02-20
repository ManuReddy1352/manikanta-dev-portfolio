function Particles() {
  return (
    <div className="background-particles">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        ></span>
      ))}
    </div>
  );
}

export default Particles;
