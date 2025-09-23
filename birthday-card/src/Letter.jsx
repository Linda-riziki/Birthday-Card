import { Vortex } from "./components/ui/vortex";
import { motion } from "motion/react";
import { Button } from "./components/Button";

export default function Letter() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Full-screen Vortex background */}
      <div className="fixed inset-0 w-full h-full">
        <Vortex
          backgroundColor="#000000"
          particleCount={500}
          baseHue={230}
          rangeY={200}
          baseSpeed={0.2}
          rangeSpeed={1.5}
          baseRadius={1}
          rangeRadius={2}
          className="w-full h-full"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex justify-center w-full min-h-screen p-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-4 text-pink-400 text-left">
            My Letter to You ❤️
          </h1>
          <p className="leading-relaxed text-lg text-white whitespace-pre-line text-left">
            Dear Branice, <br></br>

            From the moment you came into my life, you’ve brought light, laughter, and warmth.  
            You inspire me every day with your kindness, your strength, and your beautiful heart.<br></br> <br></br>

            I hope you get to see the beautiful you that I see and embrace it and know deep down that you are enough the way you are and worthy of everything good life has to offer.
            I pray that you have enough strength to persevere life's challenges and stand strong knowing you are blessed and highly favoured.<br></br> <br></br>
            I pray that you get to experience love from great friends and family and lean into it because you deserve it.
            We may be separated by distance but I'll be there for you whenever I can, and I'm willing to share the joys and sorrows that come with life.<br></br> <br></br> 

            I am honestly very proud of you and the far you have come and I hope this year brings you endless joy and blessings, exciting adventures, and more dreams fulfilled.<br></br> <br></br> 
            
            You are amazing Branice and I pray that every morning you wake up, you'll go through the day knowing you are amazing, blessed and highly favoured. 
            You deserve the world and more and I’m so grateful to be part of your story.<br></br> <br></br>

            With all my love ,  <br></br>
            Linda❤️
          </p>

          <div className="mt-6 text-center">
            <Button>
              <a href="/">Back to card</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
