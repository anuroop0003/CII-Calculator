import { useContext } from "react";
import { CalculationContext } from "../../state management/ContextProvider";

const ResultPage = () => {
  const { parameters, _ } = useContext(CalculationContext);

  const number_of_fuels = Number(parameters?.details?.numberoffuels);

  const yi = {
    2022: 0,
    2023: 0,
    2024: 1,
    2025: 2,
    2025: 3,
  };

  function FCElectrical(year) {
    switch (true) {
      case parameters?.[year]?.FCE?.param1 && parameters?.[year]?.FCE?.param11:
        return (
          parameters?.[year]?.FCE?.reefer_kwh *
            parameters?.[year]?.FCE?.sfoc11 || 0
        );
      case parameters?.[year]?.FCE?.param1 && parameters?.[year]?.FCE?.param12:
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
      case parameters?.[year]?.FCE?.param2:
        return (
          parameters?.[year]?.FCE?.cooling_kwh *
            parameters?.[year]?.FCE?.sfoc21 || 0
        );
      case parameters?.[year]?.FCE?.param3:
        return (
          parameters?.[year]?.FCE?.discharge_kwh *
            parameters?.[year]?.FCE?.sfoc31 || 0
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
      case parameters?.[year]?.Adj_Types?.FCV:
        return (
          parameters?.[year]?.FCV?.dx * parameters?.[year]?.FCV?.fc_voyage || 0
        );
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

  function AnnualFuelConsumption(year) {
    let annualfuelconsumption = 0;
    for (let i = 1; i <= number_of_fuels; i++) {
      annualfuelconsumption =
        annualfuelconsumption +
        Number(parameters?.[year]?.fuelData?.[`fuelconsumption${i}`] ?? 0);
    }
    return annualfuelconsumption;
  }

  function TFJ(year) {
    switch (true) {
      case parameters?.[year]?.TFJ?.param1 && parameters?.[year]?.TFJ?.param11:
        const TFJ1 =
          (1 -
            6.1742 *
              Math.pow(Number(parameters?.details?.deadweight), -0.246)) *
          parameters?.[year]?.TFJ?.fcs_j;
        return TFJ1 || 0;

      case parameters?.[year]?.TFJ?.param2 && parameters?.[year]?.TFJ?.param21:
        const TFJ2 =
          (1 -
            5.6805 *
              Math.pow(Number(parameters?.details?.deadweight), -0.208)) *
          AnnualFuelConsumption(year);
        return TFJ2 || 0;

      default:
        return 0;
    }
  }

  const result = parameters?.details?.numberofyears?.map(
    (year) =>
      AnnualFuelConsumption(year) -
      (FCVoyage(year) +
        TFJ(year) +
        (0.75 - 0.03 * yi[year]) *
          (FCElectrical(year) + FCOther(year) + FCBoiler(year)))
  );

  // console.log(TFJ(2022));
  console.log("result", result);
  // console.log("parameters", parameters);
  return <div>Hello</div>;
};
export default ResultPage;
