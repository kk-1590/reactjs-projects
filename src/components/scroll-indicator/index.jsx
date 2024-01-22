import { useState, useEffect } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);

      if (json && json.products && json.products.length > 0) {
        setData(json.products);
        setLoading(false);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  console.log(scrollPercentage);

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
      <div className="scroll-progress-tracking-indicator">
        <div className="current-progress-bar" style={{width: `${scrollPercentage}%`,backgroundColor:"blue",height:'5px',position:'fixed',top:'0px'}}> 
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => {
              return <h3 key={item.id}>{item.title}</h3>;
            })
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
