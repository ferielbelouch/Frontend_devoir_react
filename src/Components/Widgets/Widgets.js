import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Widgets.css";

const Input = () => {
  return <input />;
};

const Widgets = () => {
  const [widgetList, setwidgetList] = useState([]);

  const createWidget = (event) => {
    setwidgetList(
      widgetList.concat(
        <div key={setwidgetList.length}>
          <div className="widget">
            <div className="text-center">test</div>
          </div>
        </div>
      )
    );
  };

  return (
    <div>
      <button onClick={createWidget}>Add widget</button>
      {widgetList}
    </div>
  );
};
export default Widgets;
// ReactDOM.render(<Widgets />, document.getElementById("Widgets"));
