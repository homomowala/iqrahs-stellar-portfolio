
import Navigation from "@/components/Navigation";
import AnimatedStars from "@/components/AnimatedStars";
import AmongUsCharacter from "@/components/AmongUsCharacter";
import { useState, useEffect } from "react";

const SkillBar = ({ skill, percentage, delay = 0 }: { skill: string; percentage: number; delay?: number }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-8 animate-fade-in-up" style={{ animationDelay: `${delay / 1000}s` }}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-pink-300">{skill}</h3>
        <span className="text-pink-400 font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transition-all duration-2000 ease-out relative"
          style={{ width: `${animatedPercentage}%` }}
        >
          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedStars />
      <Navigation />
      
      {/* Floating Among Us characters */}
      <AmongUsCharacter className="absolute top-32 right-10 animate-float" />
      <AmongUsCharacter className="absolute bottom-32 left-10 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent mb-6">
              My Skills
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Here's what I'm passionate about and how I rate my abilities!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sports Skills */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-pink-300 mb-8 text-center">
                🏸 Sports & Athletics
              </h2>
              <SkillBar skill="Badminton" percentage={75} delay={500} />
              <div className="mt-6 p-4 bg-pink-900/20 rounded-lg">
                <p className="text-gray-300 text-sm">
                  I've been playing badminton for years and love the strategic gameplay, 
                  quick reflexes, and the satisfaction of a perfect drop shot!
                </p>
              </div>
            </div>

            {/* Gaming Skills */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-in-right">
              <h2 className="text-3xl font-bold text-pink-300 mb-8 text-center">
                🎮 Gaming
              </h2>
              <SkillBar skill="Gaming" percentage={55} delay={1000} />
              <div className="mt-6 p-4 bg-pink-900/20 rounded-lg">
                <p className="text-gray-300 text-sm">
                  I enjoy various games from strategy to adventure. Among Us is definitely 
                  one of my favorites - I'm pretty good at being sneaky! 🕵️‍♀️
                </p>
              </div>
            </div>
          </div>

          {/* Additional Interests */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-pink-300 mb-8 text-center">
                📚 Other Passions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-pink-900/20 rounded-lg">
                  <div className="text-4xl mb-4">📖</div>
                  <h3 className="text-xl font-semibold text-pink-300 mb-2">Reading</h3>
                  <p className="text-gray-300 text-sm">
                    Fantasy, mystery, and sci-fi are my go-to genres!
                  </p>
                </div>
                <div className="text-center p-6 bg-pink-900/20 rounded-lg">
                  <div className="text-4xl mb-4">🏃‍♀️</div>
                  <h3 className="text-xl font-semibold text-pink-300 mb-2">Athletics</h3>
                  <p className="text-gray-300 text-sm">
                    Always looking to improve my physical fitness and skills!
                  </p>
                </div>
                <div className="text-center p-6 bg-pink-900/20 rounded-lg">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-semibold text-pink-300 mb-2">Learning</h3>
                  <p className="text-gray-300 text-sm">
                    Constantly exploring new hobbies and interests!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
