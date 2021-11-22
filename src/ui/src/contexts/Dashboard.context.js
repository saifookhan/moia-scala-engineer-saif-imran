import React, { useEffect, useState, useRef } from "react";
import { getDashboardStatus } from "../helpers/serverModule/serverModule";

const DashboardContext = React.createContext();

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

function DashboardContextProvider(props) {
  const [dashboardState, setDashboardState] = useState([]);

  async function fetchData() {
    const response = await getDashboardStatus();
    setDashboardState(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useInterval(() => {
    // Do some API call here
    setTimeout(() => {
      console.log("API call");
      fetchData();
    }, 500);
  }, 2000);

  return (
    <DashboardContext.Provider
      value={{
        dashboardState,
        setDashboardState,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
}

export { DashboardContextProvider, DashboardContext };
