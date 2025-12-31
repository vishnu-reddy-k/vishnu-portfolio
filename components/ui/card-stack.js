"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-full md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-slate-900/40 backdrop-blur-md border border-white/10 h-60 w-full md:h-60 md:w-96 rounded-3xl p-6 shadow-xl flex flex-col justify-between cursor-grab active:cursor-grabbing"
            style={{ transformOrigin: "top center" }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                 {card.icon}
                 <p className="text-cyan-400 font-bold text-lg">{card.name}</p>
              </div>
              <p className="text-slate-400 font-normal leading-relaxed text-sm">
                {card.content}
              </p>
            </div>
            <div>
              <p className="text-slate-500 font-medium text-xs">Proficiency</p>
              <p className="text-white font-semibold">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
