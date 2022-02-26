import { FC } from "react";
import dynamic from "next/dynamic.js";
const FC = dynamic(() => import("./next-fusioncharts.js"), { ssr: false });

const Tokenomics: FC = () => {
  // Create a JSON object to store the chart configurations
  return <FC></FC>;
};

export default Tokenomics;
