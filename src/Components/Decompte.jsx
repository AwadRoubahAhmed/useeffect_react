import { useEffect, useState } from "react";

export default function Decompte() {
  //State
  const [duration, setDuration] = useState(5);
  const [secondsLeft, setSecondsLeft] = useState(duration);

  //Comportement
  const handleChange = (v) => {
    setDuration(v);
    setSecondsLeft(v);
  };

  useEffect(() => {
    //Lorsque le composant est monté, on démarre le timer;
    const timer = setInterval(() => {
      setSecondsLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);

    //Lorsque le composant est démonté, on arrete le timer;
    return () => {
      clearInterval(timer);
    };

    //On met à jour le décompte uniquement si la durée change
  }, [duration]);

  //Affichage(render)
  return (
    <div className="w-1/2 text-black mx-auto my-5 bg-cyan-400 rounded-md">
      <input
        className="w- mx-auto capitalize my-4 p-0.5 rounded-sm text-lg text-black"
        value={duration}
        placeholder="Timer..."
        onChange={handleChange}
      />
      <p className="text-lg font-mono">Décompte: {secondsLeft}</p>
    </div>
  );
}
