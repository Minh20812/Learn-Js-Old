import { useState } from "react";

export default function TreeView() {
  const [displaytree, setDisplayTree] = useState("none");
  const [openId, setOpenId] = useState();
  function handleClickOpen(id) {
    setOpenId(id);
    if (openId >= id) {
      setDisplayTree("block");
      console.log(openId);
    } else {
      setDisplayTree("none");
    }
  }
  return (
    <div>
      <button onClick={() => handleClickOpen(1)}>Head Tree</button>
      <div style={{ display: displaytree }}>
        <div>
          <button onClick={() => handleClickOpen(2)}>First Tree</button>
          <div style={{ display: displaytree }}>
            <p>First1 Tree</p>
            <p>First2 Tree</p>
            <p>First3 Tree</p>
          </div>
        </div>
        <div>
          <button onClick={() => handleClickOpen(2.1)}>Second Tree</button>
          <div style={{ display: displaytree }}>
            <p>First1 Tree</p>
            <p>First2 Tree</p>
            <p>First3 Tree</p>
          </div>
        </div>
        <div>
          <button onClick={() => handleClickOpen(2.2)}>Third Tree</button>
          <div style={{ display: displaytree }}>
            <p>First1 Tree</p>
            <p>First2 Tree</p>
            <p>First3 Tree</p>
          </div>
        </div>
      </div>
    </div>
  );
}
