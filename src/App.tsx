import { useCallback, useState } from "react";

import ayano from "./assets/ayano-1.png";
import koharu from "./assets/koharu-1.png";
import mei from "./assets/mei-1.png";
import nao from "./assets/nao-1.png";
import mirai from "./assets/mirai-1.png";
import yomi from "./assets/yomi-1.png";
import usa from "./assets/usa-1.png";
import mitsuki from "./assets/mitsuki-1.png";

import ayano2 from "./assets/ayano-2.png";
import koharu2 from "./assets/koharu-2.png";
import nao2 from "./assets/nao-2.png";
import mei2 from "./assets/mei-2.png";
import mirai2 from "./assets/mirai-2.png";

import './App.css';

const sodaImage = [
  ayano,
  koharu,
  mei,
  nao,
  mirai,
  ayano2,
  koharu2,
  mei2,
  nao2,
  mirai2,
];

function App() {
  const [soda, setSoda] = useState([0,0,0,0,0]);
  const handleClick = useCallback((cloth: number, index: number) => {
    setSoda(soda => {
      return [
        ...soda.slice(0, index),
        (cloth+1) % 2,
        ...soda.slice(index+1)
      ];
    });
  }, []);
  return (
    <>
      <div className="flex justify-between">
        {soda.map((cloth, index) =>
            <img key={index} src={sodaImage[cloth * 5 + index]} className="logo h-14" onClick={() => {
              handleClick(cloth, index);
            }} />
        )}
        <img src={yomi} alt="yomi" className="logo h-14" />
        <img src={usa} alt="usa" className="logo h-14" />
        <img src={mitsuki} alt="mitsuki" className="logo h-14" />
      </div>

      <div className="card">
        <p>
          <code>soda shower!</code> FC is coming...
        </p>
      </div>
      <p className="read-the-docs">
        敬請期待!
      </p>
    </>
  );
}

export default App;
