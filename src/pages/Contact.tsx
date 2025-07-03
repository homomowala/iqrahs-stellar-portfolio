
import Navigation from "@/components/Navigation";
import AnimatedStars from "@/components/AnimatedStars";
import AmongUsCharacter from "@/components/AmongUsCharacter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 💕",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedStars />
      <Navigation />
      
      {/* Floating Among Us characters */}
      <AmongUsCharacter className="absolute top-20 left-5 animate-float" />
      <AmongUsCharacter className="absolute bottom-20 right-5 animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-300 to-pink-500 bg-clip-text text-transparent mb-6">
              Let's Connect!
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Want to chat about books, badminton, or games? I'd love to hear from you! ✨
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-pink-300 mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-pink-900/20 rounded-lg">
                    <Mail className="text-pink-400" size={24} />
                    <div>
                      <h3 className="font-semibold text-pink-300">Email</h3>
                      <a 
                        href="mailto:iqrah@cloudvera.xyz"
                        className="text-gray-300 hover:text-pink-400 transition-colors"
                      >
                        iqrah@cloudvera.xyz
                      </a>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-lg">
                    <h3 className="text-xl font-semibold text-pink-300 mb-3">
                      What we can chat about:
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-pink-400">📚</span>
                        Favorite books and reading recommendations
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-pink-400">🏸</span>
                        Badminton tips, techniques, and matches
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-pink-400">🎮</span>
                        Gaming sessions and favorite games
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-pink-400">⭐</span>
                        Just saying hi and making new friends!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-pink-300 mb-8">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pink-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="What should I call you?"
                      className="bg-gray-800/50 border-pink-400/30 focus:border-pink-400 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pink-300 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-gray-800/50 border-pink-400/30 focus:border-pink-400 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-pink-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me what's on your mind... 💭"
                      rows={6}
                      className="bg-gray-800/50 border-pink-400/30 focus:border-pink-400 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                    <Heart size={18} />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Fun Footer */}
          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 text-lg">
                "The best conversations happen over shared interests - 
                let's find ours!" 
              </p>
              <p className="text-pink-400 mt-2 font-semibold">✨ Looking forward to connecting! ✨</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
