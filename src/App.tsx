import { useCallback, useState } from "react";
import { MdOutlineSimCardDownload } from "react-icons/md";


import reika from "./assets/reika-1.png";
import yukari from "./assets/yukari-1.png";

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

// 使用示例
// downloadImage('https://example.com/myImage.png', 'myImage.png');

function App() {
  const [soda, setSoda] = useState([0,0,0,0,0]);
  const [showRetired, setShowRetired] = useState(true);

  const downloadImage = useCallback((imageUrl: string, fileName: string) => {
    const tempLink = document.createElement('a');
    tempLink.href = imageUrl;
    tempLink.setAttribute('download', fileName);
    tempLink.click();
  }, []);

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
      <div className="flex justify-between mb-4">
        {soda.map((cloth, index) =>
            <img key={index} src={sodaImage[cloth * 5 + index]} className="logo h-14" onClick={() => {
              handleClick(cloth, index);
            }} />
        )}
        <img src={yomi} alt="yomi" className="logo h-14" />
        <img src={usa} alt="usa" className="logo h-14" />
        <img src={mitsuki} alt="mitsuki" className="logo h-14" />
      </div>
      <div className="divider my-2">soda shower!</div>
      <div className="card gap-3">
        <div className="flex gap-2">
          <button className="btn-download" onClick={() => downloadImage('/print/soda2.png', 'soda2.png')}>
            <MdOutlineSimCardDownload />
            sdsw2 + wc
          </button>
          <button className="btn-download" onClick={() => downloadImage('/print/soda1.png', 'soda1.png')}>
            <MdOutlineSimCardDownload />
            sdsw1 + wc
          </button>
        </div>
        <div className="flex gap-2">
          <button className="btn-download" onClick={() => downloadImage('/print/ayano2.png', 'ayano2.png')}>
            <MdOutlineSimCardDownload />
            ayano2
            <img src={sodaImage[5]} className="h-12 absolute right-0" />
          </button>
          <button className="btn-download" onClick={() => downloadImage('/print/ayano.png', 'ayano.png')}>
            <MdOutlineSimCardDownload />
            ayano1
            <img src={sodaImage[0]} className="h-12 absolute right-0" />
          </button>
        </div>
        <div className="flex gap-2">
          <button className="btn-download" onClick={() => downloadImage('/print/koharu2.png', 'koharu2.png')}>
            <MdOutlineSimCardDownload />
            koharu2
            <img src={sodaImage[6]} className="h-12 absolute right-0" />
          </button>
          <button className="btn-download" onClick={() => downloadImage('/print/koharu.png', 'koharu.png')}>
            <MdOutlineSimCardDownload />
            koharu1
            <img src={sodaImage[1]} className="h-12 absolute right-0" />
          </button>
        </div>
        <div className="flex gap-2">
          <button className="btn-download" onClick={() => downloadImage('/print/mei2.png', 'mei2.png')}>
            <MdOutlineSimCardDownload />
            mei2
            <img src={sodaImage[7]} className="h-12 absolute right-0" />
          </button>
          <button className="btn-download" onClick={() => downloadImage('/print/mei.png', 'mei.png')}>
            <MdOutlineSimCardDownload />
            mei1
            <img src={sodaImage[2]} className="h-12 absolute right-0" />
          </button>
        </div>
        <div className="flex gap-2">
          <button className="btn-download" onClick={() => downloadImage('/print/nao2.png', 'nao2.png')}>
            <MdOutlineSimCardDownload />
            nao2
            <img src={sodaImage[8]} className="h-12 absolute right-0" />
          </button>
          <button className="btn-download" onClick={() => downloadImage('/print/nao.png', 'nao.png')}>
            <MdOutlineSimCardDownload />
            nao1
            <img src={sodaImage[3]} className="h-12 absolute right-0" />
          </button>
        </div>
        <div className="flex gap-2">
          <button className="btn-download" onClick={() => downloadImage('/print/mirai2.png', 'mirai2.png')}>
            <MdOutlineSimCardDownload />
            mirai2
            <img src={sodaImage[9]} className="h-12 absolute right-0" />
          </button>
          <button className="btn-download" onClick={() => downloadImage('/print/mirai.png', 'mirai.png')}>
            <MdOutlineSimCardDownload />
            mirai1
            <img src={sodaImage[4]} className="h-12 absolute right-0" />
          </button>
        </div>
        <div className="divider my-2">white crayon</div>
        <button className="btn-download" onClick={() => downloadImage('/print/yomi.png', 'yomi.png')}>
          <MdOutlineSimCardDownload />
          yomi
          <img src={yomi} className="h-12 absolute right-0" />
        </button>
        <button className="btn-download" onClick={() => downloadImage('/print/usa.png', 'usa.png')}>
          <MdOutlineSimCardDownload />
          usa
          <img src={usa} className="h-12 absolute right-0" />
        </button>
        <button className="btn-download" onClick={() => downloadImage('/print/mitsuki.png', 'mitsuki.png')}>
          <MdOutlineSimCardDownload />
          mitsuki
          <img src={mitsuki} className="h-12 absolute right-0" />
        </button>
        <div className="divider underline my-2" onClick={() => setShowRetired(!showRetired)}>
          {showRetired ? 'hide': 'show'} retired
        </div>
        {showRetired && <>
          <button className="btn-download btn-outline text-white" onClick={() => downloadImage('/print/reika.png', 'reika.png')}>
            <MdOutlineSimCardDownload />
            reika
            <img src={reika} className="h-12 absolute right-0" />
          </button>
          <button className="btn-download btn-outline text-white" onClick={() => downloadImage('/print/yukari.png', 'yukari.png')}>
            <MdOutlineSimCardDownload />
            yukari
            <img src={yukari} className="h-12 absolute right-0" />
          </button>
        </>}
      </div>
    </>
  );
}

export default App;
