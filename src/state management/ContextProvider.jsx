import { createContext, useState } from "react";
export const CalculationContext = createContext();

export function ContextProvider({ children }) {
  const [parameters, setParameters] = useState({});
  // console.log(parameters);
  return (
    <CalculationContext.Provider value={{ parameters, setParameters }}>
      {children}
    </CalculationContext.Provider>
  );
}
