import mei from "./assets/mei.png";
import hokaru from "./assets/hokaru.png";
import mirai from "./assets/mirai.png";
import nao from "./assets/nao.png";
import ayano from "./assets/ayano.png";
import yomi from "./assets/yomi.png";
import usa from "./assets/usa.png";
import mitsuki from "./assets/mitsuki.png";

import './App.css';

function App() {
  return (
    <>
      <div className="flex justify-between">
        <img src={ayano} alt="ayano" className="logo w-7" />
        <img src={hokaru} alt="hokaru" className="logo w-7" />
        <img src={mei} alt="mei" className="logo w-7" />
        <img src={nao} alt="nao" className="logo w-7" />
        <img src={mirai} alt="mirai" className="logo w-7" />
        <img src={yomi} alt="yomi" className="logo w-7" />
        <img src={usa} alt="usa" className="logo w-7" />
        <img src={mitsuki} alt="mitsuki" className="logo w-7" />
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
