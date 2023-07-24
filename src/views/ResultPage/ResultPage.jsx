import { useContext } from "react";
import Graph from "../../components/Graph/Graph";
import { CalculationContext } from "../../state management/ContextProvider";

const ResultPage = () => {
  const { parameters, _ } = useContext(CalculationContext);

  const number_of_fuels = Number(parameters?.details?.numberoffuels);

  const plotYears = [2022, 2023, 2024, 2025, 2026];

  const yi = {
    2022: 0,
    2023: 0,
    2024: 1,
    2025: 2,
    2026: 3,
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
        return parameters?.[year]?.FCV?.fc_voyage || 0;
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

  function CFJ(year) {
    let totalcfj = 0;
    for (let i = 1; i <= number_of_fuels; i++) {
      switch (true) {
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] ===
          "Diesel/Gas Oil":
          totalcfj = totalcfj + 3.206;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "LFO":
          totalcfj = totalcfj + 3.151;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "HFO":
          totalcfj = totalcfj + 3.114;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "LPG(Propane)":
          totalcfj = totalcfj + 3.03;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "LPG(Butane)":
          totalcfj = totalcfj + 3;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "LNG":
          totalcfj = totalcfj + 2.75;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "Methanol":
          totalcfj = totalcfj + 1.375;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "Ethanol":
          totalcfj = totalcfj + 1.913;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "Ethane":
          totalcfj = totalcfj + 1.913;
          break;
        case parameters?.[year]?.fuelData?.[`fueltype${i}`] === "Other" &&
          parameters?.[year]?.fuelData?.[`cf${i}`]:
          totalcfj = totalcfj + parameters?.[year]?.fuelData?.[`cf${i}`] || 1;
          break;
        default:
          totalcfj = 1;
          break;
      }
    }
    return totalcfj;
  }

  function FIce(year) {
    return parameters?.[year]?.correctionFactors?.["f_ice"] || 1;
  }

  function FM() {
    if (parameters?.details?.iceclass === "IA_Super" && "IA") return 1.05;
    else return 1;
  }

  function FC(year) {
    if (parameters?.details?.typeofvessel === "Tanker")
      return parameters?.[year]?.correctionFactors?.["fc"];
    else return 1;
  }

  function FVSE(year) {
    if (parameters?.details?.typeofvessel === "Bulk carrier")
      return parameters?.[year]?.correctionFactors?.["fi_vse"] || 1;
    else return 1;
  }

  function DT(year) {
    return parameters?.[year]?.fuelData?.annualdistance || 0;
  }

  function DX(year) {
    return parameters?.[year]?.FCV?.dx || 0;
  }

  function Capacity() {
    switch (true) {
      case parameters?.details?.typeofvessel === "Bulk carrier":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel === "Gas carrier":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel === "Tanker":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel === "Container ship":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel === "General cargo ship":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel === "Refrigerated cargo carrier":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel === "Combination carrier":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel === "LNG carrier":
        return Number(parameters?.details?.deadweight);
      case parameters?.details?.typeofvessel ===
        "Ro-Ro cargo ship (Vehicle Carrier)":
        return Number(parameters?.details?.grossTonnage);
      case parameters?.details?.typeofvessel === "Ro-Ro cargo ship":
        return Number(parameters?.details?.grossTonnage);
      case parameters?.details?.typeofvessel ===
        "Ro-Ro passenger ship (High speed craft)":
        return Number(parameters?.details?.grossTonnage);
      case parameters?.details?.typeofvessel === "Cruise passenger ship":
        return Number(parameters?.details?.grossTonnage);
      default:
        return 1;
    }
  }

  const Z = {
    2022: 0.03,
    2023: 0.05,
    2024: 0.07,
    2025: 0.09,
    2026: 0.11,
  };

  function CCIref() {
    switch (true) {
      case parameters?.details?.typeofvessel === "Bulk carrier":
        if (Number(parameters?.details?.deadweight) >= 279000) {
          return 4745 * Math.pow(279000, -0.622);
        }
        return 4745 * Math.pow(Number(parameters?.details?.deadweight), -0.622);
      case parameters?.details?.typeofvessel === "Gas carrier":
        if (Number(parameters?.details?.deadweight) >= 65000) {
          // do not know
          return (
            144050000000 *
            Math.pow(Number(parameters?.details?.deadweight), -2.071)
          );
        }
        return 8104 * Math.pow(Number(parameters?.details?.deadweight), -0.639);
      case parameters?.details?.typeofvessel === "Tanker":
        return 5247 * Math.pow(Number(parameters?.details?.deadweight), -0.61);
      case parameters?.details?.typeofvessel === "Container ship":
        return 1984 * Math.pow(Number(parameters?.details?.deadweight), -0.489);
      case parameters?.details?.typeofvessel === "General cargo ship":
        if (Number(parameters?.details?.deadweight) >= 20000) {
          return (
            31948 * Math.pow(Number(parameters?.details?.deadweight), -0.792)
          );
        }
        return 588 * Math.pow(Number(parameters?.details?.deadweight), -0.3885);
      case parameters?.details?.typeofvessel === "Refrigerated cargo carrier":
        return 4600 * Math.pow(Number(parameters?.details?.deadweight), -0.557);
      case parameters?.details?.typeofvessel === "Combination carrier":
        return 5119 * Math.pow(Number(parameters?.details?.deadweight), -0.622);
      case parameters?.details?.typeofvessel === "LNG carrier":
        if (Number(parameters?.details?.deadweight) >= 100000) {
          return (
            9.827 * Math.pow(Number(parameters?.details?.deadweight), -0.0)
          );
        } else if (
          Number(parameters?.details?.deadweight) < 100000 &&
          Number(parameters?.details?.deadweight) >= 65000
        ) {
          return (
            144790000000000 *
            Math.pow(Number(parameters?.details?.deadweight), -2.673)
          );
        }
        return 144790000000000 * Math.pow(65000, -2.673);
      case parameters?.details?.typeofvessel ===
        "Ro-Ro cargo ship (Vehicle Carrier)":
        if (Number(parameters?.details?.grossTonnage) >= 57700) {
          return 3627 * Math.pow(57700, -0.59);
        } else if (
          Number(parameters?.details?.grossTonnage) < 57700 &&
          Number(parameters?.details?.grossTonnage) >= 30000
        ) {
          return (
            3627 * Math.pow(Number(parameters?.details?.grossTonnage), -0.59)
          );
        }
        return (
          330 * Math.pow(Number(parameters?.details?.grossTonnage), -0.329)
        );
      case parameters?.details?.typeofvessel === "Ro-Ro cargo ship":
        return (
          1967 * Math.pow(Number(parameters?.details?.grossTonnage), -0.485)
        );
      case parameters?.details?.typeofvessel ===
        "Ro-Ro passenger ship (High speed craft)":
        return (
          2023 * Math.pow(Number(parameters?.details?.grossTonnage), -0.46)
        );
      case parameters?.details?.typeofvessel === "Cruise passenger ship":
        return (
          930 * Math.pow(Number(parameters?.details?.grossTonnage), -0.383)
        );
      default:
        return 1;
    }
  }

  function DDVectors() {
    let d1,
      d2,
      d3,
      d4 = 0;
    switch (true) {
      case parameters?.details?.typeofvessel === "Bulk carrier":
        (d1 = 0.86), (d2 = 0.94), (d3 = 1.06), (d4 = 1.18);
        break;
      case parameters?.details?.typeofvessel === "Gas carrier":
        if (Number(parameters?.details?.deadweight) >= 65000) {
          (d1 = 0.81), (d2 = 0.91), (d3 = 1.12), (d4 = 1.44);
          break;
        }
        (d1 = 0.85), (d2 = 0.95), (d3 = 1.06), (d4 = 1.25);
        break;
      case parameters?.details?.typeofvessel === "Tanker":
        (d1 = 0.82), (d2 = 0.93), (d3 = 1.08), (d4 = 1.28);
        break;
      case parameters?.details?.typeofvessel === "Container ship":
        (d1 = 0.83), (d2 = 0.94), (d3 = 1.07), (d4 = 1.19);
        break;
      case parameters?.details?.typeofvessel === "General cargo ship":
        (d1 = 0.83), (d2 = 0.94), (d3 = 1.06), (d4 = 1.19);
        break;
      case parameters?.details?.typeofvessel === "Refrigerated cargo carrier":
        (d1 = 0.78), (d2 = 0.91), (d3 = 1.07), (d4 = 1.2);
        break;
      case parameters?.details?.typeofvessel === "Combination carrier":
        (d1 = 0.87), (d2 = 0.96), (d3 = 1.06), (d4 = 1.14);
        break;
      case parameters?.details?.typeofvessel === "LNG carrier":
        if (Number(parameters?.details?.deadweight) >= 100000) {
          (d1 = 0.89), (d2 = 0.98), (d3 = 1.06), (d4 = 1.13);
          break;
        }
        (d1 = 0.78), (d2 = 0.92), (d3 = 1.1), (d4 = 1.37);
        break;
      case parameters?.details?.typeofvessel ===
        "Ro-Ro cargo ship (Vehicle Carrier)":
        (d1 = 0.86), (d2 = 0.94), (d3 = 1.06), (d4 = 1.16);
        break;
      case parameters?.details?.typeofvessel === "Ro-Ro cargo ship":
        (d1 = 0.76), (d2 = 0.89), (d3 = 1.08), (d4 = 1.27);
        break;
      case parameters?.details?.typeofvessel ===
        "Ro-Ro passenger ship (High speed craft)":
        (d1 = 0.76), (d2 = 0.92), (d3 = 1.14), (d4 = 1.3);
        break;
      case parameters?.details?.typeofvessel === "Cruise passenger ship":
        (d1 = 0.87), (d2 = 0.95), (d3 = 1.06), (d4 = 1.16);
        break;
      default:
        return 1;
    }
    return { d1, d2, d3, d4 };
  }

  const RequiredCII = plotYears.map(
    (year) => ((1 - Z[year]) / 100) * CCIref() * 100
  );

  const superior_boundary = plotYears.map(
    (year, i) => DDVectors()["d1"] * RequiredCII[i]
  );

  const lower_boundary = plotYears.map(
    (year, i) => DDVectors()["d2"] * RequiredCII[i]
  );

  const upper_boundary = plotYears.map(
    (year, i) => DDVectors()["d3"] * RequiredCII[i]
  );

  const inferior_boundary = plotYears.map(
    (year, i) => DDVectors()["d4"] * RequiredCII[i]
  );

  const lower = lower_boundary.map((item, i) => item - superior_boundary[i]);

  const upper = upper_boundary.map((item, i) => item - lower_boundary[i]);

  const inferior = inferior_boundary.map((item, i) => item - upper_boundary[i]);

  const maximum_boundary = inferior_boundary.map((val, i) => Math.ceil(val));

  const result = parameters?.details?.numberofyears?.map((year) => {
    const numerator =
      CFJ(year) *
      (AnnualFuelConsumption(year) -
        (FCVoyage(year) +
          TFJ(year) +
          (0.75 - 0.03 * yi[year]) *
            (FCElectrical(year) + FCOther(year) + FCBoiler(year))));

    const denominator =
      FIce(year) *
      FM() *
      FC(year) *
      FVSE(year) *
      Capacity() *
      (DT(year) - DX(year));

    return numerator / denominator || 0;
  });

  console.log("+++++++++++++++++++++++++++++++++++");
  console.log("result", result);
  console.log("RequiredCII", RequiredCII);
  console.log("superior_boundary", superior_boundary);
  console.log("lower_boundary", lower_boundary);
  console.log("upper_boundary", upper_boundary);
  console.log("inferior_boundary", inferior_boundary);
  console.log("maximum_boundary", maximum_boundary);
  console.log("+++++++++++++++++++++++++++++++++++");

  return (
    <Graph
      plotYears={plotYears}
      superior_boundary={superior_boundary}
      lower_boundary={lower}
      upper_boundary={upper}
      inferior_boundary={inferior}
      RequiredCII={RequiredCII}
      result={result}
      maximum_boundary={maximum_boundary}
    />
  );
};
export default ResultPage;
