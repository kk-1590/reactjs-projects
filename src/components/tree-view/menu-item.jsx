import MenuList from "./menu-list";
import { useState } from "react";
import "./styles.css";
import {FaPlus,FaMinus} from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [active, setActive] = useState(false);
  return (
    <li>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>{item.label}</p>
        {item.children && item.children.length > 0 ? (
          <button onClick={() => setActive(!active)}>
            {active ? <FaMinus size={15} /> : <FaPlus size={15} />}
          </button>
        ) : null}
      </div>

      {item && item.children && item.children.length && active ? (
        // item.children.map((nestedItem) => <MenuItem item={nestedItem}/> )
        <MenuList
          style={{ display: active ? "list-item" : "none" }}
          list={item.children}
        />
      ) : null}
    </li>
  );
};

export default MenuItem;
