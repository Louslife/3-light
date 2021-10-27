import { useState } from "react";
import Style from "../Style..module.css";

function Box(props) {
  return (
    <>
      <div className={Style.BoxBg} onClick={props.handleOpenLight}>
        <Light open={props.open} inx="0" dataInx={props.dataInx} />
        <Light open={props.open} inx="1" dataInx={props.dataInx} />
        <Light open={props.open} inx="2" dataInx={props.dataInx} />
      </div>
    </>
  );
}

function Light(props) {
  const defineLight = (
    <>
      <div
        data-inx={props.inx}
        className={Style.BoxLight}
        DataInx={props.dataInx}
      ></div>
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
  console.log(props.dataInx,props.inx)
  return (
    <>
      {props.dataInx === props.inx ? BoxLightOpen : defineLight}
    </>
  );
}

function App(props) {
  const [open, setOpen] = useState(false);
  const [dataInx, setDataInx] = useState(null);
  // 其實燈就只有三顆 
  const handleOpenLight = (e) => {
    setDataInx(e.target.getAttribute("data-inx"));

    if (open === false) {
      setOpen(true);
    } 
    else {
      setOpen(false);
    }
    // if data-inx 1~3 都亮了 就在一秒後熄燈
  };
  console.log(dataInx);
  return (
    <div className="App">
      <Box handleOpenLight={handleOpenLight} open={open} dataInx={dataInx} />
    </div>
  );
}

export default App;
