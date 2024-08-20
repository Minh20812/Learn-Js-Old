import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState();
  function handleSelected(getSelectedId) {
    setSelected(getSelectedId === selected ? null : getSelectedId);
  }
  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div key={dataItem.id}>
            <h3>{dataItem.question}</h3>
            <span onClick={() => handleSelected(dataItem.id)}>+</span>
            {selected === dataItem.id ? (
              <div>{dataItem.answer}</div>
            ) : (
              <div></div>
            )}
          </div>
        ))
      ) : (
        <div>Null</div>
      )}
    </div>
  );
}
