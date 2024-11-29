import { useEffect, useState } from "react";

export default function Text() {
  //State;
  console.log("render 1 TOUJOURS Lecture 1");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount Lecture 2 => useEffect");
  },[]);

  console.log("render 2 TOUJOURS Lecture 1");

  //Comportements;
  const handleClick = () => {
    console.log("Clicked!!");
    setCount((prev) => prev + 1);
  };

  //Affichage(render);
  return (
    <div>
      <h3 className="text-2xl text my-6 font-mono underline">
        Exercice de Counter
      </h3>
      <h5 className="text-lg">
        Counter:
        {/* render 3 TOUJOURS Lecture 1 puis affiche count=0*/}
        {count}
      </h5>
      <button
        onClick={handleClick}
        className="bg-neutral-200 hover:bg-neutral-400 text-black text-lg rounded-md p-1 my-6"
      >
        Increment
      </button>
    </div>
  );
}

//Explications: useEffect => CYCLE DE VIE D'UN COMPOSANT;
/*

PHASE 1: MOUNTING
Lecture 1: render
Lecture 2: componentDidMount() => useEffect()
--------------------------------------------------------------

PHASE 1: UPDATING
Lecture 1: render (re-render)
Lecture 2: componentDidUpdate() => useEffect()
--------------------------------------------------------------

PHASE 1: UNMOUNTING
Lecture 1: ❌
Lecture 2: componentWillUnmount() => useEffect()

*/
