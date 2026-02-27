function Particles() {
  return (
    <div className="background-particles">
      {Array.from({ length: 40 }).map((_, i) => {
        const size = Math.random() * 4 + 2; // Random size between 2px and 6px
        return (
          <span
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              opacity: Math.random() * 0.5 + 0.3, // Spread opacity
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default Particles;
