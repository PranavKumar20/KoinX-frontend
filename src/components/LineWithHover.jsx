import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineWithHover = ({ lowValue, highValue }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Draw line
    svg
      .append("line")
      .attr("x1", 50)
      .attr("y1", 50)
      .attr("x2", 450)
      .attr("y2", 50)
      .style("stroke", "url(#gradient)")
      .style("stroke-width", "10");

    // Draw text for low and high values
    svg
      .selectAll("text")
      .data([
        { value: lowValue, x: 50 },
        { value: highValue, x: 450 },
      ])
      .enter()
      .append("text")
      .attr("x", (d) => d.x)
      .attr("y", 30)
      .text((d) => d.value)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .style("font-weight", "bold");

    // Create gradient
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "0%");

    gradient.append("stop").attr("offset", "0%").attr("stop-color", "blue");

    gradient.append("stop").attr("offset", "50%").attr("stop-color", "green");

    gradient.append("stop").attr("offset", "100%").attr("stop-color", "red");

    // Add event listeners for hover
    svg
      .select("line")
      .on("mouseover", () => {
        svg.selectAll("text").style("display", "block");
      })
      .on("mouseout", () => {
        svg.selectAll("text").style("display", "none");
      });
  }, [lowValue, highValue]);

  return (
    <svg ref={svgRef} width="500" height="100">
      {/* Text for low and high values */}
      <text x="50" y="80" fill="black">
        Low: {lowValue}
      </text>
      <text x="450" y="80" fill="black">
        High: {highValue}
      </text>
    </svg>
  );
};

export default LineWithHover;
