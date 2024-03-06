import { data } from "./data";
import DonutChart from "./DonutChart";

export const FinalChart = ({ width = 300, height = 300 }) => (
  <DonutChart data={data} width={width} height={height} />
);
