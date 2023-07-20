import { useContext } from "react";
import { CalculationContext } from "../../../state management/ContextProvider";

export default function FCOthers() {
  const { parameters, setParameters } = useContext(CalculationContext);
  return <div></div>;
}
