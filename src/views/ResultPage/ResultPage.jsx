import { useContext } from "react";
import { CalculationContext } from "../../state management/ContextProvider";

const ResultPage = () => {
  const { parameters, _ } = useContext(CalculationContext);

  function FCElectrical(year) {
    switch (true) {
      case parameters?.[year]?.FCE?.param1 && parameters?.[year]?.FCE?.param11:
        return (
          parameters?.[year]?.FCE?.reefer_kwh *
            parameters?.[year]?.FCE?.sfoc11 || 0
        );
      case parameters?.[year]?.FCE?.param2 && parameters?.[year]?.FCE?.param12:
        const Reefer_days_port =
          ((parameters?.[year]?.FCE?.noc_arrival +
            parameters?.[year]?.FCE?.noc_depart) /
            2) *
          parameters?.[year]?.FCE?.days_port;
        return (
          2.75 * // 𝐶𝑥 represents a default reefer consumption of 2.75 kW/h
            24 *
            parameters?.[year]?.FCE?.sfoc_avg *
            (parameters?.[year]?.FCE?.reefer_days_sea + Reefer_days_port) || 0
        );
      case parameters?.[year]?.FCE?.param3:
        return (
          parameters?.[year]?.FCE?.cooling_kwh * parameters?.[year]?.FCE?.sfoc31
        );
      default:
        return 0;
    }
  }

  function FCOther(year) {
    switch (true) {
      case parameters?.[year]?.Adj_Types?.FCO:
        return parameters?.[year]?.FCO?.fc_others || 0;
      default:
        return 0;
    }
  }

  function FCVoyage(year) {
    switch (true) {
      case parameters?.[year]?.FCO?.param1 || parameters?.[year]?.FCO?.param2:
        return parameters?.[year]?.FCO?.fc_others || 0;
      default:
        return 0;
    }
  }

  function FCBoiler(year) {
    switch (true) {
      case parameters?.[year]?.FCB?.param1 || parameters?.[year]?.FCB?.param2:
        return parameters?.[year]?.FCB?.fc_boiler || 0;
      default:
        return 0;
    }
  }

  const result = parameters?.details?.numberofyears?.map(
    (year) => FCElectrical(year) + FCOther(year) + FCBoiler(year)
  );

  console.log("result", result);
  console.log("parameters", parameters);
  return <div>Hello</div>;
};
export default ResultPage;
