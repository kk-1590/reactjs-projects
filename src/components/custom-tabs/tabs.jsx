import { useState } from "react";
import './tabs.css';

const Tabs = ({tabsContent,onChange}) => {

    const [currentTabIndex,setCurrentTabIndex] = useState(0);
    const [active,setActive] = useState(0);

    function handleClick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
        setActive(getCurrentIndex);
    }

  return (
    <div className="wrapper">
        <div className="heading">
            {tabsContent.map((tabItem,index) => {
                return <div className={active === index ? 'activeTab' : ''} onClick={() => handleClick(index)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                </div>
            })}
        </div>
        <div className="content">
            {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
    </div>
  )
}

export default Tabs;