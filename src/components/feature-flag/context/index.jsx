import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading,setLoading] = useState(false);
    const [enabledFlags,setEnabledFlags] = useState({});

    async function fetchFeatureFlags(){
        try {
            const response = await featureFlagDataServiceCall();
            console.log(response);
            setEnabledFlags(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    },[]);

  return <FeatureFlagContext.Provider value={{enabledFlags}}>
    {children}
  </FeatureFlagContext.Provider>;
}
