import { useState } from "react";

const ScrollIndicator = ({url}) => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        async function fetchData(){
            
        }
    })

  return <div>ScrollIndicator</div>;
};

export default ScrollIndicator;
