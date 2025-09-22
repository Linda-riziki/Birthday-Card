import { Vortex } from "./components/ui/vortex";
import { motion } from "motion/react";
import { Button } from "./components/Button";

export default function Letter() {
  return (
    <div className="w-full h-screen">
      <Vortex
        backgroundColor="#000000"
        particleCount={500}
        baseHue={230}
        rangeY={200}
        baseSpeed={0.2}
        rangeSpeed={1.5}
        baseRadius={1}
        rangeRadius={2}
        className="w-full h-full flex flex-col items-center justify-center p-4 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-4 text-pink-400 text-center">
            My Letter to You ❤️
          </h1>
          <p className="leading-relaxed text-lg text-white whitespace-pre-line">
            Dear Branice, 

            From the moment you came into my life, you’ve brought light, laughter, and warmth.  
            You inspire me every day with your kindness, your strength, and your beautiful heart.  

            I hope this year brings you endless joy and blessings, exciting adventures, and dreams fulfilled.  
            You deserve the world and more and I’m so grateful to be part of your story. 

            With all my love❤️,  
            Linda
          </p>

          <div className="mt-6 text-center">
            <Button>
              <a href="/">Back to card</a>
            </Button>
          </div>
        </motion.div>
      </Vortex>
    </div>
  );
}
