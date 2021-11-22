import React, { useState } from "react";

const DashboardContext = React.createContext();

function DashboardContextProvider(props) {
  const [dashboardState, setDashboardState] = useState(
    Array.from({ length: 32 }).map((_, index) => {
      return { name: index + 1, position: 0, direction: true };
    })
  );

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
