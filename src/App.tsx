import { useState } from "react";

import ayano from "./assets/ayano.png";
import koharu from "./assets/koharu.png";
import mei from "./assets/mei.png";
import nao from "./assets/nao.png";
import mirai from "./assets/mirai.png";
import yomi from "./assets/yomi.png";
import usa from "./assets/usa.png";
import mitsuki from "./assets/mitsuki.png";

import ayano2 from "./assets/ayano2.png";
import koharu2 from "./assets/koharu2.png";
import nao2 from "./assets/nao2.png";
import mei2 from "./assets/mei2.png";
import mirai2 from "./assets/mirai2.png";

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
  return (
    <>
      <div className="flex justify-between">
        {soda.map((cloth, index) =>
            <img src={sodaImage[cloth * 5 + index]} className="logo h-14" onClick={() => {
              setSoda(soda => {
                return [
                  ...soda.slice(0, index),
                  (cloth+1) % 2,
                  ...soda.slice(index+1)
                ];
              });
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
