import { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    console.log(id);
    if(selected === null || selected !== id){
        setSelected(id);
    }
    else{
        setSelected(null);
    }
    
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                selected === dataItem.id ? 
                <div className="content">{dataItem.answer}</div>
                : null
              }
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
