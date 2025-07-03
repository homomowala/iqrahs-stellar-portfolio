
import Navigation from "@/components/Navigation";
import AnimatedStars from "@/components/AnimatedStars";
import AmongUsCharacter from "@/components/AmongUsCharacter";
import { BookOpen, Trophy, Gamepad2 } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedStars />
      <Navigation />
      
      {/* Floating Among Us characters */}
      <AmongUsCharacter className="absolute top-20 left-10 animate-float" />
      <AmongUsCharacter className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }} />
      <AmongUsCharacter className="absolute top-1/2 right-20 hidden lg:block" />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Introduction */}
          <div className="animate-slide-in-left mb-16">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent mb-6">
              Hi, I'm Iqrah!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              A passionate reader, athlete, and gamer who loves exploring new worlds 
              through books and badminton courts! ✨
            </p>
          </div>

          {/* About Me Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="glass-effect rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-pink-400 mb-4 flex justify-center">
                <BookOpen size={48} />
              </div>
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Book Lover</h3>
              <p className="text-gray-300 leading-relaxed">
                I dive into different worlds through books, from fantasy adventures 
                to thrilling mysteries. Reading is my escape and inspiration!
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-pink-400 mb-4 flex justify-center">
                <Trophy size={48} />
              </div>
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Athlete</h3>
              <p className="text-gray-300 leading-relaxed">
                Badminton is my passion! I love the quick reflexes, strategy, 
                and the satisfying sound of a perfect smash across the court.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-pink-400 mb-4 flex justify-center">
                <Gamepad2 size={48} />
              </div>
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Gamer</h3>
              <p className="text-gray-300 leading-relaxed">
                Gaming is my digital playground! I enjoy strategic games, 
                adventures, and the occasional Among Us session with friends.
              </p>
            </div>
          </div>

          {/* Fun Quote */}
          <div className="mt-16 animate-slide-in-right">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-pink-300 mb-4">
                "Life is like badminton - you need to keep your eye on the shuttlecock 
                and be ready for anything!"
              </p>
              <p className="text-gray-400">- Iqrah's Life Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
