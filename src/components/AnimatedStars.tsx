
const AnimatedStars = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <div
            className="bg-pink-300 rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedStars;
