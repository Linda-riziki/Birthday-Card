import { useState, useEffect, useRef } from "react";
import { Button } from "./components/Button";
import { CometCard } from "./components/CometCard";
import { BackgroundLines } from "./components/BackgroundLines";
import { Vortex } from "./components/ui/vortex";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import "./App.css";

function App() {
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (showCard && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = (rect.left + rect.right) / 2 / window.innerWidth;
      const cardCenterY = (rect.top + rect.bottom) / 2 / window.innerHeight;

      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 1000,
        colors: ["#ec4899", "#d946ef", "#f472b6", "#c084fc", "#ffffff"]
      };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 40 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: {
            x: cardCenterX + randomInRange(-0.05, 0.05),
            y: cardCenterY + randomInRange(-0.05, 0.05)
          }
        });

        if (Math.random() > 0.7) {
          confetti({
            particleCount: 15,
            startVelocity: 50,
            spread: 360,
            ticks: 40,
            zIndex: 1000,
            colors: ["#ffffff", "#fdf2f8"],
            origin: { x: cardCenterX, y: cardCenterY }
          });
        }
      }, 200);
    }
  }, [showCard]);

  return (
    <div className="w-full h-screen">
      <Vortex
        backgroundColor="#000000"
        particleCount={500}
        baseHue={230}
        rangeY={800}
        baseSpeed={0.2}
        rangeSpeed={1.5}
        baseRadius={1}
        rangeRadius={2}
        className="w-full h-full flex flex-col items-center justify-center gap-6 text-white p-4"
      >
        {!showCard && (
          <Button onClick={() => setShowCard(true)}>Click Me!</Button>
        )}

        {showCard && (
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 2, -2, 1, -1, 0],
            }}
            transition={{
              duration: 2,
              rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-full flex justify-center"
          >
            <CometCard className="w-full max-w-sm sm:max-w-md md:max-w-lg">
              <BackgroundLines className="flex flex-col items-center justify-center min-h-[75vh] gap-6 bg-gradient-to-b from-blue-600 to-purple-700 p-4">
                <div className="flex flex-col items-center bg-gradient-to-b from-purple-200 to-blue-400 rounded-2xl p-4 mt-4">
                  <img
                    src="/friend.jpg"
                    alt="Birthday Friend"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <p className="mt-4 text-lg sm:text-xl font-semibold text-center text-blue-800 p-2">
                    Happy Birthday, Branice!🎉 
                    With such a beautiful soul like yours, you deserve everything and more.
                  </p>
                </div>
              </BackgroundLines>
            </CometCard>
          </motion.div>
        )}

        <a href="/letter">🎂</a>
      </Vortex>
    </div>
  );
}

export default App;
