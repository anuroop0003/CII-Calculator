import { useContext } from "react";
import { CalculationContext } from "../state management/ContextProvider";

export function Tester(items, callback) {
  const { parameters, setParameters } = useContext(CalculationContext);
  console.log("hello");
  return "hell";
}
