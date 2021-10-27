import { useState, useEffect } from "react";
import Style from "../Style..module.css";

function Box(props) {
  return (
    <>
      <div className={Style.BoxBg} onClick={props.handleOpenLight}>
        <Light openList={props.openList} inx="0" dataInx={props.dataInx} />
        <Light openList={props.openList} inx="1" dataInx={props.dataInx} />
        <Light openList={props.openList} inx="2" dataInx={props.dataInx} />
      </div>
    </>
  );
}

function Light(props) {
  const defineLight = (
    <>
      <div data-inx={props.inx} className={Style.BoxLight}></div>
    </>
  );

  const BoxLightOpen = (
    <>
      <div
        data-inx={props.inx}
        className={Style.BoxLightOpen}
        dataInx={props.dataInx}
      ></div>
    </>
  );
  return <>{props.openList.includes(props.inx) ? BoxLightOpen : defineLight}</>;
}

function App() {
  const [openList, setOpenList] = useState([]);
  const handleOpenLight = (e) => {
    if (openList.length === 3) return
    const inx = e.target.getAttribute("data-inx");
    setOpenList((e) => {
      if (e.includes(inx)) {
        return e.filter((item) => item !== inx);
      } else {
        return [...e, inx];
      }
    });
  };
  useEffect(() => {
    if (openList.length === 3) {

      setTimeout(() => {
        setOpenList([]);
      }, 1000);
    }
  }, [openList]);

  return (
    <div className="App">
      <Box handleOpenLight={handleOpenLight} openList={openList} />
    </div>
  );
}

export default App;
